import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import TextAnimation from "@/components/animations/text-animation";

const servicesData = [
  {
    serviceHref: "#social-media-management",
    serviceImageSrc: "/images/services/social-media-management.webp",
    title: "Social Media Management",
    description: (
      <>
        <p>
          <TextAnimation animation="blurIn" delay={0.3}>
            Complete Instagram management to grow your brand and engagement.
          </TextAnimation>
        </p>
        <p><i>
          <TextAnimation animation="blurIn" delay={0.5}>
            Content planning, posting, and audience engagement handled for you.
          </TextAnimation>
        </i></p>
        <p><b>
          <TextAnimation animation="blurIn" delay={0.7}>
            Strategy-driven growth focused on visibility and conversions.
          </TextAnimation>
        </b></p>
      </>
    ),
    tags: ["Instagram", "Audience Engagement", "Growth Strategy"],
  },
  {
    serviceHref: "#photo-video-editing",
    serviceImageSrc: "/images/services/photo-video-editing.webp",
    title: "Photo & Video Editing",
    description: (
      <>
        <p>
          <TextAnimation animation="blurIn" delay={0.3}>
            High-quality edits tailored for social media platforms.
          </TextAnimation>
        </p>
        <p><i>
          <TextAnimation animation="blurIn" delay={0.5}>
            Reels editing, color grading, and product retouching.
          </TextAnimation>
        </i></p>
        <p><b>
          <TextAnimation animation="blurIn" delay={0.7}>
            Short-form content optimized for reach and engagement.
          </TextAnimation>
        </b></p>
      </>
    ),
    tags: ["Reels Editing", "Color Grading", "Product Retouching", "Short-form Content"],
  },
  {
    serviceHref: "#branding",
    serviceImageSrc: "/images/services/branding.webp",
    title: "Branding & Visual Identity",
    description: (
      <>
        <p>
          <TextAnimation animation="blurIn" delay={0.3}>
            Build a cohesive and recognizable brand presence online.
          </TextAnimation>
        </p>
        <p><i>
          <TextAnimation animation="blurIn" delay={0.5}>
            Feed aesthetics, visual consistency, and content style guides.
          </TextAnimation>
        </i></p>
        <p><b>
          <TextAnimation animation="blurIn" delay={0.7}>
            Strategic branding designed to attract your ideal audience.
          </TextAnimation>
        </b></p>
      </>
    ),
    tags: ["Branding", "Visual Identity", "Feed Aesthetics", "Logo Direction"],
  },
  {
    serviceHref: "#photoshoot",
    serviceImageSrc: "/images/services/photoshoot.webp",
    title: "Product & Model Photoshoots",
    description: (
      <>
        <p>
          <TextAnimation animation="blurIn" delay={0.3}>
            Professional photography for products and personal brands.
          </TextAnimation>
        </p>
        <p><i>
          <TextAnimation animation="blurIn" delay={0.5}>
            Studio and lifestyle shoots tailored to your niche.
          </TextAnimation>
        </i></p>
        <p><b>
          <TextAnimation animation="blurIn" delay={0.7}>
            High-converting visuals for ads, websites, and social media.
          </TextAnimation>
        </b></p>
      </>
    ),
    tags: ["Product Photography", "Model Shoots", "Lifestyle Photography", "Content Creation"],
  },
];


export default function Service() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="service-section"
      id="services"
      role="region"
    >
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        {/* Section Heading */}
        <header className="mx-auto max-w-2xl text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <TextAnimation animation="blurInUp">
              Solutions That Take Your Business to the Next Level
            </TextAnimation>
          </h2>
          <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
            <TextAnimation animation="blurInUp" delay={0.5}>
              Designed to help you grow your online presence, engage your audience, and drive real results for your business.
            </TextAnimation>
          </p>
        </header>

        {/* Service Cards */}
        <div
          className="mt-10 md:mt-16 grid gap-10 md:gap-12 sm:grid-cols-2 md:grid-cols-1"
          role="list"
          aria-label="List of services"
        >
          {servicesData.map((item, index) => (
            <article
              className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-3 md:gap-6"
              key={item.title + index + "Card" + "ServiceAOne"}
              itemScope
              itemType="https://schema.org/Service"
              tabIndex={0}
              role="listitem"
              aria-labelledby={`service-title-${index}`}
            >
              <figure
                className={cn(index % 2 && "md:order-1")}
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <Image
                  className="w-full aspect-video object-cover select-none pointer-events-none rounded-md"
                  src={item.serviceImageSrc}
                  width={400}
                  height={225}
                  alt={`Cover image for ${item.title}`}
                  unoptimized
                />
                <meta itemProp="url" content={item.serviceImageSrc} />
              </figure>

              <header>
                <h3
                  id={`service-title-${index}`}
                  className="text-2xl md:text-3xl font-semibold line-clamp-2"
                  itemProp="name"
                >
                  <TextAnimation animation="blurInUp">
                    {item.title}
                  </TextAnimation>
                </h3>
                <div
                  className="mt-4 text-muted-foreground text-sm md:text-base space-y-1 line-clamp-6 md:line-clamp-none"
                  itemProp="description"
                >
                  {item.description}
                </div>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {item.tags.map((item, index) => (
                    <Badge className="rounded-sm" key={item + index + "Tag" + "ServiceAOne"} variant="outline" >
                      <TextAnimation animation="scaleUp" delay={1}>
                        {item}
                      </TextAnimation>
                    </Badge>
                  ))}
                </div>

                {/* <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "mt-2 w-fit group/button"
                  )}
                  href={item.serviceHref}
                  aria-label={`View more about ${item.title}`}
                >
                  View More
                  <ArrowRight className="ml-0 group-hover/button:ml-2 transition-all" />
                </Link> */}
              </header>
            </article>
          ))}
        </div>
      </div>
    </section >
  );
}
