import { FileDown } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <div className="bg-black relative z-10 bg-grid overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
        <div id="featured-projects" className="mb-20 scroll-mt-16">
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-center font-semibold tracking-tight mb-4 font-syne">Web Development</h3>
          <div className="h-0.5 bg-white mb-8" />
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            I still build and run production web infrastructure for freelance clients in my free time. I use tools like AWS, Vercel, Supabase/PostgreSQL, DNS/SSL, and third-party integrations to ship web products that are built to survive and grow beyond my time with them.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'De Bravo Media ',
                url: 'https://debravomedia.com',
                description: 'A dynamic media production organization led by Reese Cuevas. Specializes in telling stories of culture, faith and community.',
                tags: [],
                image: '/screenshots/debravo-thumbnail.jpg',
              },
              {
                name: 'Achaary',
                url: 'https://achaary.com/',
                description: 'A couple-run small business that brings handcrafted, traditional indian flavor to the modern kitchen.',
                tags: [],
                image: '/screenshots/achaary-thumbnail.jpg',
              },
              {
                name: 'Flourish Metabolic Health',
                url: 'https://www.flourishmetabolichealth.com/',
                description: "Dr. Anisha Sarma's online practice focused on women's metabolic health, serving women across California.",
                tags: [],
                image: '/screenshots/flourish-thumbnail.jpg',
              },
              {
                name: 'LG Tech Solutions',
                url: 'https://lgtechsolution.com',
                description: 'A professional production team that delivers end-to-end service for any event.',
                tags: [],
                image: '/screenshots/lgtech-thumbnail.jpg',
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
                      loading="lazy"
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
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-center font-semibold tracking-tight mb-4 font-syne">Research & Publications</h3>
          <div className="h-0.5 bg-white mb-8" />
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Prior to IT, I spent my time as a CompSci undergraduate at Cal Poly Pomona with a minor in Data Science. I contributed to a grant-funded Machine Learning research project focused on digital twin models for the aerospace sector, which led to a published AIAA paper. I also worked on an AR learning tool for engineering students, taking LiDAR models of the Engineering building and visualizing internal IoT device data. As Director of Public Relations for the College of Science, I ran social media campaigns and publicized events, connecting students and faculty beyond the classroom.
          </p>
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
              },

            ].map((pub) => (
              <div key={pub.title}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-lg mx-auto relative overflow-hidden glass-sheen mb-6">
                  <h4 className="text-lg font-semibold mb-2">{pub.title}</h4>
                  <a
                    href={pub.citationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm leading-relaxed transition-colors duration-200 inline-block mb-4"
                  >
                    {pub.citation}
                  </a>
                  <div>
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-200"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>View PDF</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-4 text-white/70 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  {pub.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href="https://digitaltwintech.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group block max-w-sm mx-auto"
                >
                  <div className="aspect-video bg-white/10 relative overflow-hidden">
                    <img
                      src={pub.image}
                      alt="CPP-DiTTA preview"
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">CPP-DiTTA</h4>
                    <p className="text-white/60 text-sm leading-relaxed">digitaltwintech.studio</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-center font-semibold tracking-tight mb-4 font-syne">Certifications</h3>
          <div className="h-0.5 bg-white mb-8" />
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-lg mx-auto relative overflow-hidden glass-sheen">
            <h4 className="text-lg font-semibold mb-2">AWS Certified Cloud Practitioner</h4>
            <p className="text-white/60 text-sm mb-1">Amazon Web Services</p>
            <p className="text-white/40 text-xs">Issued: Jun 2025 &bull; Expires: Jun 2028</p>
          </div>
        </div>
      </div>
    </div>
  );
}
