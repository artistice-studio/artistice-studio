"use client"
import FadeUp from "@/components/animaitons/FadeUp";
import TechCard from "@/components/cards/TechCard";
import SparkleText from "@/components/helper/SparkleText";
import { ICoralDraw, IExpress, IKineMaster, ILightroom, INext, IPhotoshop, IShadcn } from "@/components/other/svgs";
import { motion } from "framer-motion";

const techStackData = [
  {
    icon: <IKineMaster className="w-fit h-fit text-foreground" />,
    label: "Kine Master"
  },
  {
    icon: <IPhotoshop className="w-fit h-fit text-foreground" />,
    label: "Photoshop"
  },
  {
    icon: <ILightroom className="w-fit h-fit text-foreground" />,
    label: "Lightroom"
  },
  // {
  //   icon: <ICoralDraw className="w-fit h-fit text-foreground" />,
  //   label: "Coral Draw"
  // },
]

export default function TechStack() {
  return (
    <section className="relative p-4 bg-background">
      <div className="relative mx-auto container bg-secondary p-4 py-20 md:px-12 lg:px-16 rounded-2xl overflow-hidden">
        {/* <div className="absolute inset-0 bg-section-pattern"></div> */}
        <FadeUp>
          <h2 className="h2">
            <SparkleText text="Tools" /><span className="!text-foreground"> I use</span>
          </h2>
        </FadeUp>

        <div className="mt-8 mx-auto w-fit">
          <div className="p-2 flex gap-4 flex-center flex-wrap w-fit">
            {techStackData.map((item, i) => (
              <FadeUp
                className="shrink-0"
                transition={{
                  type: "spring",
                  delay: i * 0.3
                }}
                key={item + "TechStack"}>
                <TechCard data={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}
