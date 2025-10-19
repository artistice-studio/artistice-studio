"use client"
import SparkleText from "@/components/helper/SparkleText";
import { IQuestion } from "@/components/other/svgs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/lib/datas/index';
import FadeUp from "@/components/animaitons/FadeUp";
import FadeLeft from "@/components/animaitons/FadeLeft";

export default function FAQ() {
    return (
        <section className="relative p-4 bg-background">
            <div className="mx-auto container p-4 md:px-12 lg:px-16 bg-secondary rounded-2xl">
                <FadeUp>
                    <h2 className="mb-2 mt-6 h2"><SparkleText text="FAQs" /></h2>
                </FadeUp>
                <FadeUp>
                    <p className="mx-auto md:text-center md:w-2/3">Your Questions, Answered.</p>
                </FadeUp>

                <div className="mt-12 w-full grid md:grid-cols-2 gap-12">
                    <Accordion className="space-y-4" type="single" defaultValue="faq1" collapsible>
                        {faqs.map(item => (
                            <FadeUp key={item.id + "HomeFAQ"}>
                                <AccordionItem className="px-4 bg-background rounded-md" value={item.id}>
                                    <AccordionTrigger className="text-lg cursor-pointer">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.answerJSX ? item.answerJSX : item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeUp>
                        ))}
                    </Accordion>

                    <div className="relative w-full">
                        <FadeUp>
                            <IQuestion className="sticky top-12 w-full text-muted-foreground/30 dark:text-muted-foreground/50" />
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
