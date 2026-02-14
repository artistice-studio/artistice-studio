import SparkleText from "@/components/helper/SparkleText";
import { services } from "@/lib/datas/index";
import FadeUp from "@/components/animaitons/FadeUp";
import ServiceCard from "@/components/cards/service-card";

export default function Service() {
    return (
        <section className="relative p-4 bg-background" id="service">
            <div className="mx-auto container p-4 md:px-12 lg:px-16 bg-secondary rounded-2xl">
                <FadeUp>
                    <h2 className="mt-6 h2">
                        <SparkleText text="Services" /> I Offer
                    </h2>
                </FadeUp>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => {
                        return (
                            <FadeUp
                                transition={{
                                    type: "spring",
                                    delay: 0.3 * i
                                }}
                                key={i + "HomeServiceCard"} >
                                <ServiceCard data={item} i={i} />
                            </FadeUp>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}