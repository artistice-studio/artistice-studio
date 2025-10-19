import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function PricingCard({ data: { price, month } }) {
    return (
        <div className="p-4 bg-background rounded-md border flex-between overflow-hidden">
            <div className="text-center">
                <span className="text-primary text-3xl font-bold">{price} </span><span>/{month}m</span>
            </div>

            <Link className={buttonVariants({ variant: "outline" })} href="/contact">Checkout</Link>
        </div>
    )
}
