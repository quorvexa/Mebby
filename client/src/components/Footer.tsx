import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Footer() {
  const [email, setEmail] = useState('');

  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to subscribe');
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }
    subscribeMutation.mutate({ email });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-display mb-3">
              Stay Updated
            </h3>
            <p className="text-foreground/60 mb-6">
              Subscribe to my newsletter for the latest projects, tutorials, and insights on web development, game design, and AI.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={subscribeMutation.isPending}
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border/50 focus:border-cyan-500 focus:outline-none text-foreground placeholder-foreground/40 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={subscribeMutation.isPending}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
              >
                {subscribeMutation.isPending ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            <p className="text-xs text-foreground/40 mt-3">
              No spam, just quality content. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold font-display mb-4">IGNADEVS</h4>
            <p className="text-foreground/60 text-sm">
              Building digital experiences that matter through code, creativity, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold font-display mb-4">Navigation</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold font-display mb-4">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/60 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="font-semibold font-display mb-4">Connect</h5>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:ignatius@example.com"
                className="p-2 rounded-lg bg-card border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} IGNADEVS. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Crafted with passion and code ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
