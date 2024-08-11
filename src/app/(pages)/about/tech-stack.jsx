"use client"
import FadeUp from "@/components/animaitons/FadeUp";
import TechCard from "@/components/cards/TechCard";
import SparkleText from "@/components/helper/SparkleText";
import { ICoralDraw, IExpress, IKineMaster, ILightroom, INext, IPhotoshop, IShadcn } from "@/components/ui/svgs";
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
    <section className="bg-section-pattern-2">
      <div className="section-wrapper">
        <FadeUp>
          <h2 className="mb-2">Go To <SparkleText text="Tech Stack" /></h2>
        </FadeUp>

        <div className="mt-block mx-auto w-fit">
          <div className="p-2 flex gap-4 flex-center flex-wrap w-fit">
            {techStackData.map((item, i) => (
              <FadeUp
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
