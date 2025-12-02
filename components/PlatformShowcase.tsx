import { siteConfig } from "@/config/site";

export default function PlatformShowcase() {
  const platforms = [
    {
      name: "Android",
      tagline: "Native mobile power",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 00-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.99 11.11 1 14.57 1 18.5h22c0-3.93-1.99-7.39-5.4-9.02zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
        </svg>
      ),
      features: [
        "Kotlin-based architecture",
        "Native Android Babylon.js integration",
        "Offline-first AI processing",
        "Material Design 3 UI",
      ],
      techStack: "Kotlin • Babylon.js • Jetpack Compose",
      status: "Beta",
      statusColor: "from-yellow-400 to-yellow-600",
      link: siteConfig.platforms.android,
    },
    {
      name: "iOS",
      tagline: "Seamless Apple experience",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
        </svg>
      ),
      features: [
        "Swift-first development",
        "SceneKit and ARKit integration",
        "iCloud sync capabilities",
        "SwiftUI modern interface",
      ],
      techStack: "Swift • SceneKit • ARKit • SwiftUI",
      status: "Beta",
      statusColor: "from-yellow-400 to-yellow-600",
      link: siteConfig.platforms.ios,
    },
    {
      name: "Web",
      tagline: "Universal browser access",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      features: [
        "Next.js 15 App Router",
        "React Three Fiber support",
        "Multiple framework options",
        "PWA capabilities",
      ],
      techStack: "Next.js • React • Three.js • R3F",
      status: "Beta",
      statusColor: "from-yellow-400 to-yellow-600",
      link: siteConfig.platforms.web,
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-gray-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-magenta-accent to-lime-accent bg-clip-text text-transparent">
            Cross-Platform Excellence
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            One vision, three powerful implementations. Choose your platform or target them all.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:glow-magenta relative overflow-hidden"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/20 to-magenta-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-cyan-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>

                {/* Name and tagline */}
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  {platform.name}
                </h3>
                <p className="font-heading text-lg text-gray-400 mb-6">
                  {platform.tagline}
                </p>

                {/* Status badge */}
                <div className="mb-6">
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${platform.statusColor} text-white`}>
                    {platform.status}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start font-body text-gray-300">
                      <svg className="w-5 h-5 text-lime-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mb-6 p-4 bg-space-navy/50 rounded-lg">
                  <p className="font-mono text-sm text-cyan-accent">
                    {platform.techStack}
                  </p>
                </div>

                {/* Learn more link */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-heading font-semibold text-magenta-accent hover:text-lime-accent transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
