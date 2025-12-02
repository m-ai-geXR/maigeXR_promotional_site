import { siteConfig } from "@/config/site";

export default function TechnologyStack() {
  const technologies = {
    "AI Providers": [
      { name: "Together.ai", color: "text-purple-400", url: siteConfig.aiProviders.together },
      { name: "OpenAI", color: "text-green-400", url: siteConfig.aiProviders.openai },
      { name: "Anthropic", color: "text-orange-400", url: siteConfig.aiProviders.anthropic },
      { name: "Google AI", color: "text-blue-400", url: siteConfig.aiProviders.google },
      { name: "Ollama", color: "text-cyan-400", url: siteConfig.aiProviders.ollama },
    ],
    "3D Frameworks": [
      { name: "Babylon.js", color: "text-red-400", url: siteConfig.frameworks.babylonjs },
      { name: "Three.js", color: "text-white", url: siteConfig.frameworks.threejs },
      { name: "React Three Fiber", color: "text-cyan-400", url: siteConfig.frameworks.reactThreeFiber },
      { name: "A-Frame", color: "text-pink-400", url: siteConfig.frameworks.aframe },
      { name: "Reactylon (Beta)", color: "text-yellow-400", url: siteConfig.frameworks.reactylon },
    ],
    "Platform Technologies": [
      { name: "Kotlin", color: "text-purple-500", url: siteConfig.platformTech.kotlin },
      { name: "Swift", color: "text-orange-500", url: siteConfig.platformTech.swift },
      { name: "Next.js", color: "text-white", url: siteConfig.platformTech.nextjs },
      { name: "React", color: "text-cyan-500", url: siteConfig.platformTech.react },
      { name: "TypeScript", color: "text-blue-500", url: siteConfig.platformTech.typescript },
      { name: "Jetpack Compose", color: "text-green-500", url: siteConfig.platformTech.jetpackCompose },
    ],
  };

  return (
    <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-space-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-accent to-cyan-accent bg-clip-text text-transparent">
            Built with Modern Technology
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by industry-leading AI providers and 3D frameworks
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-heading text-2xl font-bold text-magenta-accent mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {techs.map((tech, techIndex) => (
                  <a
                    key={techIndex}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-effect rounded-xl p-6 text-center hover:scale-110 transition-all duration-300 hover:glow-cyan cursor-pointer"
                  >
                    <div className={`font-heading text-lg font-semibold ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                      {tech.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature callout */}
        <div className="mt-16 glass-effect rounded-2xl p-8 text-center">
          <p className="font-body text-lg text-gray-300">
            <span className="font-bold text-lime-accent">Framework-agnostic design</span>
            {" "}means you can switch between technologies without rewriting your entire workflow.
            Pick the stack that works best for your project.
          </p>
        </div>
      </div>
    </section>
  );
}
