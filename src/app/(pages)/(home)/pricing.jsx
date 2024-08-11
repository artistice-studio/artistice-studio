import FadeUp from "@/components/animaitons/FadeUp";
import PricingCard from "@/components/cards/pricing-card";
import SparkleText from "@/components/helper/SparkleText";
import { benefits, pricing } from "@/lib/datas/index";
import { CheckCheck } from "lucide-react";

export default function Pricing() {
  return (
    <section className="bg-section-pattern-2">
      <div className="section-wrapper">
        <div className="mx-auto">
          <FadeUp>
            <h2>Quality & Affordable <SparkleText text="Pricing" /></h2>
          </FadeUp>

          <div className="mt-block p-base w-full bg-background rounded overflow-hidden border">
            <h3>I will do</h3>
            <ul className="mt-base grid gap-base sm:grid-cols-2 md:grid-cols-3">
              {benefits.map(item => (
                <li className="flex gap-4 group" key={item + "Benefits"}>
                  <CheckCheck className="mt-[2px] size-5 shrink-0 group-hover:text-primary" />
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-lg mb-sm">At Price</h3>
          <div className="grid gap-base md:grid-cols-3">
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
