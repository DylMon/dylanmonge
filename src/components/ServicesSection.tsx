import { useState, useEffect, useRef } from 'react';

interface ServicesSectionProps {
  onExploreWorkClick: () => void;
  onResearchClick: () => void;
  onContactClick: () => void;
}

export default function ServicesSection({ onExploreWorkClick, onResearchClick, onContactClick }: ServicesSectionProps) {
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <div className="bg-black relative z-10 bg-grid overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-6 tracking-tight font-syne">Hello there!</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            I'm interesteed in solving digital problems to help people achieve their goals and target the right audience. My creativity and technical background have led me 
            to fields like web development, IT, and AI research. I'm constantly trying new things and applying myself in novel ways. 
          </p>
        </div>

        <div className="space-y-20 mb-16">
          <div ref={el => serviceRefs.current[0] = el} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden glass-sheen">
            <div className="relative inline-block w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center font-syne">Web Development</h3>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                   style={{
                     width: visibleServices.has(0) ? '60%' : '0%',
                   }} />
            </div>
            <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
              <div>
                <h4 className="font-medium text-white mb-2 text-center text-xl">Modern, Intelligent and Seamless</h4>
                <p className="text-sm leading-relaxed">
                  I build web applications tailored to your exact needs. Whether you're launching your dream business,
                   scaling enterprise infrastructure, or showcasing your unique brand, I deliver full-stack solutions that blend clean code with
                  intuitive user experiences.
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

          <div ref={el => serviceRefs.current[1] = el} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden glass-sheen">
            <div className="relative inline-block w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center font-syne">Information Technology</h3>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                   style={{
                     width: visibleServices.has(1) ? '60%' : '0%',
                   }} />
            </div>
            <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
              <div>
                <h4 className="font-medium text-white mb-2 text-center text-xl">Reliable, Scalable IT Solutions</h4>
                <p className="text-sm leading-relaxed">
                  I provide end-to-end IT support and infrastructure solutions that ensure your technology works
                  for you without getting in the way. From configuring secure networks and managing cloud infrastructure to
                   automating workflows and troubleshooting technical issues, I help businesses stay efficient 
                   and ahead of the curve. My expertise spans system administration, cybersecurity
                   best practices, and cloud platforms.
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

          <div ref={el => serviceRefs.current[2] = el} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden glass-sheen">
            <div className="relative inline-block w-full">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center font-syne">Artificial Intelligence</h3>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                   style={{
                     width: visibleServices.has(2) ? '60%' : '0%',
                   }} />
            </div>
            <div className="space-y-4 text-white/70 max-w-3xl mx-auto">
              <div>
                <h4 className="font-medium text-white mb-2 text-center text-xl">Neural Networks & Digital Twins — Bridging Research and Application</h4>
                <p className="text-sm leading-relaxed">
                  My research centers on neural networks and their role in creating intelligent digital twin systems: virtual replicas that mirror real-world
                   entities to enable real-time monitoring, simulation, and optimization. I've co-authored a research paper exploring how neural networks can 
                   power real-time digital twins for aerospace structures. Our system predicts structural damage location and reconstructs stress fields using 
                   deep learning models trained on finite element simulations. These models analyze sensor data and provide fast, accurate diagnostics—bringing 
                   intelligent, human-in-the-loop digital twins closer to real-world aerospace applications.
                  
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
  );
}
