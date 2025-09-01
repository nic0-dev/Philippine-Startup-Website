import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
}
