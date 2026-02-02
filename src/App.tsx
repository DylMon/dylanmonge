import { useState, useEffect, useRef } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import PersonalSection from './components/PersonalSection';
import ContactSection from './components/ContactSection';

const sections: Tab[] = ['services', 'experience', 'personal', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState<Tab>('services');
  const [scrollY, setScrollY] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState<number[]>([0, 0, 0, 0]);
  const spacerRefs = useRef<Map<Tab, HTMLDivElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure spacer positions for particle clustering
  const prevOffsetsRef = useRef<string>('');
  useEffect(() => {
    const measure = () => {
      const offsets = sections.map((section) => {
        const el = spacerRefs.current.get(section);
        if (!el) return 0;
        // getBoundingClientRect gives viewport-relative position;
        // add scrollY to get absolute document position
        return Math.round(el.getBoundingClientRect().top + window.scrollY);
      });
      // Only update if values actually changed — prevents particle
      // regeneration when iOS browser bar collapses/expands
      const key = offsets.join(',');
      if (key === prevOffsetsRef.current) return;
      prevOffsetsRef.current = key;
      setSectionOffsets(offsets);
    };

    // Measure after layout settles
    measure();
    window.addEventListener('resize', measure);

    // Re-measure when content heights change (e.g. fonts loading, dynamic content)
    const mainEl = document.querySelector('main');
    let resizeObs: ResizeObserver | undefined;
    if (mainEl) {
      resizeObs = new ResizeObserver(measure);
      resizeObs.observe(mainEl);
    }

    return () => {
      window.removeEventListener('resize', measure);
      resizeObs?.disconnect();
    };
  }, []);

  // Detect which section's spacer is most visible
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = spacerRefs.current.get(section);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveSection(section);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollToSection = (section: Tab) => {
    const el = spacerRefs.current.get(section);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Header becomes opaque when we're not in a hero spacer area
  const headerScrolled = scrollY >= window.innerHeight - 64;

  return (
    <div className="text-white overflow-x-hidden" style={{ backgroundColor: '#060a14', minHeight: '100lvh' }}>
      <div className="fixed top-0 left-0 w-full z-0" style={{ height: '100lvh' }}>
        <ParticleField scrollY={scrollY} sectionOffsets={sectionOffsets} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
        }} />
      </div>

      <Hero activeSection={activeSection} />

      <Header activeTab={activeSection} setActiveTab={scrollToSection} scrolled={headerScrolled} />

      <main>
        {/* Services */}
        <div
          ref={el => { if (el) spacerRefs.current.set('services', el); }}
          id="services-hero"
          style={{ height: '100lvh' }}
        />
        <ServicesSection
          onExploreWorkClick={() => scrollToElement('featured-projects')}
          onResearchClick={() => scrollToElement('research-publications')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Experience */}
        <div
          ref={el => { if (el) spacerRefs.current.set('experience', el); }}
          id="experience-hero"
          style={{ height: '100lvh' }}
        />
        <ExperienceSection />

        {/* About */}
        <div
          ref={el => { if (el) spacerRefs.current.set('personal', el); }}
          id="personal-hero"
          style={{ height: '100lvh' }}
        />
        <PersonalSection />

        {/* Contact */}
        <div
          ref={el => { if (el) spacerRefs.current.set('contact', el); }}
          id="contact-hero"
          style={{ height: '100lvh' }}
        />
        <ContactSection onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
