import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/layouts/contact/contact";
import Hero from "@/components/other/hero";
import { contactMd } from "@/lib/datas/metaDatas";

export const metadata = contactMd;

export default function page() {
    return (
        <>
            <Hero heading={<><SparkleText text="Contact Me" /></>} />
            <Contact />
        </>
    );
}
