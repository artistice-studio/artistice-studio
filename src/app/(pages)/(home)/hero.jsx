"use client"
import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Image from "next/image";
import Link from "next/link";
import ScrollMouse from "@/components/ui/ScrollMouse";
import { motion } from "framer-motion";
import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeUp from "@/components/animaitons/FadeUp";

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


export default function Hero() {
    return (
        <section>
            <div className="section-wrapper">

                <div className="grid gap-8 md:grid-cols-5">
                    <motion.div className="md:col-span-3 flex-center"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <div>
                            <motion.div variants={item} className="text-2xl capitalize self-start">
                                I&apos;m Sanjeet Kumar Patro
                            </motion.div>
                            <motion.h1 variants={item} className="my-base leading-[55px] self-start">
                                <span className="clr-p"><SparkleText text="Photographer" /></span> <br />
                                <span className="clr-p"><SparkleText text="Video Editor" /></span> <br />
                                <span className="clr-p"><SparkleText text="Graphic-" /></span>
                                <span className="clr-p"><SparkleText text=" Designer" /></span> <br />
                            </motion.h1>

                            <motion.p variants={item} className="md:w-4/5 self-start">
                                We help you <span className="font-bold"> shine online. </span>  Whether you need  <span className="font-bold"> eye-catching photos, professional graphic design, or engaging video content, </span>  we&apos;ve got you covered.
                            </motion.p>

                            <motion.div variants={item} className="mt-base self-start">
                                <Link className={`${buttonVariants()}`} href="/contact" >Hire Now</Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <FadeUp className="relative md:col-span-2">
                        <div className="hero-blob" />
                        <div className="relative w-full bg-contain flex-center rounded overflow-hidden" >
                            <Image
                                className="relative object-contain object-center rounded"
                                width={800}
                                height={800}
                                src="/hero.svg"
                                alt="hero image by manypixel"
                                priority
                            />
                        </div>
                    </FadeUp>
                </div>
                <ScrollMouse />
            </div>
        </section >
    )
}
