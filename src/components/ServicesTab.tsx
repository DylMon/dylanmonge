import { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Brain, Lightbulb } from 'lucide-react';

interface ServicesTabProps {
  onContactClick: () => void;
}

export default function ServicesTab({ onContactClick }: ServicesTabProps) {
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleServices(prev => new Set(prev).add(index));
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div>
      <div className="h-screen" />
      <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="text-center pointer-events-auto">
          <div className="relative inline-block mb-8">
            <h1
              className="font-semibold tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 6rem)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >Dylan Monge</h1>
            <div className="absolute bottom-1 left-[23%] right-[23%] h-0.5 bg-white transition-all duration-700 ease-out origin-center"
                 style={{
                   transform: heroVisible ? 'scaleX(1)' : 'scaleX(0)',
                 }} />
          </div>
          <div className="flex flex-col items-center gap-3 mt-4">
            {['Web Development', 'Creative Design', 'Information Technology', 'Artificial Intelligence'].map((label, i) => (
              <button
                key={label}
                onClick={() => serviceRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })}
                className="relative text-white hover:text-white/80 text-lg sm:text-xl tracking-wide transition-colors duration-200 cursor-pointer group pb-1"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, color 0.2s ease',
                  transitionDelay: `${0.8 + i * 0.15}s`,
                }}
              >
                {label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-white transition-all duration-300 ease-out w-0 group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-6 tracking-tight">What I Offer</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Full-spectrum technical solutions from concept to deployment. Leveraging cutting-edge technologies
              and research-backed methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="space-y-20 mb-16">
            <div ref={el => serviceRefs.current[0] = el} className="group">
              <div className="flex justify-center mb-6">
                <Code2 className="w-12 h-12 text-white/80" />
              </div>
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Web Development</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(0) ? '60%' : '0%',
                     }} />
              </div>
              <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
                <div>
                  <h4 className="font-medium text-white mb-2">Small Business</h4>
                  <p className="text-sm leading-relaxed">
                    Custom websites and web applications tailored for small businesses. From landing pages to
                    full e-commerce solutions. Affordable, scalable, and built for growth.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Enterprise</h4>
                  <p className="text-sm leading-relaxed">
                    Large-scale applications with complex architectures. Microservices, cloud infrastructure,
                    high-availability systems. Built for performance, security, and reliability.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Personal & Creative</h4>
                  <p className="text-sm leading-relaxed">
                    Portfolio sites, artistic showcases, experimental projects. Creative freedom meets technical
                    excellence. Unique designs that stand out.
                  </p>
                </div>
              </div>
            </div>

            <div ref={el => serviceRefs.current[1] = el} className="group">
              <div className="flex justify-center mb-6">
                <Palette className="w-12 h-12 text-white/80" />
              </div>
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Creative Design</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(1) ? '60%' : '0%',
                     }} />
              </div>
              <ul className="space-y-3 text-white/70 text-sm leading-relaxed max-w-3xl mx-auto">
                <li>UI/UX design with a focus on user experience and accessibility</li>
                <li>High-fidelity Figma mockups and interactive prototypes</li>
                <li>Design systems and component libraries</li>
                <li>Brand identity and visual design</li>
                <li>Responsive layouts optimized for all devices</li>
              </ul>
            </div>

            <div ref={el => serviceRefs.current[2] = el} className="group">
              <div className="flex justify-center mb-6">
                <Lightbulb className="w-12 h-12 text-white/80" />
              </div>
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Information Technology</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(2) ? '60%' : '0%',
                     }} />
              </div>
              <ul className="space-y-3 text-white/70 text-sm leading-relaxed max-w-3xl mx-auto">
                <li>Technical architecture planning and review</li>
                <li>Technology stack selection and optimization</li>
                <li>Code review and best practices implementation</li>
                <li>Performance optimization and scalability planning</li>
                <li>DevOps and CI/CD pipeline setup</li>
                <li>Security audits and compliance guidance</li>
              </ul>
            </div>

            <div ref={el => serviceRefs.current[3] = el} className="group">
              <div className="flex justify-center mb-6">
                <Brain className="w-12 h-12 text-white/80" />
              </div>
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Artificial Intelligence</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(3) ? '60%' : '0%',
                     }} />
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Extensive machine learning experience spanning neural network architectures,
                  deep learning frameworks, and production ML systems.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">Research</h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Published research in digital twin technology and neural network optimization. Contributed to
                      academic papers on predictive modeling and real-time simulation systems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">Applications</h4>
                    <ul className="text-xs text-white/60 space-y-1">
                      <li>Custom ML model development and training</li>
                      <li>Neural network architecture design</li>
                      <li>Natural language processing and computer vision</li>
                      <li>Predictive analytics and data modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pb-20">
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
