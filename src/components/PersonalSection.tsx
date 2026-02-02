export default function PersonalSection() {
  return (
    <div className="bg-black relative z-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
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
  );
}
