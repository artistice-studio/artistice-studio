import Contact from "@/components/layouts/contact/contact";
import Hero from "./hero";
import Purpose from "./purpose";
import Service from "./service";
import FAQ from "./faq";
import Pricing from "./pricing";
import WorkingProcess from "./working-process";
import WorkPreview from "./work-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Purpose />
      <Service />
      <WorkPreview />
      <Pricing />
      <WorkingProcess />
      <FAQ />
      <Contact />
    </main>
  );
}
