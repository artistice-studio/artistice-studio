import Image from 'next/image';
import React from 'react'

const testimonialsData = [
    {
        imgSrc: "/images/icon/photo-shoot.svg",
        name: "Photo Shoot",
        description: "Product, Event, Custom and more.",
    },
    {
        imgSrc: "/images/icon/promotional-videos.svg",
        name: "Promotional Videos",
        description: "Motion, Product, Marketing.",
    },
    {
        imgSrc: "/images/icon/editing-services.svg",
        name: "Editing Services",
        description: "Motion graphic, Social Media, Marketing.",
    },
];

export default function ServiceShort() {
    return (
        <section
            className="relative p-4 bg-background"
            role="region"
            aria-label="Hero section for product introduction"
        >
            <div className="mx-auto container ">
                <div
                    className="grid gap-6 md:grid-cols-3"
                    role="list"
                    aria-label="Customer testimonials"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <figure
                            className="relative bg-secondary p-4 flex items-center gap-4 rounded-xl"
                            key={testimonial.name + "TestimonialCardOne"}
                            role="listitem"
                            aria-labelledby={`testimonial-${index}-name`}
                            itemScope
                            itemType="https://schema.org/Review"
                        >
                            <div className="size-12 md:size-16 overflow-hidden">
                                <Image
                                    className="size-full object-cover select-none pointer-events-none"
                                    src={testimonial.imgSrc}
                                    width={48}
                                    height={48}
                                    alt={`${testimonial.name} - ${testimonial.name} logo`}
                                />
                            </div>

                            <figcaption
                                className="text-sm flex-1"
                                itemProp="author"
                                itemScope
                                itemType="https://schema.org/Person"
                            >
                                <div
                                    className="text-lg font-medium text-balance"
                                    itemProp="reviewBody"
                                >
                                    {testimonial.name}
                                </div>
                                <span className='text-muted-foreground'>{testimonial.description}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
