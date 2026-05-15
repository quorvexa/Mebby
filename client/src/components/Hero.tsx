import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/hero-gradient-bg-AH8xkG2nKx3MVM2deFKdJS.webp';
const PROFILE_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663601355931/8BbuigW6RVUsJTCYYvHioh/profile-avatar-bg-UiZjRtFfdZESUnho8GKNnv.webp';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url('${HERO_BG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">
                Building{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
                {' '}that Matter
              </h1>
              <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                I'm Ignatius, a passionate Software Engineering student specializing in web development, game development, and AI. I create seamless, scalable solutions that merge creativity with functionality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full font-semibold gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>View My Works</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold border-2 border-cyan-500/50 hover:bg-cyan-500/10 gap-2"
              >
                <span>Contact Me</span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/quorvexa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card hover:bg-cyan-500/20 border border-border hover:border-cyan-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground/60 group-hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-card hover:bg-purple-500/20 border border-border hover:border-purple-500 flex items-center justify-center transition-all duration-300 group"
              >
                <ExternalLink className="w-5 h-5 text-foreground/60 group-hover:text-purple-400" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center animate-float">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />

              {/* Profile card */}
              <div
                className="relative w-full h-full rounded-full border-4 border-cyan-500/30 overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url('${PROFILE_BG}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Availability badge */}
                <div className="absolute bottom-8 right-8 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Available for Collaboration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
