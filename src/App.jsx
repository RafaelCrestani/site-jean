import { useRef } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { useSiteAnimations } from './hooks/useSiteAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountersBand from './components/CountersBand';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Audience from './components/Audience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  const rootRef = useRef(null);
  useSiteAnimations(rootRef);

  return (
    <ThemeProvider>
      <div ref={rootRef}>
        <Navbar />
        <main>
          <Hero />
          <CountersBand />
          <About />
          <Services />
          <Process />
          <Projects />
          <Audience />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </ThemeProvider>
  );
}
