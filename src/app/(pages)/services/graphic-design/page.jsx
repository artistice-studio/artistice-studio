import SparkleText from "@/components/helper/SparkleText";
import Hero from "@/components/ui/Hero";
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
