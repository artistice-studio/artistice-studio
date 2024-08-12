import Image from "next/image";
import SparkleText from "../../helper/SparkleText";
import FormBox from "./form";
import { Imail } from "@/components/ui/svgs";
import FadeRight from "@/components/animaitons/FadeRight";
import FadeUp from "@/components/animaitons/FadeUp";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Contact({ className, heading, subTitle }) {
    return (
        <section className={`bg-secondary ${className}`}>
            <div className="section-wrapper">
                <div className="flex-center flex-col text-center">
                    <FadeUp>
                        <h2 className="-mb-xs">{heading ? heading : <SparkleText text="Get In Touch" />}</h2>
                    </FadeUp>
                    <FadeUp>
                        <p>{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
                    </FadeUp>
                    <FadeUp>
                        <Link className={buttonVariants()} href="https://wa.me/916206398128">Message Now</Link>
                    </FadeUp>
                </div>
            </div>
        </section>
    )
}

{/* <div className="hidden md:block">
    <FadeUp>
        <Imail className="w-full text-muted-foreground" />
    </FadeUp>
</div> */}
{/* <FormBox /> */ }