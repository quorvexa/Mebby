import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProgrammingBooksModal from '@/components/ProgrammingBooksModal';

export default function Home() {
  const [isBooksModalOpen, setIsBooksModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBooksClick={() => setIsBooksModalOpen(true)} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
      <ProgrammingBooksModal
        isOpen={isBooksModalOpen}
        onClose={() => setIsBooksModalOpen(false)}
      />
    </div>
  );
}
