import { useState, useEffect } from 'react';
import { Mail, Code2, Briefcase, User } from 'lucide-react';

export default function ContactTab() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div>
      <div className="h-screen" />
      <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <h1 className="font-semibold tracking-tight" style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}>Get in Touch</h1>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-0.5 bg-white transition-all duration-700 ease-out"
                 style={{
                   width: heroVisible ? '80%' : '0%',
                 }} />
          </div>
          <p
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: '0.8s',
            }}
          >
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
        </div>
      </div>

      <div className="bg-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <a
              href="mailto:john@example.com"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-sm font-medium text-white/60 mb-2">Email</h3>
              <p className="text-xl group-hover:text-white transition-colors">john@example.com</p>
            </a>

            <a
              href="https://github.com/johndeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <Code2 className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-sm font-medium text-white/60 mb-2">GitHub</h3>
              <p className="text-xl group-hover:text-white transition-colors">@johndeveloper</p>
            </a>

            <a
              href="https://linkedin.com/in/johndeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <Briefcase className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-sm font-medium text-white/60 mb-2">LinkedIn</h3>
              <p className="text-xl group-hover:text-white transition-colors">@johndeveloper</p>
            </a>

            <a
              href="https://johndeveloper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <User className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
              <h3 className="text-sm font-medium text-white/60 mb-2">Website</h3>
              <p className="text-xl group-hover:text-white transition-colors">johndeveloper.com</p>
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-3">Currently Available</h3>
            <p className="text-white/60 mb-8">
              Open to full-time positions and interesting freelance projects.
            </p>
            <a
              href="mailto:john@example.com"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
            >
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
