import FadeUp from "@/components/animaitons/FadeUp"
import SparkleText from "@/components/helper/SparkleText"
import { working } from "@/lib/datas"

export default function WorkingProcess() {
  return (
    <section id="service">
      <div className="section-wrapper">
        <FadeUp>
          <h2> How I <span><SparkleText text="Work" /></span></h2>
        </FadeUp>
        <div className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {working.map((item, i) => {
            return (
              <FadeUp
                transition={{
                  type: "spring",
                  delay: 0.3 * i
                }}
                key={i + "WorkingProcessCard"} >
                {/* <ServiceCard data={item} /> */}
                <div className="p-base bg-background rounded-md border overflow-hidden">
                  <div className="text-center flex-center flex-col">
                    <div className="text-primary text-3xl font-bold"> {item.id} </div>
                    <div className="text-xl">{item.title}</div>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
