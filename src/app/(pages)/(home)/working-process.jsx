"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Lottie from "lottie-react";
import photoShoot from "@/components/lottie/photo-shoot.json";
import editing from "@/components/lottie/editing.json";
import posting from "@/components/lottie/posting.json";

// ✅ Imported working data
export const working = [
  {
    id: "1",
    title: "Photo/Video Shoot",
    description:
      "Capture your brand's essence with high-quality photography and videography, tailored to showcase your products or services in the best light.",
    lottieSrc: photoShoot,
  },
  {
    id: "2",
    title: "Designing & Editing",
    description:
      "Enhance your visuals with professional design and editing services, ensuring your content is polished, engaging, and aligned with your brand identity.",
    lottieSrc: editing,
  },
  {
    id: "3",
    title: "Posting",
    description:
      "Maximize your reach with strategic posting on social media platforms, tailored to engage your audience and amplify your brand's message.",
    lottieSrc: posting,
  },
];

export default function WorkingProcess() {
  const [lottieSrc, setLottieSrc] = useState(working[0].lottieSrc);

  return (
    <section
      className="relative p-4 bg-background"
      aria-label="Working process section"
      role="region"
    >
      <div className="mx-auto container p-4 md:px-12 lg:px-16 bg-secondary rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
        {/* Text Content */}
        <div>
          <header className="space-y-8">
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              How I <span><SparkleText text="Work" /></span>
            </h2>
            {working.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "p-4 cursor-pointer transition-all rounded-md",
                  lottieSrc === step.lottieSrc && "bg-foreground text-background transition-all"
                )}
                onClick={() => setLottieSrc(step.lottieSrc)}
              >
                <h3 className="text-xl md:text-lg lg:text-xl font-semibold tracking-tight text-balance">
                  {step.title}
                </h3>
                <p className={cn("mt-2 text-muted-foreground",lottieSrc === step.lottieSrc && "text-muted/70" )}>
                  {step.description}
                </p>
              </div>
            ))}
          </header>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              className="group rounded-full"
              variant="outline"
              aria-label="Learn more"
            >
              Learn more
              <ArrowRight
                className="group-hover:ml-2 transition-all"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>

        {/* Feature Image */}
        <div className="aspect-square flex items-center justify-center">
          <Lottie animationData={lottieSrc} />
        </div>
      </div>
    </section>
  );
}
