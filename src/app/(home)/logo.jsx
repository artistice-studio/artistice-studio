import TextAnimation from "@/components/animations/text-animation";
import { Marquee } from "@/components/other/marquee";
import Image from "next/image";
import Link from "next/link";

const logoList = [
  {
    href: "#",
    src: "/images/authority/shree-vallabhacharya.png",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/images/authority/ved-college.png",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/images/authority/vjkm.png",
    alt: "Logo",
  },
  // {
  //   href: "#",
  //   src: "/images/authority/kids-clothing.png",
  //   alt: "Logo",
  // },
  {
    href: "#",
    src: "/images/authority/jeetu.png",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/images/authority/brand-clothes.png",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/images/authority/brand-clothing.png",
    alt: "Logo",
  },
]

export default function Logo() {
  return (
    <section
      className="relative bg-secondary"
      aria-label="Logo section"
      role="region"
    >
      <div className="mx-auto container p-6 md:px-16 lg:px-20 grid md:grid-cols-[0.4fr_1fr] md:items-center gap-12">
        <h2 className="md:text-xl font-bold text-center md:text-left">
          <TextAnimation animation="slideRight" by="character">
            Trusted by Vadodra&apos;s Markets
          </TextAnimation>
        </h2>

        <div className="relative overflow-hidden">
          <Marquee pauseOnHover repeat={3}>
            {logoList.map((item, index) => (
              <div
                key={item.src + index}
                className="h-20 aspect-video flex items-center justify-center px-6"
              >
                <Image
                  className="h-full w-auto object-contain select-none pointer-events-none"
                  src={item.src}
                  width={120}
                  height={60}
                  alt={item.alt}
                  unoptimized
                />
              </div>
            ))}
          </Marquee>
          <div className="absolute inset-0 w-1/4 bg-linear-to-r from-secondary to-transparent" />
          <div className="absolute left-auto inset-0 w-1/4 bg-linear-to-r from-transparent to-secondary" />
        </div>
      </div>
    </section>
  );
}
