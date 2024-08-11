import Mission from "./mission";
import Hero from "@/components/ui/Hero";
import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/layouts/contact/contact";
import TechStack from "./tech-stack";
import { aboutMd } from "@/lib/datas/metaDatas";
import WorkingProcess from "../(home)/working-process";

export const metadata = aboutMd;

export default function page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="About Me" /></>} />
      <Mission />
      <TechStack />
      <WorkingProcess />
      <Contact heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}
