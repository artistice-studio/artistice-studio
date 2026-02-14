import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function PurposeImageCard({ imageUrl }) {
    return (
        <div className="relative w-full aspect-square overflow-hidden rounded-md">
            <Dialog>
                <DialogTrigger className="size-full">
                    <Image
                        className="relative w-full aspect-square object-cover object-top rounded"
                        width={150}
                        height={150}
                        src={imageUrl}
                        alt="Project Image"
                    />
                </DialogTrigger>
                <DialogContent className="p-0">
                    <Image
                        className="relative w-full aspect-square object-cover object-top rounded"
                        width={300}
                        height={300}
                        src={imageUrl}
                        alt="Project Image"
                    />

                </DialogContent>
            </Dialog>
        </div>
    )
}
