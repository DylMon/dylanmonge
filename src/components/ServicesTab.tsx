import { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

interface ServicesTabProps {
  onContactClick: () => void;
  onExploreWorkClick: () => void;
  onResearchClick: () => void;
}

export default function ServicesTab({ onContactClick, onExploreWorkClick, onResearchClick }: ServicesTabProps) {
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
          <div className="flex justify-center gap-6 -mt-4"
               style={{
                 opacity: heroVisible ? 1 : 0,
                 transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                 transition: 'opacity 0.5s ease, transform 0.5s ease',
                 transitionDelay: '0.8s',
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
        </div>
      </div>

      <div className="bg-black relative z-10">
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
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Web Development</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(0) ? '60%' : '0%',
                     }} />
              </div>
              <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
                <div>
                  <h4 className="font-medium text-white mb-2">Modern, Scalable, and High-Performance Web Solutions</h4>
                  <p className="text-sm leading-relaxed">
                    I build responsive, fast, and secure web applications tailored to your business needs. Whether you're launching a startup, 
                    revamping a brand, or scaling enterprise infrastructure, I deliver full-stack solutions that blend clean code with 
                    intuitive user experiences. My expertise spans front-end frameworks like React and Vue, back-end technologies such as 
                    Node.js and Django, and database design using SQL and NoSQL systems. From landing pages to complex web platforms, I bring 
                    ideas to life with precision, performance, and future-proof architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">What I Deliver:</h4>
                </div>
                <ul className="text-sm leading-relaxed list-disc list-inside space-y-1">
                  <li>Custom websites and web apps</li>
                  <li>Full-stack development (API design, databases, deployment)</li>
                  <li>Mobile-responsive & ADA compliant UI/UX</li>
                  <li>CMS integration (e.g., WordPress, Headless CMS)</li>
                  <li>SEO optimization and performance tuning</li>
                  <li>Ongoing maintenance and feature iteration</li>
                </ul>
                <div className="mt-6">
                  <button
                    onClick={onExploreWorkClick}
                    className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
                  >
                    Explore my Work
                  </button>
                </div>
              </div>
            </div>

            <div ref={el => serviceRefs.current[1] = el} className="group">
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Information Technology</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(1) ? '60%' : '0%',
                     }} />
              </div>
              <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
                <div>
                  <h4 className="font-medium text-white mb-2">Reliable, Scalable IT Solutions</h4>
                  <p className="text-sm leading-relaxed">
                    I provide end-to-end IT support and infrastructure solutions that ensure your technology works 
                    for you—not against you. From configuring secure networks and managing cloud infrastructure to
                     automating workflows and troubleshooting technical issues, I help businesses stay efficient, 
                     protected, and ahead of the curve. My expertise spans system administration, cybersecurity 
                     best practices, and cloud platforms like AWS and Azure.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">What I Deliver:</h4>
                </div>
                <ul className="text-sm leading-relaxed list-disc list-inside space-y-1">
                  <li>IT infrastructure setup & optimization (servers, networks, devices)</li>
                  <li>Cloud services configuration & management (AWS, Azure, Google Cloud)</li>
                  <li>Technical support & troubleshooting (remote or on-site)</li>
                </ul>
              </div>
            </div>

            <div ref={el => serviceRefs.current[2] = el} className="group">
              <div className="relative inline-block w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Artificial Intelligence</h3>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                     style={{
                       width: visibleServices.has(2) ? '60%' : '0%',
                     }} />
              </div>
              <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
                <div>
                  <h4 className="font-medium text-white mb-2">Neural Networks & Digital Twins — Bridging Research and Application</h4>
                  <p className="text-sm leading-relaxed">
                    My research centers on neural networks and their role in creating intelligent digital twin systems—virtual replicas that mirror real-world
                     entities to enable real-time monitoring, simulation, and optimization. I’ve authored a published paper investigating how deep learning 
                     architectures can be used to enhance the accuracy, adaptability, and predictive power of digital twins in complex environments.

                    This work involved training and evaluating neural models to interpret dynamic system data, predict future states, and support 
                    decision-making across physical-digital systems. It deepened my expertise in model optimization, time-series analysis, and real-world 
                    deployment strategies.

                    By combining theoretical insight with hands-on implementation, I bring an academically grounded and innovation-driven perspective to 
                    AI system design, especially in contexts where real-time intelligence is mission-critical.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={onResearchClick}
                    className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
                  >
                    My Research
                  </button>
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
