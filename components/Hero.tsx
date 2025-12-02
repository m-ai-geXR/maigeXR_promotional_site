"use client";

import { siteConfig } from "@/config/site";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#overview");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-navy via-gray-dark to-space-navy">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-accent rounded-full mix-blend-screen filter blur-3xl animate-float opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-accent rounded-full mix-blend-screen filter blur-3xl animate-float animation-delay-2000 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-accent rounded-full mix-blend-screen filter blur-3xl animate-float animation-delay-4000 opacity-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-accent via-magenta-accent to-lime-accent bg-clip-text text-transparent">
            From Conversation
          </span>
          <br />
          <span className="bg-gradient-to-r from-lime-accent via-cyan-accent to-magenta-accent bg-clip-text text-transparent">
            to Creation
          </span>
        </h1>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 animate-slide-up max-w-4xl mx-auto">
          Transform natural language into immersive 3D experiences
        </p>

        <p className="font-body text-lg sm:text-xl text-gray-400 mb-12 animate-slide-up max-w-3xl mx-auto">
          AI-powered XR development platform for Android, iOS, and Web
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <a
            href={siteConfig.github.main}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-accent to-magenta-accent text-space-navy font-heading font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-cyan"
          >
            <span className="relative z-10">Get Started</span>
          </a>

          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              scrollToNext();
            }}
            className="group px-8 py-4 glass-effect text-white font-heading font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:border-cyan-accent"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cyan-accent"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
