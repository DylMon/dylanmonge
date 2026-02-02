import { FileDown } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <div className="bg-black relative z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Work History</h3>
          <div className="space-y-12">
                        <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Freelance Web Developer</h4>
                  <p className="text-white/60">Self-Employed</p>
                </div>
                <span className="text-white/40 mt-2 md:mt-0">2024 - Present</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            
            <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">IT Infrastructure Technician</h4>
                  <p className="text-white/60">DOV Group</p>
                </div>
                <span className="text-white/40 mt-2 md:mt-0">2025 - Present</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
              <p>
                At DOV Group, we provide IT infrastructure and managed support across a client base spanning industrial manufacturing, 
                healthcare, and law. As an Infrastructure Technician, I support daily operations by maintaining reliable systems, 
                managing asset data, and delivering secure, responsive technical support. My responsibilities include: 
              </p>
                <li>Oversight of asset datasets and employee hardware across multiple client organizations, ensuring accurate lifecycle 
                  records, device availability, and operational visibility</li>
                <li>On-demand local and remote desktop support, troubleshooting hardware, software, and network issues while maintaining 
                  secure access using Ensight</li>
                <li>Administration of Microsoft 365 environments, including user provisioning, device oversight, and administrative 
                  configuration via the Admin Center</li>
              </ul>
            </div>

            <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Lead ML Engineer</h4>
                  <p className="text-white/60">Cal Poly Pomona Enterprises</p>
                </div>
                <span className="text-white/40 mt-2 md:mt-0">2024 - Present</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <p>
                  Cal Poly Pomona Digital Twin Technology for Aerospace (CPP-DiTTA) is tasked with developing a real-time digital 
                  twin health monitoring demonstrator capable of identifying defects and damage to aircraft wings, enhancing 
                  predictive maintenance capabilities. My ongoing contributions include:
                </p>
                <li>Training a series of neural networks on simulated stress and deformation data to accurately locate structural 
                  flaws, with the goal of improving in-flight safety and maintenance</li>
                <li>Building and deploying an interactive website to demonstrate the digital twin model, allowing users to test 
                  and visualize 3D results in real-time with Blender and Unity</li>
                <li>Ensuring smooth project development and interdisciplinary collaboration through weekly meetings with project members and faculty</li>
              </ul>
            </div>

            <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Instructor & Tech Support Intern</h4>
                  <p className="text-white/60">Lavner Education</p>
                </div>
                <span className="text-white/40 mt-2 md:mt-0">Summer 2019</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <p>
                  Lavner Education delivers innovative STEM programs through K–12 camps in coding, AI, robotics, and digital 
                  design. As part of the Instruction team, I help ensure smooth daily operations and a high-quality learning 
                  experience for campers and staff. My role included:
                </p>
                <li>Setup and maintenance of computer hardware, software environments, and internet infrastructure to support 
                  daily tech camp operations</li>
                <li>Providing real-time troubleshooting and technical support to instructors and students, ensuring minimal 
                  downtime and consistent program delivery</li>
                <li> Acting as liaison between the camp site and headquarters for resolving technical issues, streamlining 
                  communication and implementation of solutions</li>
              </ul>
            </div>

            <div className="border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Research Assistant - Digital Twin and XR Systems</h4>
                  <p className="text-white/60">Cal Poly Pomona</p>
                </div>
                <span className="text-white/40 mt-2 md:mt-0">2024 - 2025</span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <p>
                  Engaged in the full lifecycle of project development from initial concept to final execution, my key 
                  esponsibilities include developing workflow pipelines, testing software, and creating detailed 3D models 
                  from point-cloud data. I then use these models to develop virtual reality demonstrations in Unity, 
                  illustrating the practical uses of digital twin technology in augmented reality settings.
                </p>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div id="featured-projects" className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">My Work</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'De Bravo Media ',
                url: 'https://debravomedia.com',
                description: 'Full-stack marketplace with real-time inventory management, secure payment processing, and analytics dashboard. Built with React, Node.js, and PostgreSQL.',
                tags: [],
                image: '/screenshots/debravo-thumbnail.png',
              },
              {
                name: 'Achaary',
                url: 'https://achaary.com/',
                description: 'SaaS platform for AI-powered content creation with custom model fine-tuning, user authentication, and subscription management. Integrated with OpenAI API.',
                tags: ['Next.js', 'TypeScript', 'OpenAI', 'Supabase'],
                image: '/screenshots/achaary-thumbnail.png',
              },
              {
                name: 'LG Tech Solutions',
                url: 'https://nwt.bvg.mybluehost.me/website_e5762df6/',
                description: 'Enterprise analytics platform with real-time data visualization, custom reporting, and team collaboration features. Handles millions of events per day.',
                tags: ['React', 'D3.js', 'WebSocket', 'Redis'],
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

        <div id="research-publications" className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Research & Publications</h3>
          <div className="space-y-16">
            {[
              {
                title: 'Cal Poly Pomona Digital Twin Technology for Aerospace',
                citation: 'Driggs, C., Holley, A., Monge, D., Montano, R., and Sotoudeh, Z., “A Digital Twin Framework for Real-Time Damage Localization and Stress-Field Prediction in Plate Structures,” AIAA SciTech Forum, 2026.',
                citationUrl: 'https://arc.aiaa.org/doi/10.2514/6.2026-0216',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                  href={pub.citationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 max-w-2xl group"
                >
                  <div className="aspect-video bg-white/10 relative overflow-hidden">
                    {pub.image ? (
                      <img
                        src={pub.image}
                        alt={`${pub.title} preview`}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40 group-hover:text-white transition-colors text-sm">
                        {pub.imageLabel} &rarr;
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Certifications</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-lg">
            <h4 className="text-lg font-semibold mb-2">AWS Certified Cloud Practitioner</h4>
            <p className="text-white/60 text-sm mb-1">Amazon Web Services</p>
            <p className="text-white/40 text-xs">Issued: Jun 2025 &bull; Expires: Jun 2028</p>
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
  );
}
