import SparkleText from "@/components/helper/SparkleText";
import { services } from "@/lib/datas/index";
import FadeUp from "@/components/animaitons/FadeUp";
import ServiceCard from "@/components/cards/service-card";

export default function Service() {
    return (
        <section id="service">
            <div className="section-wrapper">
                <FadeUp>
                    <h2><span className=""><SparkleText text="Services" /></span> I Offer</h2>
                </FadeUp>
                <div className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => {
                        return (
                            <FadeUp
                                transition={{
                                    type: "spring",
                                    delay: 0.3 * i
                                }}
                                key={i + "HomeServiceCard"} >
                                <ServiceCard data={item} />
                            </FadeUp>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}