import { useEffect, useState } from 'react';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import { Tab } from '../types';

interface HeroProps {
  activeSection: Tab;
}

const heroContent: Record<Tab, { title: string; subtitle?: string; showSocials?: boolean }> = {
  services: { title: 'Dylan Monge', showSocials: true },
  experience: {
    title: 'Experience',
    subtitle: 'Proven in academia and industry. ',
  },
  personal: {
    title: 'About Me',
    subtitle: 'Developer, creator, and lifelong learner.',
  },
  contact: {
    title: 'I\'m Easy to Reach',
    subtitle: "And open to taking on new challenges and opportunities.",
  },
};

export default function Hero({ activeSection }: HeroProps) {
  const [lineShow, setLineShow] = useState(false);
  const [titleShow, setTitleShow] = useState(false);
  const [iconsShow, setIconsShow] = useState(false);

  useEffect(() => {
    // 1. Line expands first (0.7s transition)
    setLineShow(true);
    // 2. Name drops in after line finishes + a beat
    const t1 = setTimeout(() => setTitleShow(true), 500);
    // 3. Icons follow shortly after name
    const t2 = setTimeout(() => setIconsShow(true), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const content = heroContent[activeSection];
  const isServices = activeSection === 'services';

  const showLine = isServices ? lineShow : true;
  const showTitle = isServices ? titleShow : true;
  const showIcons = isServices ? iconsShow : true;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none">
      <div className="text-center pointer-events-auto px-4">
        <div className="inline-block">
          <h1
            className="font-semibold tracking-tight font-source-serif"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              opacity: showTitle ? 1 : 0,
              transform: showTitle ? 'translateY(0)' : 'translateY(20px)',
              transition: isServices ? 'opacity 0.6s ease, transform 0.6s ease' : 'none',
            }}
          >
            {content.title}
          </h1>
          <div
            className="h-0.5 bg-white -mt-1 mb-5 mx-auto"
            style={{
              width: '100%',
              transform: isServices ? (showLine ? 'scaleX(1)' : 'scaleX(0)') : 'scaleX(1)',
              transition: isServices ? 'transform 0.7s ease-out' : 'none',
            }}
          />
        </div>

        {content.subtitle && (
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
            {content.subtitle}
          </p>
        )}

        {content.showSocials && (
          <div
            className="flex justify-center gap-10"
            style={{
              opacity: showIcons ? 1 : 0,
              transform: showIcons ? 'translateY(0)' : 'translateY(-20px)',
              transition: isServices ? 'opacity 0.5s ease, transform 0.5s ease' : 'none',
            }}
          >
            <a href="https://www.linkedin.com/in/dylan-monge" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/DylMon" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <Github className="w-8 h-8" />
            </a>
            <a href="mailto:dylanmonge.dev@gmail.com"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="Email">
              <Mail className="w-8 h-8" />
            </a>
            <a href="/downloads/Resume_DylanMonge_08262025.pdf" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="Resume">
              <FileText className="w-8 h-8" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
