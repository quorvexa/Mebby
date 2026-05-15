import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Instagram, MessageCircle, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

const CONTACT_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/contact-section-bg-SZHRXrKuks93zeJ74cGy48.webp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to send message. Please try again.');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    contactMutation.mutate(formData);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/quorvexa',
      color: 'hover:text-cyan-400',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/quorvexa',
      color: 'hover:text-purple-400',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/message/IGP5RMSH5PS2D1',
      color: 'hover:text-emerald-400',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('${CONTACT_BG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let's Work Together
          </h2>
          <p className="text-foreground/60 text-lg">
            Have a project in mind? Let's bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-display mb-6">Follow my pages</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <Icon className={`w-6 h-6 text-foreground/60 ${link.color} transition-colors`} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="text-sm text-foreground/60">Connect with me</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  disabled={contactMutation.isPending}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-cyan-500 focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  disabled={contactMutation.isPending}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-cyan-500 focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={contactMutation.isPending}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-cyan-500 focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 resize-none disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
