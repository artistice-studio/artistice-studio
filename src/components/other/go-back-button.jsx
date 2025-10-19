"use client"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function GoBackButton() {
    const router = useRouter()
    return (
        <Button onClick={() => router.back()}>Go Back</Button>
    )
}
