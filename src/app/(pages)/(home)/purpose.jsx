"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import {
  ArrowRight,
  BarChart4,
  Layers,
  Sparkles,
} from "lucide-react"

import FadeUp from "@/components/animaitons/FadeUp"
import FadeLeft from "@/components/animaitons/FadeLeft"
import SparkleText from "@/components/helper/SparkleText"
import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const galleryData = [
  { imageSrc: "/images/works/1.webp", imageAlt: "Image 1" },
  { imageSrc: "/images/works/6.webp", imageAlt: "Image 2" },
  { imageSrc: "/images/works/9.webp", imageAlt: "Image 3" },
  { imageSrc: "/images/works/10.webp", imageAlt: "Image 4" },
  { imageSrc: "/images/works/21.webp", imageAlt: "Image 5" },
  { imageSrc: "/images/works/24.webp", imageAlt: "Image 6" },
  { imageSrc: "/images/works/25.webp", imageAlt: "Image 7" },
  { imageSrc: "/images/works/30.webp", imageAlt: "Image 8" },
  { imageSrc: "/images/works/36.webp", imageAlt: "Image 9" },
]

export default function Purpose() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleImageClick = (index) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  return (
    <section className="bg-section-secondary">
      <div className="relative section-wrapper grid md:grid-cols-2 gap-block">
        {/* Image Grid */}
        <FadeUp>
          <div className="md:sticky top-block w-full h-fit grid grid-cols-3 gap-base">
            {galleryData.map((item, index) => (
              <div
                key={item.imageSrc}
                className="cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={400}
                  height={400}
                  className="aspect-square object-cover rounded-md select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Text Content */}
        <div>
          <FadeUp>
            <h2 className="text-2xl md:text-3xl md:text-left">
              Transform Your Brand with <SparkleText text="Stunning Visuals" /> Stand Out and Engage Your Audience.
            </h2>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="mt-4">
                Many businesses face the challenge of low engagement and visibility on social media, often due to a lack of high-quality visual content and expertise in creating it.
              </p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4">
                Without professional photos, graphics, and videos, your posts can get lost in the crowded online space, making it hard for your brand to stand out and attract attention.
              </p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4 italic">
                Artistice-Studio provides top-notch photoshoots, graphic design, and video editing services tailored to enhance your social media presence, ensuring your content captivates and engages your audience.
              </p>
            </FadeUp>
          </div>

          <div className="mt-base">
            <FadeLeft>
              <div className="flex gap-4 items-center leading-10">
                <Sparkles className="inline size-base text-primary shrink-0" />
                <div>High Quality Assets</div>
              </div>
            </FadeLeft>

            <FadeLeft>
              <div className="flex gap-4 items-center leading-10">
                <Layers className="inline size-base text-primary shrink-0" />
                <div>More Engagement</div>
              </div>
            </FadeLeft>

            <FadeLeft>
              <div className="flex gap-4 items-center leading-10">
                <BarChart4 className="inline size-base text-primary shrink-0" />
                <div>More Conversion</div>
              </div>
            </FadeLeft>
          </div>

          <div className="mt-base">
            <FadeLeft>
              <Link
                className={clsx(buttonVariants({ variant: "outline" }), "group hover:bg-primary hover:text-black")}
                href="/about"
              >
                About Myself <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" />
              </Link>
            </FadeLeft>
          </div>
        </div>
      </div>

      {/* Modal with Carousel */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-sm max-h-[70dvh] bg-background">
          <Carousel
            className="bg-secondary w-full aspect-square"
            opts={{
              align: "center",
              loop: true,
              startIndex: selectedIndex,
            }}
          >
            <CarouselContent>
              {galleryData.map((item, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Image
                    className="aspect-square object-contain rounded-md select-none pointer-events-none"
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={600}
                    height={600}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 cursor-pointer" />
            <CarouselNext className="-right-4 cursor-pointer" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  )
}
