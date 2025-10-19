import SparkleText from "@/components/helper/SparkleText";
import Hero from "@/components/other/hero";
import Includes from "./includes";
import Contact from "@/components/layouts/contact/contact";

export default function page() {
    return (
        <main>
            <Hero heading={<><SparkleText text="Graphic Designing" /></>} />
            <Includes />
            <Contact />
        </main>
    )
}
