import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // maigeXR color palette
        'space-navy': '#0a0e27',
        'cyan-accent': '#00ffff',
        'cyan-light': '#00d9ff',
        'magenta-accent': '#ff00ff',
        'purple-accent': '#b000ff',
        'lime-accent': '#7fff00',
        'gray-dark': '#1a1f3a',
        'gray-cool': '#2d3250',
      },
      fontFamily: {
        'display': ['var(--font-orbitron)', 'sans-serif'],
        'heading': ['var(--font-outfit)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Override default sizes with better line-heights to prevent descenders from being cut off
        '5xl': ['3rem', { lineHeight: '1.2' }],      // 48px
        '6xl': ['3.75rem', { lineHeight: '1.2' }],   // 60px
        '7xl': ['4.5rem', { lineHeight: '1.2' }],    // 72px
        '8xl': ['6rem', { lineHeight: '1.2' }],      // 96px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
