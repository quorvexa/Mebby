import { Card } from '@/components/ui/card';
import {
  Code2,
  ShoppingCart,
  Gamepad2,
  Brain,
  Zap,
  Shield,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Stores',
      description: 'Online shops with secure payments (M-Pesa & cards) so you can sell 24/7 with confidence.',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Interactive games and simulations built with HTML5, Phaser.js, and modern game engines.',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI implementations including pathfinding, decision-making systems, and machine learning models.',
    },
    {
      icon: Zap,
      title: 'Custom Web Apps',
      description: 'Tailored solutions for bookings, portals, dashboards, and unique business workflows.',
    },
    {
      icon: Shield,
      title: 'Website Care',
      description: 'Ongoing updates, security monitoring, performance optimization, and technical support.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            What I Offer
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Professional services tailored to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-8 bg-card border-border/50 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
