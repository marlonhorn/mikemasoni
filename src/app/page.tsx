import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
