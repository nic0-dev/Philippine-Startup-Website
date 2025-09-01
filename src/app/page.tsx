import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import CoreMission from "@/components/CoreMission";
import FoundingOrganizers from "@/components/FoundingOrganizers";
import CallToAction from "@/components/CallToAction";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <CoreMission />
        <FoundingOrganizers />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}
