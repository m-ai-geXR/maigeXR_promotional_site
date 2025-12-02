/**
 * Centralized site configuration
 * All URLs and links are managed from this single file
 */

export const siteConfig = {
  // Main GitHub URLs
  github: {
    org: "https://github.com/orgs/m-ai-geXR/repositories",
    main: "https://github.com/m-ai-geXR",
    site: "https://github.com/m-ai-geXR/maigeXR_promotional_site",
    discussions: "https://github.com/orgs/m-ai-geXR/discussions",
    issues: "https://github.com/m-ai-geXR/maigeXR_promotional_site/issues",
  },

  // Platform repositories
  platforms: {
    android: "https://github.com/m-ai-geXR/AndroidMaigeXr",
    ios: "https://github.com/m-ai-geXR/iOSMaigeXr",
    web: "https://github.com/m-ai-geXR/WebMaigeXr",
  },

  // AI Provider links
  aiProviders: {
    together: "https://www.together.ai",
    openai: "https://openai.com",
    anthropic: "https://www.anthropic.com",
    google: "https://ai.google.dev",
    ollama: "https://ollama.ai",
  },

  // 3D Framework links
  frameworks: {
    babylonjs: "https://www.babylonjs.com",
    threejs: "https://threejs.org",
    reactThreeFiber: "https://docs.pmnd.rs/react-three-fiber",
    aframe: "https://aframe.io",
    reactylon: "https://github.com/brianzinn/react-babylonjs",
  },

  // Platform Technology links
  platformTech: {
    kotlin: "https://kotlinlang.org",
    swift: "https://www.swift.org",
    nextjs: "https://nextjs.org",
    react: "https://react.dev",
    typescript: "https://www.typescriptlang.org",
    jetpackCompose: "https://developer.android.com/jetpack/compose",
  },
} as const;
