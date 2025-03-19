import Hero from "@/components/hero";
import About from "@/components/about";
import Programs from "@/components/programs";
import Educators from "@/components/educators";
import Benefits from "@/components/benefits";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Educators />
      <Benefits />
      <Faq />
      <Contact />
    </main>
  );
}
