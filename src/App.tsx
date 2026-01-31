import { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Brain, Lightbulb, Box, Mail, Briefcase, User, Linkedin, Github } from 'lucide-react';

type Tab = 'services' | 'experience' | 'personal' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('services');
  const [scrolled, setScrolled] = useState(false);
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<Tab | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeroVisible(true);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(heroRef.current);
      return () => observer.disconnect();
    }
  }, [activeTab]);

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
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center h-16">
            <nav className="flex gap-12">
              <div className="relative">
                <button
                  onClick={() => setActiveTab('services')}
                  onMouseEnter={() => setHoveredTab('services')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`text-sm transition-all duration-200 pb-1 ${
                    activeTab === 'services'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Services
                </button>
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out"
                  style={{
                    width: activeTab === 'services' || hoveredTab === 'services' ? '100%' : '0%',
                  }}
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setActiveTab('experience')}
                  onMouseEnter={() => setHoveredTab('experience')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`text-sm transition-all duration-200 pb-1 ${
                    activeTab === 'experience'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Experience
                </button>
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out"
                  style={{
                    width: activeTab === 'experience' || hoveredTab === 'experience' ? '100%' : '0%',
                  }}
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setActiveTab('personal')}
                  onMouseEnter={() => setHoveredTab('personal')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`text-sm transition-all duration-200 pb-1 ${
                    activeTab === 'personal'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  About
                </button>
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out"
                  style={{
                    width: activeTab === 'personal' || hoveredTab === 'personal' ? '100%' : '0%',
                  }}
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setActiveTab('contact')}
                  onMouseEnter={() => setHoveredTab('contact')}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`text-sm transition-all duration-200 pb-1 ${
                    activeTab === 'contact'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Contact
                </button>
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-white transition-all duration-300 ease-out"
                  style={{
                    width: activeTab === 'contact' || hoveredTab === 'contact' ? '100%' : '0%',
                  }}
                />
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {activeTab === 'services' && (
          <div>
            <div ref={heroRef} className="h-screen flex items-center justify-center bg-black sticky top-0">
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  <h1 className="text-8xl font-semibold tracking-tight">John Doe</h1>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-0.5 bg-white transition-all duration-700 ease-out"
                       style={{
                         width: heroVisible ? '280px' : '0px',
                       }} />
                </div>
                <div className="flex gap-6 justify-center">
                  <a
                    href="https://linkedin.com/in/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-all duration-500"
                    style={{
                      opacity: heroVisible ? 1 : 0,
                      transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                      transitionDelay: '1s'
                    }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="https://github.com/johndeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-all duration-500"
                    style={{
                      opacity: heroVisible ? 1 : 0,
                      transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                      transitionDelay: '1.2s'
                    }}
                    aria-label="GitHub"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="mailto:john@example.com"
                    className="text-white/60 hover:text-white transition-all duration-500"
                    style={{
                      opacity: heroVisible ? 1 : 0,
                      transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                      transitionDelay: '1.4s'
                    }}
                    aria-label="Email"
                  >
                    <Mail className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 relative z-10">
              <div className="container mx-auto px-6 max-w-6xl py-20">
                <div className="text-center mb-20">
                  <h2 className="text-6xl font-semibold mb-6 tracking-tight">What I Offer</h2>
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
                      <h3 className="text-4xl font-semibold mb-8 text-center">Web Development</h3>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                           style={{
                             width: visibleServices.has(0) ? '280px' : '0px',
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
                      <h3 className="text-4xl font-semibold mb-8 text-center">Creative Design</h3>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                           style={{
                             width: visibleServices.has(1) ? '265px' : '0px',
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
                      <h3 className="text-4xl font-semibold mb-8 text-center">Solutions Consultation</h3>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                           style={{
                             width: visibleServices.has(2) ? '380px' : '0px',
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
                      <h3 className="text-4xl font-semibold mb-8 text-center">Artificial Intelligence</h3>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                           style={{
                             width: visibleServices.has(3) ? '370px' : '0px',
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

                  <div ref={el => serviceRefs.current[4] = el} className="group">
                    <div className="flex justify-center mb-6">
                      <Box className="w-12 h-12 text-white/80" />
                    </div>
                    <div className="relative inline-block w-full">
                      <h3 className="text-4xl font-semibold mb-8 text-center">3D Visualizations</h3>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 h-0.5 bg-white transition-all duration-700 ease-out"
                           style={{
                             width: visibleServices.has(4) ? '300px' : '0px',
                           }} />
                    </div>
                    <div className="max-w-3xl mx-auto">
                      <p className="text-white/70 leading-relaxed mb-6">
                        Creating immersive 3D experiences and stunning visualizations for web,
                        interactive applications, and rendered media.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-white mb-2">Unity</h4>
                          <p className="text-sm text-white/60 leading-relaxed">
                            Interactive 3D applications, real-time visualization, AR/VR experiences,
                            game development, physics simulations
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Blender</h4>
                          <p className="text-sm text-white/60 leading-relaxed">
                            3D modeling, photorealistic rendering, product visualization, architectural
                            visualization, animation and motion graphics
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pb-20">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
                  >
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="pt-16 bg-black">
            <div className="container mx-auto px-6 max-w-6xl py-20">
              <div className="mb-16">
                <h2 className="text-6xl font-semibold mb-6 tracking-tight">Experience</h2>
                <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
                  Over 6 years of professional experience building scalable applications and leading development teams.
                </p>
              </div>

              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Work History</h3>
                <div className="space-y-12">
                  <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">Senior Full Stack Developer</h4>
                        <p className="text-white/60">Tech Innovations Inc.</p>
                      </div>
                      <span className="text-white/40 mt-2 md:mt-0">2022 - Present</span>
                    </div>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>Led development of cloud-native applications serving 500K+ users</li>
                      <li>Architected microservices infrastructure reducing deployment time by 60%</li>
                      <li>Mentored team of 5 junior developers and established best practices</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">Full Stack Developer</h4>
                        <p className="text-white/60">Digital Solutions Ltd.</p>
                      </div>
                      <span className="text-white/40 mt-2 md:mt-0">2020 - 2022</span>
                    </div>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>Built responsive web applications using React, Node.js, and PostgreSQL</li>
                      <li>Implemented CI/CD pipelines improving code quality and delivery speed</li>
                      <li>Collaborated with designers to create seamless user experiences</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">Software Engineering Intern</h4>
                        <p className="text-white/60">Silicon Valley Startup</p>
                      </div>
                      <span className="text-white/40 mt-2 md:mt-0">Summer 2019</span>
                    </div>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>Developed RESTful APIs for mobile application backend</li>
                      <li>Optimized database queries resulting in 40% performance improvement</li>
                      <li>Contributed to front-end features using React and Redux</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">Part-Time Web Developer</h4>
                        <p className="text-white/60">University Innovation Lab</p>
                      </div>
                      <span className="text-white/40 mt-2 md:mt-0">2018 - 2019</span>
                    </div>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>Built interactive data visualization dashboards for research projects</li>
                      <li>Maintained university department websites and web applications</li>
                      <li>Provided technical support and training to faculty members</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">Freelance Web Developer</h4>
                        <p className="text-white/60">Self-Employed</p>
                      </div>
                      <span className="text-white/40 mt-2 md:mt-0">2017 - 2018</span>
                    </div>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>Created custom websites for small businesses and local organizations</li>
                      <li>Delivered projects ranging from simple landing pages to e-commerce sites</li>
                      <li>Managed client relationships and project timelines independently</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Featured Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="aspect-video bg-white/10 flex items-center justify-center text-white/40 text-sm">
                      Project Thumbnail
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">shopverse.com</h4>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        Full-stack marketplace with real-time inventory management, secure payment processing, and analytics dashboard. Built with React, Node.js, and PostgreSQL.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">React</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Node.js</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">PostgreSQL</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Stripe</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="aspect-video bg-white/10 flex items-center justify-center text-white/40 text-sm">
                      Project Thumbnail
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">contentai.io</h4>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        SaaS platform for AI-powered content creation with custom model fine-tuning, user authentication, and subscription management. Integrated with OpenAI API.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Next.js</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">TypeScript</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">OpenAI</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Supabase</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="aspect-video bg-white/10 flex items-center justify-center text-white/40 text-sm">
                      Project Thumbnail
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">datalytics.app</h4>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        Enterprise analytics platform with real-time data visualization, custom reporting, and team collaboration features. Handles millions of events per day.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">React</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">D3.js</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">WebSocket</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Redis</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className="aspect-video bg-white/10 flex items-center justify-center text-white/40 text-sm">
                      Project Thumbnail
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">fittrackpro.app</h4>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        Cross-platform mobile app for workout tracking, nutrition planning, and progress analytics. Integrated with wearable devices and health APIs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">React Native</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Firebase</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">GraphQL</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs">HealthKit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Research & Publications</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2">Optimizing Neural Network Architectures for Digital Twin Applications</h4>
                    <p className="text-white/60 text-sm mb-3">
                      Journal of Machine Learning Research, 2023
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Proposed novel architecture for real-time digital twin simulations using optimized neural networks, achieving 40% improvement in prediction accuracy while reducing computational overhead by 25%.
                    </p>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                      Read paper →
                    </a>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2">Real-Time Predictive Modeling in Cloud Environments</h4>
                    <p className="text-white/60 text-sm mb-3">
                      ACM Conference on Cloud Computing, 2022
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Presented framework for deploying machine learning models in distributed cloud systems with focus on scalability and low-latency inference for production environments.
                    </p>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                      Read paper →
                    </a>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2">Enhancing User Experience Through AI-Driven Personalization</h4>
                    <p className="text-white/60 text-sm mb-3">
                      IEEE Symposium on Human-Computer Interaction, 2021
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      Explored machine learning approaches for adaptive user interfaces, demonstrating 35% increase in user engagement and satisfaction across multiple application domains.
                    </p>
                    <a href="#" className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
                      Read paper →
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <h3 className="text-3xl font-semibold mb-8">Certifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-2">AWS Certified Solutions Architect - Professional</h4>
                    <p className="text-white/60 text-sm mb-1">Amazon Web Services</p>
                    <p className="text-white/40 text-xs">Issued: March 2023 • Expires: March 2026</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-2">Google Cloud Professional Developer</h4>
                    <p className="text-white/60 text-sm mb-1">Google Cloud</p>
                    <p className="text-white/40 text-xs">Issued: September 2022 • Expires: September 2024</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-2">Certified Kubernetes Administrator (CKA)</h4>
                    <p className="text-white/60 text-sm mb-1">Cloud Native Computing Foundation</p>
                    <p className="text-white/40 text-xs">Issued: January 2023 • Expires: January 2026</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold mb-2">TensorFlow Developer Certificate</h4>
                    <p className="text-white/60 text-sm mb-1">TensorFlow Certificate Program</p>
                    <p className="text-white/40 text-xs">Issued: June 2021</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'REST APIs', 'Git', 'CI/CD', 'Kubernetes', 'TensorFlow', 'Next.js', 'Redis'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'personal' && (
          <div className="pt-16 bg-black">
            <div className="container mx-auto px-6 max-w-6xl py-20">
              <div className="mb-16">
                <h2 className="text-6xl font-semibold mb-6 tracking-tight">About Me</h2>
              </div>

              <div className="max-w-3xl space-y-6 text-white/70 text-lg leading-relaxed mb-16">
                <p>
                  I'm a passionate full stack developer with over 6 years of experience building scalable web applications.
                  I love solving complex problems and creating elegant solutions that make a real impact on users' lives.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open source projects, writing technical blog posts,
                  or exploring the latest technologies in web development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Location</h3>
                  <p className="text-xl">San Francisco, CA</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Education</h3>
                  <p className="text-xl">B.S. Computer Science</p>
                  <p className="text-white/60">Stanford University</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Languages</h3>
                  <p className="text-xl">English (Native)</p>
                  <p className="text-xl">Spanish (Fluent)</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-sm font-medium text-white/60 mb-2">Interests</h3>
                  <p className="text-xl">Open Source, AI/ML, UX Design</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-1">AWS Certified Solutions Architect</h4>
                    <p className="text-white/60">Amazon Web Services, 2023</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Google Cloud Professional Developer</h4>
                    <p className="text-white/60">Google Cloud, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-16 bg-black">
            <div className="container mx-auto px-6 max-w-6xl py-20">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-semibold mb-6 tracking-tight">Get in Touch</h2>
                <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                  I'm always interested in hearing about new opportunities and collaborations.
                </p>
              </div>

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
        )}
      </main>

      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="container mx-auto px-6 text-center text-white/40 text-sm">
          <p>© 2024 John Doe. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
