import { Linkedin, Github, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-black relative z-10">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex gap-6 justify-center mb-6">
          <a
            href="https://linkedin.com/in/johndeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/johndeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:john@example.com"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Resume"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>
        <p className="text-white/40 text-sm">&copy; 2024 John Doe. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
