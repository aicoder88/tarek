import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}