import FadeUp from "@/components/animaitons/FadeUp";
import PricingCard from "@/components/cards/pricing-card";
import SparkleText from "@/components/helper/SparkleText";
import { benefits, pricing } from "@/lib/datas/index";
import { CheckCheck } from "lucide-react";

export default function Pricing() {
  return (
    <section className="relative p-4 bg-background">
      <div className="mx-auto container p-4 md:px-12 lg:px-16 bg-secondary rounded-2xl">
        <div className="mx-auto">
          <FadeUp>
            <h2 className="h2 mt-6">Quality & Affordable <SparkleText text="Pricing" /></h2>
          </FadeUp>

          <div className="mt-12 p-4 w-full bg-background rounded-md overflow-hidden border">
            <h3>I will do</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {benefits.map((item) => (
                <li className="flex gap-4 group" key={item + "Benefits"}>
                  <div className="mt-0.5 p-0.5 bg-secondary rounded-full border">
                    <CheckCheck className="size-4 shrink-0 group-hover:text-primary" />
                  </div>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-6 mb-sm">At Price</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {pricing.map((item, i) => (
              <FadeUp
                transition={{
                  type: "spring",
                  delay: 0.3 * i
                }}
                key={item.price + "HomePricingCard"}>
                <PricingCard data={item} />
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
