export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    platforms: [
      { name: "Android", href: "https://github.com/maigeXR/android" },
      { name: "iOS", href: "https://github.com/maigeXR/ios" },
      { name: "Web", href: "https://github.com/maigeXR/web" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Examples", href: "#" },
      { name: "API Reference", href: "#" },
    ],
    community: [
      { name: "GitHub", href: "https://github.com/maigeXR" },
      { name: "Discussions", href: "https://github.com/orgs/maigeXR/discussions" },
      { name: "Issues", href: "https://github.com/maigeXR/maigeXR/issues" },
    ],
  };

  return (
    <footer className="relative bg-space-navy border-t border-gray-cool/30">
      {/* CTA Section */}
      <div className="relative py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-accent/10 via-magenta-accent/10 to-lime-accent/10"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-accent via-magenta-accent to-lime-accent bg-clip-text text-transparent">
            Start Building with maigeXR
          </h2>
          <p className="font-body text-xl text-gray-300 mb-10">
            Join the future of XR development. Open source, privacy-first, and powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://github.com/maigeXR"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-accent to-magenta-accent text-space-navy font-heading font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 glow-cyan inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>

            <a
              href="#overview"
              className="px-8 py-4 glass-effect text-white font-heading font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:border-cyan-accent"
            >
              Learn More
            </a>
          </div>

          {/* Open Source Badge */}
          <div className="mt-10">
            <span className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full text-sm font-semibold text-gray-300">
              <svg className="w-5 h-5 text-lime-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              100% Open Source
            </span>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-cool/30 py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and tagline */}
            <div className="md:col-span-1">
              <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-cyan-accent to-magenta-accent bg-clip-text text-transparent mb-3">
                maigeXR
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                From conversation to creation. Making XR development accessible to everyone.
              </p>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Platforms</h4>
              <ul className="space-y-3">
                {links.platforms.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-gray-400 hover:text-cyan-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {links.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-gray-400 hover:text-cyan-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-3">
                {links.community.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-gray-400 hover:text-cyan-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-cool/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-sm text-gray-500">
                © {currentYear} maigeXR. Open source under MIT License.
              </p>
              <p className="font-body text-sm text-gray-500">
                Made with ❤️ by the community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
