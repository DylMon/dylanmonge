import { useState, useEffect } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesTab from './components/ServicesTab';
import ExperienceTab from './components/ExperienceTab';
import PersonalTab from './components/PersonalTab';
import ContactTab from './components/ContactTab';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('services');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} scrolled={scrolled} />

      <main>
        {activeTab === 'services' && (
          <ServicesTab onContactClick={() => setActiveTab('contact')} />
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
