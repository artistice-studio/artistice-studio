"use client"
import FadeUp from "@/components/animaitons/FadeUp";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/datas/index";
import Image from "next/image";
import { useState } from "react";

const listNo=2
export default function Includes() {
    const [displayList, setDisplayList] = useState(services[listNo].lists[0].images);

    const updateDisplayList = (title) => {
        setDisplayList(services[listNo].lists.filter(item => item.title === title)[0].images)
    }

    return (
        <section>
            <div className="section-wrapper">
                <div className="mx-auto w-full md:w-4/5  flex flex-col sm:flex-row sm:justify-between sm:items-center gap-base">
                    {services[listNo].lists.map((item, i) => (
                        <FadeUp
                            transition={{
                                type: "spring",
                                delay: i * 0.3
                            }} key={item.title + "VideoEditing"}
                        >
                            <Button variant="secondary" onClick={() => updateDisplayList(item.title)}>
                                {item.title}
                            </Button>
                        </FadeUp>
                    ))}
                </div>

                <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-3">
                    {displayList.map((item, i) => (
                        <Image
                            className="aspect-square object-cover rounded-md"
                            src={item}
                            width={400}
                            height={400}
                            alt={item}
                            key={item + "VideoEditing"}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
