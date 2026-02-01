import { useState, useEffect } from 'react';

export default function PersonalTab() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div>
      <div className="h-screen" />
      <div className="fixed inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <h1 className="font-semibold tracking-tight" style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}>About Me</h1>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-0.5 bg-white transition-all duration-700 ease-out"
                 style={{
                   width: heroVisible ? '80%' : '0%',
                 }} />
          </div>
          <p
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: '0.8s',
            }}
          >
            Developer, creator, and lifelong learner.
          </p>
        </div>
      </div>

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
    </div>
  );
}
