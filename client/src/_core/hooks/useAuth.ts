import { supabase } from "@/lib/supabase";
import { useCallback, useEffect, useMemo, useState } from "react";
import { User } from "@supabase/supabase-js";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

export function useAuth(options?: UseAuthOptions) {
  const { redirectOnUnauthenticated = false } = options ?? {};
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user || null);
        
        // Store user info in localStorage for compatibility
        if (user) {
          localStorage.setItem(
            "manus-runtime-user-info",
            JSON.stringify({
              id: user.id,
              email: user.email,
              user_metadata: user.user_metadata,
            })
          );
        } else {
          localStorage.removeItem("manus-runtime-user-info");
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Subscribe to auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        localStorage.setItem(
          "manus-runtime-user-info",
          JSON.stringify({
            id: session.user.id,
            email: session.user.email,
            user_metadata: session.user.user_metadata,
          })
        );
      } else {
        localStorage.removeItem("manus-runtime-user-info");
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const logout = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      localStorage.removeItem("manus-runtime-user-info");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }, []);

  const state = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
    }),
    [user, loading]
  );

  return {
    ...state,
    logout,
  };
}
