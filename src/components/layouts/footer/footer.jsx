import Link from "next/link";
import { Ilogo } from "@/components/ui/svgs";
import { Facebook, Github, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/datas/metaDatas";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="section-wrapper">
        {/* <Link className="flex-center" href="/">
          <Ilogo className="size-16 w-fit" />
          <span className="sr-only">webdevsalmann</span>
        </Link>

        <div className="my-base flex-center flex gap-6">
          <Link href="https://www.instagram.com/webdevsalmann/">
            <Instagram className="w-8 h-8 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Visit my Instagram</span>
          </Link>

          <Link href="https://github.com/webdevsalmann/">
            <Github className="w-8 h-8 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Visit my Facebook</span>
          </Link>
        </div> */}

        <div className="pb-base w-full sm:flex-center">
          <div className="flex flex-col sm:flex-row gap-base">
            <Link className="hover:text-primary" href="https://www.facebook.com/sanjeet.roy.39982631/" target="_blank">
              <Facebook />
            </Link>
            <Link className="hover:text-primary" href="https://www.instagram.com/sanjeet_kumar_patro/" target="_blank">
              <Instagram />
            </Link>
          </div>
        </div>


        <div className="py-base grid gap-base  w-full sm:flex-center">
          <div className="flex flex-col sm:flex-row gap-base">
            <Link className="hover:text-primary" href="/about">About</Link>
            <Link className="hover:text-primary" href="/service">Service</Link>
            <Link className="hover:text-primary" href="/contact">Contact Me</Link>
          </div>
        </div>

        <div className="pt-base">
          <p className="text-muted-foreground text-sm text-center">
            Copyright &copy; {currentYear} {siteConfig.name} / <Link className="hover:underline" href="/privacy-policy"> privacy-policy</Link> / Developed by <Link className="hover:underline" href="https://mallickwebstudio.com/"> mallickwebstudio</Link> 💖
          </p>
        </div>
      </div>
    </footer>
  )
}
