export default function Overview() {
  const stats = [
    { number: "3", label: "Platforms", sublabel: "Android, iOS, Web" },
    { number: "5+", label: "AI Providers", sublabel: "Together.ai, OpenAI, Anthropic & more" },
    { number: "5", label: "3D Frameworks", sublabel: "Babylon, Three.js, R3F & more" },
  ];

  return (
    <section id="overview" className="relative py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-space-navy to-gray-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-accent to-magenta-accent bg-clip-text text-transparent">
            What is maigeXR?
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            maigeXR is a revolutionary AI-powered platform that transforms conversational
            input into immersive 3D experiences. Simply describe what you want to create,
            and our advanced AI generates production-ready XR applications across multiple
            platforms and frameworks. Making XR development accessible to everyone, from
            beginners to professionals.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 hover:glow-cyan"
            >
              <div className="font-display text-6xl font-black bg-gradient-to-r from-cyan-accent to-lime-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="font-heading text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="font-body text-sm text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="glass-effect rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-accent to-cyan-light flex items-center justify-center mb-3">
                <svg className="w-10 h-10 text-space-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="font-heading font-semibold text-lg">Conversation</span>
            </div>

            <div className="text-cyan-accent text-3xl hidden md:block">→</div>
            <div className="text-cyan-accent text-3xl md:hidden">↓</div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-magenta-accent to-purple-accent flex items-center justify-center mb-3">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-heading font-semibold text-lg">AI Processing</span>
            </div>

            <div className="text-magenta-accent text-3xl hidden md:block">→</div>
            <div className="text-magenta-accent text-3xl md:hidden">↓</div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lime-accent to-green-400 flex items-center justify-center mb-3">
                <svg className="w-10 h-10 text-space-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <span className="font-heading font-semibold text-lg">3D Scene</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
