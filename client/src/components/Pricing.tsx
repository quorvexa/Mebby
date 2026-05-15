import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for solo entrepreneurs who just need to get online',
      price: '30,000',
      currency: 'KSH',
      period: '/project',
      features: [
        '1-3 Page Website',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Form',
        '15 days Support',
      ],
      featured: false,
    },
    {
      name: 'Business',
      description: 'For growing SMEs ready to manage clients and scale',
      price: '60,000',
      currency: 'KSH',
      period: '/project',
      features: [
        '5-10 Page Website',
        'CMS Integration',
        'Advanced SEO',
        'M-Pesa/Card Payments',
        '30 days Support',
        'Analytics Setup',
      ],
      featured: true,
    },
    {
      name: 'Scale',
      description: 'For established businesses needing custom solutions',
      price: '80,000+',
      currency: 'KSH',
      period: '/project',
      features: [
        'Custom Web Application',
        'Database Integration',
        'API Development',
        'AI/ML Features',
        '42 days Support',
        'Priority Maintenance',
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Choose a plan that works for your project needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/50 shadow-2xl md:scale-105'
                  : 'bg-card border-border/50 hover:border-cyan-500/50'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.featured && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0">
                  MOST POPULAR
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground/60 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {plan.currency} {plan.price}
                  </span>
                  <span className="text-foreground/60 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-lg font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                    : 'bg-background hover:bg-cyan-500/20 border-2 border-cyan-500/50 text-foreground'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="text-center p-6 bg-background rounded-lg border border-border/50">
          <p className="text-foreground/70 text-sm">
            <span className="font-semibold text-foreground">Note:</span> Prices are estimates. Final cost depends on project complexity.{' '}
            <a href="#contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Contact me
            </a>
            {' '}for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}
