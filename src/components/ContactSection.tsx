import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

interface ContactSectionProps {
  onBackToTop: () => void;
}

export default function ContactSection({ onBackToTop }: ContactSectionProps) {
  return (
    <div className="bg-black relative z-10 bg-grid overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20 pb-32">
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 font-syne">Currently Available</h3>
          <div className="h-0.5 bg-white mb-8" />
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-3xl">
            I'm always open to taking on a new challenge. If you have somethig in mind, feel free to reach out and we can start collaborating. Or just say hello! 
          </p>
          <a
            href="mailto:john@example.com"
            className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
          >
            Send me a message
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          <a
            href="mailto:john@example.com"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden glass-sheen"
          >
            <Mail className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
            <h3 className="text-sm font-medium text-white/60 mb-2">Email</h3>
            <p className="text-xl group-hover:text-white transition-colors">dylanmonge.dev@gmail.com</p>
          </a>

          <a
            href="https://github.com/DylMon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden glass-sheen"
          >
            <Github className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
            <h3 className="text-sm font-medium text-white/60 mb-2">GitHub</h3>
            <p className="text-xl group-hover:text-white transition-colors">@DylMon</p>
          </a>

          <a
            href="https://www.linkedin.com/in/dylan-monge"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden glass-sheen"
          >
            <Linkedin className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
            <h3 className="text-sm font-medium text-white/60 mb-2">LinkedIn</h3>
            <p className="text-xl group-hover:text-white transition-colors">dylan-monge</p>
          </a>

        </div>

        <div className="text-center mt-20">
          <button
            onClick={onBackToTop}
            className="group w-12 h-12 rounded-full border border-white/30 hover:border-white inline-flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
