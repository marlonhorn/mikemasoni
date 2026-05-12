import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AboutContactPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
