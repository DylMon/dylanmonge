import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export default function ServicesSection({ onContactClick }: ServicesSectionProps) {
  const [openEntries, setOpenEntries] = useState<Set<number>>(new Set());

  const toggleEntry = (index: number) => {
    setOpenEntries(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="bg-black relative z-10 bg-grid overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl text-center font-semibold mb-6 tracking-tight font-syne">Hello!</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto text-left leading-relaxed">
            I'm an IT Infrastructure Technician administering Microsoft Intune, Entra ID, and Microsoft 365 for a 120-person office and ~400 endpoints across manufacturing, sales, and legal clients. I spend my day tackling on-site operations: device enrollment/configuration, app deployments, compliance policies, hardware lifecycle, and face-to-face desktop support. Most recently I've helped migrate ~150 workstations from local accounts to Entra-joined, Intune-managed devices in 8 weeks for a CMMC deadline. For tasks worth automating, I script in PowerShell and Python.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-center font-semibold tracking-tight mb-4 font-syne">Work History</h3>
          <div className="h-0.5 bg-white mb-8" />
          <div className="space-y-6">
            {[
              {
                title: 'IT Infrastructure Technician',
                company: 'DOV Group · Full time',
                date: 'Sep 2025 - Present',
                description: 'At DOV Group, we provide IT infrastructure and managed support across a client base spanning industrial manufacturing, healthcare, and law. As an Infrastructure Technician, I support daily operations by maintaining reliable systems, managing asset data, and delivering secure, responsive technical support. My responsibilities include:',
                bullets: [
                  'Oversight of asset datasets and employee hardware across multiple client organizations, ensuring accurate lifecycle records, device availability, and operational visibility',
                  'On-demand local and remote desktop support, troubleshooting hardware, software, and network issues while maintaining secure access using Ensight',
                  'Administration of Microsoft 365 environments, including user provisioning, device oversight, and administrative configuration via the Admin Center',
                  'Installation and support for IoT and smart office infrastructure, including security cameras, conference rooms and employee workstations',
                ],
              },
              {
                title: 'Freelance Web Developer',
                company: 'Self-Employed',
                date: 'May 2025 - Present',
                description: 'I build and run websites and backend systems for small businesses, taking projects from requirements through launch and ongoing maintenance. Most clients are local service businesses that need a site, a booking or payment flow, and someone to keep it running. My responsibilities include:',
                bullets: [
                  'Deploying and maintaining production environments on Vercel and Supabase/PostgreSQL, owning DNS, SSL, hosting, authentication, and database configuration',
                  'Integrating third-party payment, scheduling, and inventory systems and translating client requirements into reliable technical solutions',
                  'Building to WCAG 2.1 AA accessibility guidelines for ADA compliance, including keyboard navigation, contrast, and screen-reader support',
                  'Handling ongoing support, updates, and uptime for live client sites after launch',
                  'Building each project so it can be handed off, with documentation and credentials the client owns',
                ],
              },
              {
                title: 'Instructor & Tech Support Intern',
                company: 'Lavner Education',
                date: 'Summer 2025',
                description: 'Lavner Education delivers innovative STEM programs through K–12 camps in coding, AI, robotics, and digital design. As part of the Instruction team, I help ensure smooth daily operations and a high-quality learning experience for campers and staff. My role included:',
                bullets: [
                  'Setup and maintenance of computer hardware, software environments, and internet infrastructure to support daily tech camp operations',
                  'Providing real-time troubleshooting and technical support to instructors and students, ensuring minimal downtime and consistent program delivery',
                  'Acting as liaison between the camp site and headquarters for resolving technical issues, streamlining communication and implementation of solutions',
                ],
              },
              {
                title: 'Undergraduate Research Lead (Machine Learning)',
                company: 'Cal Poly Pomona Enterprises · Part-time',
                date: 'Apr 2024 - Aug 2026',
                description: 'Cal Poly Pomona Digital Twin Technology for Aerospace (CPP-DiTTA) is tasked with developing a real-time digital twin health monitoring demonstrator capable of identifying defects and damage to aircraft wings, enhancing predictive maintenance capabilities. My contributions include:',
                bullets: [
                  'Training a series of neural networks on simulated stress and deformation data to accurately locate structural flaws, with the goal of improving in-flight safety and maintenance',
                  'Building and deploying an interactive website to demonstrate the digital twin model, allowing users to test and visualize 3D results in real-time with Blender and Unity',
                  'Ensuring smooth project development and interdisciplinary collaboration through weekly meetings with project members and faculty',
                ],
              },
              {
                title: 'Research Assistant - Digital Twin and XR Systems',
                company: 'Cal Poly Pomona',
                date: '2024 - 2025',
                description: 'Engaged in the full lifecycle of project development from initial concept to final execution, my key responsibilities include developing workflow pipelines, testing software, and creating detailed 3D models from point-cloud data. I then use these models to develop virtual reality demonstrations in Unity, illustrating the practical uses of digital twin technology in augmented reality settings.',
                bullets: [],
              },
            ].map((entry, i) => (
              <div key={i} className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold mb-2 font-syne">{entry.title}</h4>
                    <p className="text-white/60">{entry.company}</p>
                  </div>
                  <span className="text-white/40 mt-2 md:mt-0">{entry.date}</span>
                </div>
                {(entry.description || entry.bullets.length > 0) && (
                  <>
                    <button
                      onClick={() => toggleEntry(i)}
                      className="flex items-center gap-2 mt-4 text-white/40 hover:text-white text-sm transition-colors duration-200"
                    >
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-300"
                        style={{ transform: openEntries.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                      <span>{openEntries.has(i) ? 'Hide details' : 'View details'}</span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-400 ease-in-out"
                      style={{
                        maxHeight: openEntries.has(i) ? '900px' : '0px',
                        opacity: openEntries.has(i) ? 1 : 0,
                      }}
                    >
                      <div className="pt-4 space-y-3 text-white/70 text-sm">
                        {entry.description && <p className="leading-relaxed">{entry.description}</p>}
                        {entry.bullets.length > 0 && (
                          <ul className="space-y-2 list-disc list-inside">
                            {entry.bullets.map((b, j) => <li key={j}>{b}</li>)}
                          </ul>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-20">
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
