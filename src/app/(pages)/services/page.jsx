import Service from "../(home)/service";
import Hero from "@/components/ui/Hero";
import SparkleText from "@/components/helper/SparkleText";
import { serviceMd } from "@/lib/datas/metaDatas";

export const metadata = serviceMd; 

export default function page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="Services" /></>} />
      <Service />
    </main>
  )
}
