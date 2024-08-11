import Image from "next/image";
import SparkleText from "../../helper/SparkleText";
import FormBox from "./form";
import { Imail } from "@/components/ui/svgs";
import FadeRight from "@/components/animaitons/FadeRight";
import FadeUp from "@/components/animaitons/FadeUp";

export default function Contact({ className, heading, subTitle }) {
    return (
        <section className={className}>
            <div className="section-wrapper relative grid md:grid-cols-2 gap-block">
                <div className="md:sticky h-fit top-block">
                    <FadeUp>
                        <h2 className="mb-2 text-left">{heading ? heading : <SparkleText text="Get In Touch" />}</h2>
                        <p className="">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
                    </FadeUp>
                    <div className="hidden md:block">
                        <FadeUp>
                            <Imail className="w-full text-muted-foreground" />
                        </FadeUp>
                    </div>
                </div>
                <FormBox />
            </div>
        </section>
    )
}
