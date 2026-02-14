import Image from "next/image";
import { Button } from "@/components/ui/button";
import TextAnimation from "@/components/animations/text-animation";

export default function Hero() {
  return (
    <section
      className="-mt-24 relative h-screen bg-background"
      role="region"
      aria-label="Hero section for introduction"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          className='size-full object-cover object-top sm:object-center select-none pointer-events-none'
          src='/images/common/hero2.jpeg'
          fill
          alt='Image Description'
          priority
          unoptimized
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-950/30" aria-hidden="true" />

      <div className="relative h-full mx-auto container px-6 py-12 md:p-16 lg:py-20">
        {/* Text Content */}
        <header className="h-full flex flex-col justify-between">
          <h1 className="mt-12 max-w-lg text-background dark:text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance ">
            <TextAnimation animation="blurInUp">
              I Help Brands Grow Through Powerful Social Media & Visual Content
            </TextAnimation>
          </h1>

          <div className="max-w-sm place-self-end">
            <ul className="mt-3 md:mt-4 text-white dark:text-white flex flex-wrap gap-2">
              <li className="p-1 px-2 md:p-2 w-fit bg-white text-black text-sm md:text-base font-semibold -skew-x-12">
                <TextAnimation animation="slideRight" delay={0.5} by="character">
                  Photo editing
                </TextAnimation>
              </li>
              <li className="p-1 px-2 md:p-2 w-fit bg-white text-black text-sm md:text-base font-semibold -skew-x-12">
                <TextAnimation animation="slideRight" delay={0.7} by="character">
                Photoshoots
                </TextAnimation>
              </li>
              <li className="p-1 px-2 md:p-2 w-fit bg-white text-black text-sm md:text-base font-semibold -skew-x-12">
                <TextAnimation animation="slideRight" delay={0.9} by="character">
                Brand designing
                </TextAnimation>
              </li>
              <li className="p-1 px-2 md:p-2 w-fit bg-white text-black text-sm md:text-base font-semibold -skew-x-12">
                <TextAnimation animation="slideRight" delay={1.1} by="character">
                Video editing
                </TextAnimation>
              </li>
              <li className="p-1 px-2 md:p-2 w-fit bg-white text-black text-sm md:text-base font-semibold -skew-x-12">
                <TextAnimation animation="slideRight" delay={1.3} by="character">
                Social media management
                </TextAnimation>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                className="cursor-pointer"
                variant="default"
                size="lg"
                aria-label="Get started with the service"
              >
                Book a Free Consultation
              </Button>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="lg"
                aria-label="Learn more about the offering"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

