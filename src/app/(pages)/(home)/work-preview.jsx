"use client"

import { useState } from "react"
import Image from "next/image"
import SparkleText from "@/components/helper/SparkleText"
import FadeUp from "@/components/animaitons/FadeUp"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const galleryData = Array.from({ length: 64 }).map((_, index) => ({
    imageSrc: `/images/works/${index + 1}.webp`,
    imageAlt: `Work Image ${index + 1}`,
}))

export default function WorkPreview() {
    const [visibleCount, setVisibleCount] = useState(8)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleImageClick = (index) => {
        setSelectedIndex(index)
        setIsOpen(true)
    }

    const handleLoadMore = () => {
        setVisibleCount((prev) =>
            Math.min(prev + 8, galleryData.length)
        )
    }

    const handleViewLess = () => {
        setVisibleCount(8)
    }

    const isAllVisible = visibleCount >= galleryData.length

    return (
        <section id="works">
            <div className="section-wrapper">
                <FadeUp>
                    <h2>
                        <SparkleText text="Works" /> I&apos;ve done
                    </h2>
                </FadeUp>

                {/* Gallery Grid */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryData.slice(0, visibleCount).map((item, index) => (
                        <div
                            key={item.imageAlt + index}
                            className="cursor-pointer"
                            onClick={() => handleImageClick(index)}
                        >
                            <Image
                                className="w-full aspect-square object-cover select-none rounded-md"
                                src={item.imageSrc}
                                width={400}
                                height={400}
                                alt={item.imageAlt}
                            />
                        </div>
                    ))}
                </div>

                {/* Load More / View Less Button */}
                <div className="mt-8 flex justify-center">
                    {!isAllVisible ? (
                        <Button variant="outline" onClick={handleLoadMore}>
                            Load More
                        </Button>
                    ) : (
                        <Button variant="outline" onClick={handleViewLess}>
                            View Less
                        </Button>
                    )}
                </div>
            </div>

            {/* Modal with Carousel */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-sm max-h-[70dvh] bg-background overflow-hidden">
                    <Carousel
                        className="bg-secondary max-w-[20rem] aspect-square"
                        opts={{
                            align: "center",
                            loop: true,
                            startIndex: selectedIndex,
                        }}
                    >
                        <CarouselContent>
                            {galleryData.map((item, index) => (
                                <CarouselItem key={index} className="w-full flex justify-center">
                                    <Image
                                        className="aspect-square object-contain rounded-md select-none pointer-events-none"
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        width={800}
                                        height={800}
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
