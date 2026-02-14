import { cn } from "@/lib/utils";
import FadeUp from "@/components/animaitons/FadeUp";
import ZoomIn from "../animaitons/ZoomIn";

export default function Hero({ className, heading, children }) {
    return (
        <section className={cn("relative p-4 bg-background", className)}>
            <div className="relative mx-auto container p-4 py-20 md:px-12 lg:px-16 rounded-2xl border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-red-500 to-orange-200/5"></div>
                <ZoomIn>
                    {heading && <h1 className="h1 text-left w-fit">{heading}</h1>}
                    {children}
                </ZoomIn>
            </div>
        </section>
    )
}