import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Services } from "@/components/Services";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <Services />
      <WhoWeAre />
      <Blog />
      <Testimonials />
      <FAQ />
      {/* Other sections will go here */}
    </main>
  );
}
