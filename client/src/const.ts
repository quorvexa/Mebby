export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Supabase handles OAuth directly, so we don't need to generate login URLs
// The SupabaseAuthDialog component handles the OAuth flow
export const getLoginUrl = () => {
  // Return current page for Supabase auth flow
  return window.location.href;
};
