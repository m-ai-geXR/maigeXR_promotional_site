export default function UseCases() {
  const useCases = [
    {
      title: "Education & Learning",
      description:
        "Create interactive 3D visualizations for complex concepts. From molecular structures to historical reconstructions, make learning immersive and engaging.",
      perfectFor: "Teachers, Students, EdTech",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Rapid Prototyping",
      description:
        "Transform product ideas into 3D prototypes in minutes. Iterate quickly on designs with AI-assisted modeling and instant visual feedback.",
      perfectFor: "Product Designers, Startups",
      gradient: "from-purple-500 to-magenta-500",
    },
    {
      title: "Creative Exploration",
      description:
        "Experiment with 3D art, interactive installations, and generative designs. Let AI be your creative partner in bringing abstract ideas to life.",
      perfectFor: "Artists, Creators, Innovators",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Professional Development",
      description:
        "Build interactive training simulations, architectural walkthroughs, and product demonstrations. Elevate your professional presentations.",
      perfectFor: "Architects, Trainers, Consultants",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "XR Development",
      description:
        "Create AR/VR experiences without extensive 3D programming knowledge. Focus on your vision while AI handles the technical complexity.",
      perfectFor: "XR Developers, App Creators",
      gradient: "from-green-500 to-lime-500",
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-space-navy to-gray-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-accent to-purple-accent bg-clip-text text-transparent">
            Endless Possibilities
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From education to enterprise, maigeXR adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="font-body text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${useCase.gradient} bg-opacity-20 border border-current`}>
                  <span className={`font-heading text-sm font-semibold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                    Perfect for: {useCase.perfectFor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
