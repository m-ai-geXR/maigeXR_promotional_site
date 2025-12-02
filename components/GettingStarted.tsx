"use client";

import { useState } from "react";

export default function GettingStarted() {
  const [selectedPlatform, setSelectedPlatform] = useState<"android" | "ios" | "web">("web");

  const platforms = {
    android: {
      name: "Android",
      steps: [
        "Download the APK from GitHub Releases",
        "Install on your Android device",
        "Add your preferred AI provider API key",
        "Start creating 3D scenes with voice or text",
      ],
      installCommand: "# Coming soon to Play Store",
      repoLink: "https://github.com/maigeXR/android",
    },
    ios: {
      name: "iOS",
      steps: [
        "Clone the repository from GitHub",
        "Open in Xcode 15+",
        "Configure your AI provider credentials",
        "Build and run on your device or simulator",
      ],
      installCommand: "git clone https://github.com/maigeXR/ios.git",
      repoLink: "https://github.com/maigeXR/ios",
    },
    web: {
      name: "Web",
      steps: [
        "Clone the web repository",
        "Install dependencies with pnpm",
        "Add your AI provider API key to .env",
        "Run the development server and start creating",
      ],
      installCommand: "git clone https://github.com/maigeXR/web.git && cd web && pnpm install",
      repoLink: "https://github.com/maigeXR/web",
    },
  };

  const selectedData = platforms[selectedPlatform];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedData.installCommand);
  };

  return (
    <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-gray-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-lime-accent to-magenta-accent bg-clip-text text-transparent">
            Get Started in Minutes
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your platform and start building immersive XR experiences
          </p>
        </div>

        {/* Platform selector */}
        <div className="flex justify-center gap-4 mb-12">
          {(["android", "ios", "web"] as const).map((platform) => (
            <button
              key={platform}
              onClick={() => setSelectedPlatform(platform)}
              className={`px-6 py-3 rounded-lg font-heading font-semibold transition-all duration-300 ${
                selectedPlatform === platform
                  ? "bg-gradient-to-r from-cyan-accent to-magenta-accent text-space-navy scale-105"
                  : "glass-effect text-white hover:scale-105"
              }`}
            >
              {platforms[platform].name}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {selectedData.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-accent to-lime-accent flex items-center justify-center text-space-navy font-display font-bold text-xl">
                  {index + 1}
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-body text-lg text-gray-200">{step}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Install command */}
          <div className="mt-8 p-6 bg-space-navy rounded-lg relative">
            <code className="font-mono text-cyan-accent text-sm md:text-base">
              {selectedData.installCommand}
            </code>
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded transition-colors duration-200"
              aria-label="Copy to clipboard"
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-cyan-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Repository link */}
          <div className="mt-6 text-center">
            <a
              href={selectedData.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading font-semibold text-magenta-accent hover:text-lime-accent transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Additional resources */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-heading font-semibold text-lg text-white mb-2">Documentation</h3>
            <p className="font-body text-sm text-gray-400">Complete guides and API reference</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-heading font-semibold text-lg text-white mb-2">Community</h3>
            <p className="font-body text-sm text-gray-400">Join discussions and get support</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-heading font-semibold text-lg text-white mb-2">Examples</h3>
            <p className="font-body text-sm text-gray-400">Browse sample projects and demos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
