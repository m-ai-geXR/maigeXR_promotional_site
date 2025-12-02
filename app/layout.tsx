import type { Metadata } from "next";
import { Orbitron, Outfit, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "m{ai}geXR - AI-Powered XR Development | From Conversation to Creation",
  description:
    "Transform natural language into immersive 3D experiences. AI-powered XR development platform for Android, iOS, and Web. Supporting Babylon.js, Three.js, React Three Fiber, and more.",
  keywords: [
    "XR",
    "3D",
    "AI",
    "Babylon.js",
    "Three.js",
    "React Three Fiber",
    "WebXR",
    "AR",
    "VR",
    "development",
    "conversational AI",
    "m{ai}geXR",
    "maigeXR",
  ],
  authors: [{ name: "m{ai}geXR Team" }],
  openGraph: {
    title: "m{ai}geXR - AI-Powered XR Development",
    description:
      "From conversation to creation - making XR development accessible to everyone",
    type: "website",
    url: "https://maigexr.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "m{ai}geXR - AI-Powered XR Development",
    description:
      "Transform natural language into immersive 3D experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${outfit.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
