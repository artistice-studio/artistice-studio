import Link from "next/link";
import { Facebook, Github, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/datas/metaDatas";
import { Ilogo } from "@/components/other/svgs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative p-4 bg-background">
      <div className="mx-auto container p-4 py-6 md:px-12 lg:px-16 bg-foreground/95 text-background rounded-2xl">
        {/* <Link className="flex-center" href="/">
          <Ilogo className="size-16 w-fit" />
          <span className="sr-only">webdevsalmann</span>
        </Link>

        <div className="my-4 flex-center flex gap-6">
          <Link href="https://www.instagram.com/webdevsalmann/">
            <Instagram className="w-8 h-8 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Visit my Instagram</span>
          </Link>

          <Link href="https://github.com/webdevsalmann/">
            <Github className="w-8 h-8 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Visit my Facebook</span>
          </Link>
        </div> */}
        <Link href="#" className="mx-auto w-fit flex gap-2 justify-self-start" aria-label="Go to homepage">
          <Ilogo className="h-12 w-fit text-primary" />
          <span className='sr-only'>{siteConfig.name}</span>
        </Link>

        <div className="mt-6 pb-4 w-full flex gap-4  justify-center items-center">
          <Link className="hover:text-primary" href="https://www.facebook.com/sanjeet.roy.39982631/" target="_blank">
            <Facebook />
          </Link>
          <Link className="hover:text-primary" href="https://www.instagram.com/sanjeet_kumar_patro/" target="_blank">
            <Instagram />
          </Link>
        </div>


        <div className="my-4 flex flex-col gap-4 justify-center items-center md:flex-row">
          <Link className="hover:text-primary" href="/about">About</Link>
          <Link className="hover:text-primary" href="/service">Service</Link>
          <Link className="hover:text-primary" href="/contact">Contact Me</Link>
        </div>

        <div className="pt-4">
          <p className="text-muted-foreground text-sm text-center">
            Copyright &copy; {currentYear} {siteConfig.name} / <Link className="hover:underline" href="/privacy-policy"> privacy-policy</Link> / Developed by <Link className="hover:underline" href="https://mallickwebstudio.com/"> mallickwebstudio</Link> 💖
          </p>
        </div>
      </div>
    </footer>
  )
}
