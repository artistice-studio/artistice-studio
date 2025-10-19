import Contact from "@/components/layouts/contact/contact";
import Hero from "./hero";
import Purpose from "./purpose";
import Service from "./service";
import FAQ from "./faq";
import Pricing from "./pricing";
import WorkingProcess from "./working-process";
import WorkPreview from "./work-preview";
import Temp from "./temp";
import ServiceShort from "./service-short";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceShort />
      <WorkPreview />
      <WorkingProcess />
      <Purpose />
      <Service />
      <FAQ />
      <Pricing />
      <Contact />
      {/* <Temp /> */}
    </main>
  );
}
