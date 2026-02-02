export default function PersonalSection() {
  return (
    <div className="bg-black relative z-10 bg-grid overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-20">
        <div className="max-w-3xl space-y-6 text-white/70 text-lg leading-relaxed mb-16">
          <p>
            I'm empassioned by the ways technology enables us to express our ideas, connect with others, and solve complex problems. My background in computer science has taught me problem solving skills that I use throughout my life.
          </p>
          <p>
            When I'm not at my desk, you can expect me to be busying myself with creative projects like art or digital rendering, playing an instrument, reading a book or at the gym.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden glass-sheen">
            <h3 className="text-sm font-medium text-white/60 mb-2">Location</h3>
            <p className="text-xl">Los Angeles, CA</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden glass-sheen">
            <h3 className="text-sm font-medium text-white/60 mb-2">Education</h3>
            <p className="text-xl">B.S. Computer Science, minor in Data Science</p>
            <p className="text-white/60">California State Polytechnic University, Pomona</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden glass-sheen">
            <h3 className="text-sm font-medium text-white/60 mb-2">Languages</h3>
            <p className="text-xl">English (Native)</p>
            <p className="text-xl">Spanish (Intermediate)</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden glass-sheen">
            <h3 className="text-sm font-medium text-white/60 mb-2">Interests</h3>
            <p className="text-xl">Web Design, Data Science, Arttificial Intelligence </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden glass-sheen">
            <h3 className="text-2xl font-semibold mb-6">Hobbies</h3>
            <ul className="space-y-3 text-white/70">
              <li>Drawing and Graphic Design</li>
              <li>Bass Guitar and Piano</li>
              <li>Sci-Fi and Classic Literature</li>
              <li>Competitive Gaming</li>
              <li>Weightlifting</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden glass-sheen">
            <h3 className="text-2xl font-semibold mb-6">Currently Reading</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">A Dance with Dragons</p>
                <p className="text-white/40 text-sm">by George R.R. Martin</p>
              </div>
              <div>
                <p className="font-medium">Spaceman of Bohemia</p>
                <p className="text-white/40 text-sm">by Jaroslav Kalfař</p>
              </div>
                            <div>
                <p className="font-medium">If Cats Disappeared from the World</p>
                <p className="text-white/40 text-sm">by Genki Kawamura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
