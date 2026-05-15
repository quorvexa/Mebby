import { Card } from '@/components/ui/card';
import { Code2, Zap, Target } from 'lucide-react';

const SKILLS_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/skills-visualization-iS5f63KD7H6FNiZbJN99Uy.webp';

export default function About() {
  const stats = [
    {
      icon: Code2,
      label: 'Projects Completed',
      value: '15+',
      color: 'text-cyan-400',
    },
    {
      icon: Zap,
      label: 'Years Experience',
      value: '3+',
      color: 'text-purple-400',
    },
    {
      icon: Target,
      label: 'Clients Satisfied',
      value: '20+',
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About Me
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A passionate software engineer dedicated to building exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-display mb-4">Who I Am</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                I'm Ignatius, a Software Engineering student at Kirinyaga University with a passion for creating innovative digital solutions. My expertise spans web development, game development, and artificial intelligence.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I specialize in building scalable web applications, interactive games, and AI-powered solutions that merge creativity with functionality. Every project I undertake is an opportunity to push boundaries and deliver excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={stat.label}
                    className="p-4 bg-background border-border/50 text-center hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                    <p className="text-2xl font-bold font-display">{stat.value}</p>
                    <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Skills Visualization */}
          <div className="flex items-center justify-center">
            <Card className="p-6 bg-card border-border/50 w-full">
              <img
                src={SKILLS_IMAGE}
                alt="Skills and Technologies"
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
