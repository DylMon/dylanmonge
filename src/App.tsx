import { useState, useEffect } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import ServicesTab from './components/ServicesTab';
import ExperienceTab from './components/ExperienceTab';
import PersonalTab from './components/PersonalTab';
import ContactTab from './components/ContactTab';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('services');

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-0" style={{ height: '100lvh' }}>
        <ParticleField scrollY={scrollY} />
      </div>

      <Header activeTab={activeTab} setActiveTab={handleTabChange} scrolled={scrollY >= window.innerHeight - 64} />

      <main>
        {activeTab === 'services' && (
          <ServicesTab onContactClick={() => handleTabChange('contact')} />
        )}
        {activeTab === 'experience' && <ExperienceTab />}
        {activeTab === 'personal' && <PersonalTab />}
        {activeTab === 'contact' && <ContactTab />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
