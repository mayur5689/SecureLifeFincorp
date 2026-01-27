import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Services } from "@/components/Services";
import { WhoWeAre } from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <Services />
      <WhoWeAre />
      {/* Other sections will go here */}
    </main>
  );
}
