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

        <div id="featured-projects" className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Featured Projects</h3>
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

        <div id="research-publications" className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Research & Publications</h3>
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
                Read paper &rarr;
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
                Read paper &rarr;
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
                Read paper &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-2">AWS Certified Solutions Architect - Professional</h4>
              <p className="text-white/60 text-sm mb-1">Amazon Web Services</p>
              <p className="text-white/40 text-xs">Issued: March 2023 &bull; Expires: March 2026</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-2">Google Cloud Professional Developer</h4>
              <p className="text-white/60 text-sm mb-1">Google Cloud</p>
              <p className="text-white/40 text-xs">Issued: September 2022 &bull; Expires: September 2024</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold mb-2">Certified Kubernetes Administrator (CKA)</h4>
              <p className="text-white/60 text-sm mb-1">Cloud Native Computing Foundation</p>
              <p className="text-white/40 text-xs">Issued: January 2023 &bull; Expires: January 2026</p>
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
  );
}
