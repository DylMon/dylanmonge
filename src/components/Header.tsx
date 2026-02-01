import { useState } from 'react';
import { Tab } from '../types';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string }[] = [
  { key: 'services', label: 'Services' },
  { key: 'experience', label: 'Experience' },
  { key: 'personal', label: 'About' },
  { key: 'contact', label: 'Contact' },
];

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [hoveredTab, setHoveredTab] = useState<Tab | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16">
          <nav className="flex gap-4 sm:gap-8 md:gap-12">
            {tabs.map(({ key, label }) => (
              <div key={key} className="relative">
                <button
                  onClick={() => setActiveTab(key)}
                  onMouseEnter={() => setHoveredTab(key)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`text-sm transition-all duration-200 pb-1 ${
                    activeTab === key
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {label}
                </button>
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out"
                  style={{
                    width: activeTab === key || hoveredTab === key ? '100%' : '0%',
                  }}
                />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
