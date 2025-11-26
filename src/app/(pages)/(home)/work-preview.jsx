"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import SparkleText from "@/components/helper/SparkleText"
import FadeUp from "@/components/animaitons/FadeUp"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { gallery } from "@/lib/datas/index" // <-- your new structure

export default function WorkPreview() {
    const [activeCategory, setActiveCategory] = useState(gallery[0].slug)
    const [visibleCount, setVisibleCount] = useState(8)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Get the selected category's images
    const selectedImages = useMemo(() => {
        return gallery.find((cat) => cat.slug === activeCategory)?.images || []
    }, [activeCategory])

    const handleImageClick = (index) => {
        setSelectedIndex(index)
        setIsOpen(true)
    }

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 8, selectedImages.length))
    }

    const handleViewLess = () => {
        setVisibleCount(8)
    }

    const isAllVisible = visibleCount >= selectedImages.length

    // Reset visibleCount when switching category
    const handleCategoryChange = (slug) => {
        setActiveCategory(slug)
        setVisibleCount(8)
    }

    return (
        <section className="relative p-4 bg-background" id="works">
            <div className="mx-auto container p-4 md:px-12 lg:px-16 bg-secondary rounded-2xl">
                <FadeUp>
                    <h2 className="mt-6 h2">
                        <SparkleText text="Works" /> I&apos;ve done
                    </h2>
                </FadeUp>

                {/* ---------------- Category Filter Buttons ---------------- */}
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                    {gallery.map((cat) => (
                        <Button
                            key={cat.slug}
                            variant={activeCategory === cat.slug ? "default" : "outline"}
                            onClick={() => handleCategoryChange(cat.slug)}
                        >
                            {cat.label}
                        </Button>
                    ))}
                </div>

                {/* ---------------- Gallery Grid ---------------- */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {selectedImages.slice(0, visibleCount).map((src, index) => (
                        <div key={src + index} className="cursor-pointer" onClick={() => handleImageClick(index)}>
                            <Image
                                className="w-full aspect-square object-cover select-none rounded-md"
                                src={src}
                                width={400}
                                height={400}
                                alt={`Work Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* ---------------- Load More / View Less ---------------- */}
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

            {/* ---------------- Modal Carousel ---------------- */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-sm max-h-[70vh] w-auto aspect-square bg-background overflow-hidden">
                    <Carousel
                        className="bg-secondary grid grid-cols-1 rounded-md aspect-square border"
                        opts={{
                            align: "center",
                            loop: true,
                            startIndex: selectedIndex,
                        }}
                    >
                        <CarouselContent>
                            {selectedImages.map((src, index) => (
                                <CarouselItem key={index} className="w-full flex justify-center">
                                    <Image
                                        className="aspect-square object-contain rounded-md select-none pointer-events-none"
                                        src={src}
                                        width={800}
                                        height={800}
                                        alt={`Work Image ${index + 1}`}
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
