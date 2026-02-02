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
    subtitle: 'Over 6 years of professional experience building scalable applications and leading development teams.',
  },
  personal: {
    title: 'About Me',
    subtitle: 'Developer, creator, and lifelong learner.',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "I'm always interested in hearing about new opportunities and collaborations.",
  },
};

export default function Hero({ activeSection }: HeroProps) {
  // Only the first hero (services) gets a mount animation, and only once
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = heroContent[activeSection];
  const isServices = activeSection === 'services';

  // Services hero animates in on first load; all others are always fully visible
  const titleShow = isServices ? mounted : true;
  const delayedShow = isServices ? mounted : true;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none">
      <div className="text-center pointer-events-auto">
        <div className="relative inline-block mb-8">
          <h1
            className="font-semibold tracking-tight"
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              opacity: titleShow ? 1 : 0,
              transform: titleShow ? 'translateY(0)' : 'translateY(20px)',
              transition: isServices ? 'opacity 0.6s ease, transform 0.6s ease' : 'none',
            }}
          >
            {content.title}
          </h1>
          <div
            className="absolute h-0.5 bg-white origin-center"
            style={{
              transition: isServices ? 'all 0.7s ease-out' : 'none',
              ...(isServices
                ? { bottom: '0.25rem', left: '23%', right: '23%', transform: titleShow ? 'scaleX(1)' : 'scaleX(0)' }
                : { left: '50%', transform: 'translateX(-50%)', bottom: '-1rem', width: '80%' }),
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
            className="flex justify-center gap-6 -mt-4"
            style={{
              opacity: delayedShow ? 1 : 0,
              transform: delayedShow ? 'translateY(0)' : 'translateY(-20px)',
              transition: isServices ? 'opacity 0.5s ease 0.8s, transform 0.5s ease 0.8s' : 'none',
            }}
          >
            <a href="https://linkedin.com/in/johndeveloper" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/johndeveloper" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <Github className="w-8 h-8" />
            </a>
            <a href="mailto:john@example.com"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="Email">
              <Mail className="w-8 h-8" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-white transition-colors duration-200" aria-label="Resume">
              <FileText className="w-8 h-8" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
