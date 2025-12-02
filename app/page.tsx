import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import PlatformShowcase from "@/components/PlatformShowcase";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechnologyStack from "@/components/TechnologyStack";
import UseCases from "@/components/UseCases";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <PlatformShowcase />
      <FeaturesGrid />
      <TechnologyStack />
      <UseCases />
      <GettingStarted />
      <Footer />
    </main>
  );
}
