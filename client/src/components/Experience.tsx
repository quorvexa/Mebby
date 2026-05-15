import { Card } from '@/components/ui/card';
import { Briefcase, GraduationCap, Zap } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      icon: Briefcase,
      date: '2023 - Present',
      title: 'Full Stack Developer',
      subtitle: 'Freelance Developer',
      description: 'Building websites, games, and interactive applications using modern web technologies for various clients.',
    },
    {
      icon: Zap,
      date: 'Ongoing',
      title: 'Independent Learner',
      subtitle: 'Self-Learning',
      description: 'Continuously mastering new technologies through online courses, tutorials, and personal projects.',
    },
    {
      icon: GraduationCap,
      date: '2024 - Present',
      title: 'B.Sc. Software Engineering',
      subtitle: 'Kirinyaga University',
      description: 'Focused on web development, software architecture, and AI implementation.',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}\n        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Experience & Education
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-emerald-500/50 md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-background border-2 border-cyan-500 rounded-full flex items-center justify-center -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 z-10">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pt-2 ml-20 md:ml-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <Card className="p-6 bg-card border-border/50 hover:border-cyan-500/50 transition-all duration-300">
                      <p className="text-sm font-semibold text-cyan-400 mb-1">{item.date}</p>
                      <h3 className="text-xl font-bold font-display mb-1">{item.title}</h3>
                      <p className="text-foreground/60 text-sm mb-3">{item.subtitle}</p>
                      <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
