import SparkleText from "../../helper/SparkleText";
import FadeUp from "@/components/animaitons/FadeUp";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function Contact({ className, heading, subTitle }) {
    return (
        <section className={`relative p-4 bg-background ${className}`}>
            <div className="mx-auto container p-4 pb-10 md:px-12 lg:px-16 bg-secondary rounded-2xl border">
                <div className="flex-center flex-col text-center">
                    <FadeUp>
                        <h2 className="h2 mt-6 -mb-4">{heading ? heading : <SparkleText text="Get In Touch" />}</h2>
                    </FadeUp>
                    <FadeUp>
                        <p>{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
                    </FadeUp>
                    <FadeUp>
                        <div className="flex gap-4 flex-wrap items-center">
                            <Link className={buttonVariants({ variant: "outline" })} href="https://wa.me/916206398128"><MessageCircle className="size-5" /> Message Now</Link>
                            <Link className={buttonVariants({ variant: "outline" })} href="tel:916206398128"><Phone className="size-5" /> +91 62063 98128</Link>
                        </div>
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