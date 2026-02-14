import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const servicesData = [
  {
    serviceHref: "#",
    serviceImageSrc: "/image.svg",
    title: "Custom Website Design",
  },
  {
    serviceHref: "#",
    serviceImageSrc: "/image.svg",
    title: "Full-Stack Development",
  },
  {
    serviceHref: "#",
    serviceImageSrc: "/image.svg",
    title: "SEO Optimization",
  },
  {
    serviceHref: "#",
    serviceImageSrc: "/image.svg",
    title: "Custom Website Design",
  },
  {
    serviceHref: "#",
    serviceImageSrc: "/image.svg",
    title: "Full-Stack Development",
  }
];

export default function Testimonial() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="service-section"
      role="region"
    >
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        {/* Section Heading */}
        <header className="max-w-2xl">
          <Badge variant="secondary">Services</Badge>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Short heading goes here
          </h2>
          <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        {/* Service Cards */}
        <div
          className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          role="list"
          aria-label="List of services"
        >
          {servicesData.map((item, index) => (
            <article
              className="relative size-full aspect-6/10 p-4 bg-card border rounded-md overflow-hidden"
              key={item.title + index + "Card" + "ServiceCSix"}
              itemScope
              itemType="https://schema.org/Service"
              tabIndex={0}
              role="listitem"
              aria-labelledby={`service-title-${index}`}
            >
              <Link
                href={item.serviceHref}
                aria-label={`View more about ${item.title}`}
              >
                <figure
                  className="absolute inset-0"
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <Image
                    className="size-full object-cover select-none pointer-events-none"
                    src={item.serviceImageSrc}
                    width={48}
                    height={48}
                    alt={`Cover image for ${item.title}`}
                    unoptimized
                  />
                  <meta itemProp="url" content={item.serviceImageSrc} />
                </figure>

                <header className="relative size-full flex flex-col-reverse">
                  <h3
                    id={`service-title-${index}`}
                    className="font-semibold line-clamp-2"
                    itemProp="name"
                  >
                    {item.title}
                  </h3>
                </header>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
