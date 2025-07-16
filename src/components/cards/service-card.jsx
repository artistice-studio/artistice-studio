import { ArrowRight, CheckCheck } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ServiceCard({ data: { icon, title, description, lists, link } }) {
    return (
        <div className="relative p-4 h-full w-full hover:bg-gradient-to-bl from-background to-secondary/55 border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
            <div className="text-muted-foreground">{icon}</div>
            <div className="my-base text-lg font-semibold">{title}</div>

            <ul className="text-muted-foreground">
                {lists.map((item, i) => (
                    <li className="flex gap-2 items-center text-muted-foreground group leading-8" key={item.title + "ServiceList"}>
                        <CheckCheck className="size-5 shrink-0 group-hover:text-primary" /> <div>{item.title}</div>
                    </li>
                ))}
            </ul>
            {/* <Link className={`${buttonVariants({ variant: "outline" })} mt-base hover:bg-primary hover:text-black group`} href={link}>View More  <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" /></Link> */}
        </div >
    )
}
