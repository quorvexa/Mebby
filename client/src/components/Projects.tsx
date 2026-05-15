import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const PROJECT_IMAGES = {
  webDev: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/project-web-dev-KmSQkCGpWzFmBWecSpizh6.webp',
  gameDev: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/project-game-dev-5xtidYG9Wi7uxDKiNuXvRY.webp',
  aiSolution: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/project-ai-solution-jkZnQina9ctsHHEcThhywi.webp',
  ecommerce: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/project-ecommerce-BW9P8EgBjxYxX3kpUYVq4x.webp',
};

const PROJECTS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/projects-showcase-bg-7zm4LaUrSoiFPLZ2X8p6dS.webp';

export default function Projects() {
  const projects = [
    {
      title: 'Game Development Portfolio',
      description: 'Collection of games built with HTML5, JavaScript, and Phaser.js showcasing game mechanics and AI behavior.',
      tags: ['JavaScript', 'HTML5', 'Phaser.js'],
      image: PROJECT_IMAGES.gameDev,
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Movement Simulator',
      description: 'Interactive simulation demonstrating pathfinding algorithms and AI decision-making in game environments.',
      tags: ['Python', 'AI Algorithms', 'Canvas API'],
      image: PROJECT_IMAGES.aiSolution,
      github: '#',
      demo: '#',
    },
    {
      title: 'Personal Website & Blog',
      description: 'Responsive portfolio built with React and Tailwind CSS to showcase projects and technical writing.',
      tags: ['React', 'Tailwind CSS', 'Next.js'],
      image: PROJECT_IMAGES.webDev,
      github: '#',
      demo: '#',
    },
    {
      title: 'E-Commerce Store',
      description: 'Full-featured online store with product management, shopping cart, and secure payment integration.',
      tags: ['React', 'Node.js', 'Stripe'],
      image: PROJECT_IMAGES.ecommerce,
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('${PROJECTS_BG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Recent work showcasing my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border/50 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-cyan-500/20 border border-border hover:border-cyan-500 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
