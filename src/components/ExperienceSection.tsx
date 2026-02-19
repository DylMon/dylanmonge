import { useState } from 'react';
import { FileDown, ChevronDown } from 'lucide-react';

export default function ExperienceSection() {
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
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 font-syne">Work History</h3>
          <div className="h-0.5 bg-white mb-8" />
          <div className="space-y-6">
            {[
              {
                title: 'Freelance Web Developer',
                company: 'Self-Employed',
                date: '2024 - Present',
                description: '',
                bullets: [],
              },
              {
                title: 'IT Infrastructure Technician',
                company: 'DOV Group',
                date: '2025 - Present',
                description: 'At DOV Group, we provide IT infrastructure and managed support across a client base spanning industrial manufacturing, healthcare, and law. As an Infrastructure Technician, I support daily operations by maintaining reliable systems, managing asset data, and delivering secure, responsive technical support. My responsibilities include:',
                bullets: [
                  'Oversight of asset datasets and employee hardware across multiple client organizations, ensuring accurate lifecycle records, device availability, and operational visibility',
                  'On-demand local and remote desktop support, troubleshooting hardware, software, and network issues while maintaining secure access using Ensight',
                  'Administration of Microsoft 365 environments, including user provisioning, device oversight, and administrative configuration via the Admin Center',
                ],
              },
              {
                title: 'Lead ML Engineer',
                company: 'Cal Poly Pomona Enterprises',
                date: '2024 - Present',
                description: 'Cal Poly Pomona Digital Twin Technology for Aerospace (CPP-DiTTA) is tasked with developing a real-time digital twin health monitoring demonstrator capable of identifying defects and damage to aircraft wings, enhancing predictive maintenance capabilities. My ongoing contributions include:',
                bullets: [
                  'Training a series of neural networks on simulated stress and deformation data to accurately locate structural flaws, with the goal of improving in-flight safety and maintenance',
                  'Building and deploying an interactive website to demonstrate the digital twin model, allowing users to test and visualize 3D results in real-time with Blender and Unity',
                  'Ensuring smooth project development and interdisciplinary collaboration through weekly meetings with project members and faculty',
                ],
              },
              {
                title: 'Instructor & Tech Support Intern',
                company: 'Lavner Education',
                date: 'Summer 2019',
                description: 'Lavner Education delivers innovative STEM programs through K–12 camps in coding, AI, robotics, and digital design. As part of the Instruction team, I help ensure smooth daily operations and a high-quality learning experience for campers and staff. My role included:',
                bullets: [
                  'Setup and maintenance of computer hardware, software environments, and internet infrastructure to support daily tech camp operations',
                  'Providing real-time troubleshooting and technical support to instructors and students, ensuring minimal downtime and consistent program delivery',
                  'Acting as liaison between the camp site and headquarters for resolving technical issues, streamlining communication and implementation of solutions',
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
                        maxHeight: openEntries.has(i) ? '600px' : '0px',
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

        <div id="featured-projects" className="mb-20 scroll-mt-16">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 font-syne">My Work</h3>
          <div className="h-0.5 bg-white mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'De Bravo Media ',
                url: 'https://debravomedia.com',
                description: 'A versatile media production company that specializes in telling stories of culture, faith and community.',
                tags: [],
                image: '/screenshots/debravo-thumbnail.png',
              },
              {
                name: 'Achaary',
                url: 'https://achaary.com/',
                description: 'A couple-run small business that brings handcrafted, traditional indian flavor to the modern kitchen.',
                tags: [],
                image: '/screenshots/achaary-thumbnail.png',
              },
              {
                name: 'LG Tech Solutions',
                url: 'https://nwt.bvg.mybluehost.me/website_e5762df6/',
                description: 'A professional production team that delivers end-to-end service for any event.',
                tags: [],
                image: '/screenshots/lgtech-thumbnail.png',
              },

            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group block"
              >
                <div className="aspect-video bg-white/10 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/40 text-sm">
                      {project.name}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{project.name}</h4>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div id="research-publications" className="mb-20 scroll-mt-16">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 font-syne">Research & Publications</h3>
          <div className="h-0.5 bg-white mb-8" />
          <div className="space-y-16">
            {[
              {
                title: 'Cal Poly Pomona Digital Twin Technology for Aerospace',
                citation: 'Driggs, C., Holley, A., Monge, D., Montano, R., and Sotoudeh, Z., “A Digital Twin Framework for Real-Time Damage Localization and Stress-Field Prediction in Plate Structures,” AIAA SciTech Forum, 2026.',
                citationUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-0216',
                paragraphs: [
                  'CPP-DiTTA aims to create a virtual replica—or digital twin—of a real physical structure, allowing users to monitor and predict how it behaves under stress in real time. Designed as an educational and research tool, the project combines machine learning and engineering simulations to detect potential damage, visualize stress, and help make smarter decisions about structural health. It’s a step toward more intelligent, interactive systems that bridge the gap between the physical and digital worlds.',
                  'In the project, I worked as a student assistant contributing to both the development and implementation of the digital twin system. My role included creating 3D models from real-world data, helping design the interactive web platform, and training machine learning models to recognize structural issues. I also supported testing and data preparation, helping bring together research, design, and technology into a working tool that anyone can explore and learn from.',
                  'The CPP-DiTTA models are built into a website that you can explore here:'
                ],
                pdfUrl: '/downloads/Scitech2026-DiTTA-Full-ArcticleFinalV3.pdf',
                image: '/screenshots/ditta-thumbnail.png',
                imageLabel: 'https://digitaltwintech.studio/',
              },

            ].map((pub) => (
              <div key={pub.title}>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{pub.title}</h4>
                <a
                  href={pub.citationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors duration-200 inline-block mb-2"
                >
                  {pub.citation}
                </a>
                <div className="mb-4">
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>View PDF</span>
                  </a>
                </div>
                <div className="space-y-4 text-white/70 text-sm leading-relaxed mb-6 max-w-3xl">
                  {pub.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href={pub.imageLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200"
                >
                  Explore CPP-DiTTA
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 font-syne">Certifications</h3>
          <div className="h-0.5 bg-white mb-8" />
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-lg relative overflow-hidden glass-sheen">
            <h4 className="text-lg font-semibold mb-2">AWS Certified Cloud Practitioner</h4>
            <p className="text-white/60 text-sm mb-1">Amazon Web Services</p>
            <p className="text-white/40 text-xs">Issued: Jun 2025 &bull; Expires: Jun 2028</p>
          </div>
        </div>
      </div>
    </div>
  );
}
