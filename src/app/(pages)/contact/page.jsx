import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/layouts/contact/contact";
import Hero from "@/components/ui/Hero";
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
