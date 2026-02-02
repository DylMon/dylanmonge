import { Mail, Code2, Briefcase, User, ArrowUp } from 'lucide-react';

interface ContactSectionProps {
  onBackToTop: () => void;
}

export default function ContactSection({ onBackToTop }: ContactSectionProps) {
  return (
    <div className="bg-black relative z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20 pb-32">
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

        <div className="text-center mt-20">
          <button
            onClick={onBackToTop}
            className="group inline-flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
            <span className="text-sm">Back to top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
