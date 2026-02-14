import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ data: { icon, title, description, lists, link }, i }) {
    return (
        <Link className="relative p-4 block hover:px-8 h-full w-full bg-background rounded-lg transition-all group cursor-pointer" href={link}>
            <div className="flex justify-end">
                <div className="text-muted-foreground">{icon}</div>
            </div>

            <div className="my-4 text-2xl md:text-3xl font-semibold">{title}</div>

            <ul className="text-muted-foreground">
                {lists.map((item, i) => (
                    <li className="flex gap-2 items-center text-muted-foreground group leading-8" key={item.title + "ServiceList"}>
                        <CheckCheck className="size-5 shrink-0 group-hover:text-primary" /> <div>{item.title}</div>
                    </li>
                ))}
            </ul>
            {/* <Link className={`${buttonVariants({ variant: "outline" })} mt-4 hover:bg-primary hover:text-black group`} href={link}>View More  <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" /></Link> */}
        </Link>
    )
}
