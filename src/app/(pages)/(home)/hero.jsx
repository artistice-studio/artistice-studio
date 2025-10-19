"use client"
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.1, staggerChildren: 0.3, }
    }
};

const item = {
    hidden: { x: -20, y: 20, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 }
};


export default function HeroOne() {
    return (
        <section
            className="relative p-4 bg-background"
            role="region"
            aria-label="Hero section for product introduction"
        >
            <div className="mx-auto container p-4 md:px-12 lg:px-16 bg-gradient-to-bl from-red-500 to-orange-200 rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left gap-8 md:gap-10">
                {/* Text Content */}
                <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <div>
                            <motion.div variants={item} className="text-2xl capitalize self-start font-medium">
                                I&apos;m Sanjeet Kumar Patro
                            </motion.div>
                            <motion.h1 variants={item} className="h1 my-4 leading-[55px] self-start">
                                <span className="clr-p"><SparkleText text="Photographer" /></span> <br />
                                <span className="clr-p"><SparkleText text="Video Editor" /></span> <br />
                                <span className="clr-p"><SparkleText text="Graphic-" /></span>
                                <span className="clr-p"><SparkleText text=" Designer" /></span> <br />
                            </motion.h1>

                            <motion.p variants={item} className="md:w-4/5 self-start">
                                We help you <span className="font-bold"> shine online. </span>  Whether you need  <span className="font-bold"> eye-catching photos, professional graphic design, or engaging video content, </span>  we&apos;ve got you covered.
                            </motion.p>

                            <motion.div variants={item} className="mt-4 self-start">
                                <Link className={`${buttonVariants()} !rounded-full`} href="/contact" >Hire Now</Link>
                            </motion.div>
                        </div>
                    </motion.div>

                {/* Hero Image */}
                <div className="flex justify-center">
                    <Image
                        className="w-full aspect-square object-contain rounded-md select-none pointer-events-none"
                        src="/hero.svg"
                        width={400}
                        height={400}
                        alt="Illustration representing the product's main features"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
