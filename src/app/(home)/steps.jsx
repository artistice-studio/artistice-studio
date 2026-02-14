import TextAnimation from "@/components/animations/text-animation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
const stepsData = [
  {
    stepNumber: 1,
    title: "Get in Touch",
    description:
      "Reach out via call or message. Share your brand details, goals, and current challenges.",
  },
  {
    stepNumber: 2,
    title: "Strategy & Discussion",
    description:
      "We meet to define content direction, branding style, posting plan, and growth strategy tailored to your business.",
  },
  {
    stepNumber: 3,
    title: "Execution & Growth",
    description:
      "From content creation and editing to posting and optimization — everything is handled professionally while you focus on your business.",
  },
];

export default function Steps() {
  return (
    <section
      className="relative bg-background"
      aria-labelledby="step-section"
      role="region"
    >
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        {/* Section Heading */}
        <header className="mx-auto max-w-2xl text-center flex flex-col items-center justify-center">
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
            <TextAnimation animation="blurInUp">
              A Simple 3-Step Process to Get You Started Quickly and Easily
            </TextAnimation>
          </h2>
          <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
            <TextAnimation animation="blurInUp" delay={0.5}>
              Follow these easy steps to set up your account and start enjoying my services in no time.
            </TextAnimation>
          </p>
        </header>

        {/* Service Cards */}
        <div
          className="mt-10 md:mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          role="list"
          aria-label="List of services"
        >
          {stepsData.map((item, index) => (
            <article
              className="p-4 bg-card rounded-md"
              key={item.title + index + "Card" + "StepOne"}
              itemScope
              itemType="https://schema.org/HowToStep"
              tabIndex={0}
              role="listitem"
              aria-labelledby={`step-title-${index}`}
            >
              {/* Step Number */}
              {/* <div
                className="text-muted-foreground font-bold"
                aria-hidden="true"
              >
                Step {item.stepNumber}
              </div> */}

              <div className="flex gap-2 items-center">
                {[...Array(3)].map((_, i) => (
                  <Sparkles
                    key={i + "Steps"}
                    className={cn(
                      "size-4",
                      index >= i && "fill-red-700 stroke-red-700"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Step Content */}
              <header className="mt-4 flex-1">
                <h3
                  className="text-lg font-semibold line-clamp-2"
                  itemProp="name"
                >
                  <TextAnimation animation="blurInUp">
                    {item.title}
                  </TextAnimation>
                </h3>
                <p
                  className="mt-2 md:mt-3 text-muted-foreground line-clamp-3"
                  itemProp="text"
                >
                  <TextAnimation animation="blurIn" delay={0.3}>
                    {item.description}
                  </TextAnimation>
                </p>
              </header>
            </article>
          ))}
        </div>
      </div>
    </section >
  );
}
