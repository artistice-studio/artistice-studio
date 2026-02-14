import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LayoutDashboard, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Logo from "../other/logo";

const linkList = [
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  // { icon: TwitterIcon, label: "Twitter", href: "#" },
  // { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/sanjeet_kumar_patro/" },
  { icon: LayoutDashboard, label: "Printerest",  href: "https://pin.it/KzNtwutfH" },
  // { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  // { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-background"
      aria-labelledby="footer-heading"
      role="region"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 justify-center">
          {/* Logo */}
          <div className="justify-self-center lg:justify-self-start">
            <Link className="block h-8" href="#" aria-label="Home">
              <Logo className="h-12 w-fit" />
              <span className="sr-only">Company</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav
            className="justify-self-center lg:justify-self-center"
            aria-label="Footer navigation"
          >
            <ul className="flex flex-col gap-4 sm:flex-row items-center">
              {linkList.map((link) => (
                <li key={link.label + "FooterFour"}>
                  <Link
                    className="text-sm text-nowrap hover:underline underline-offset-4"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social media links */}
          <nav
            className="justify-self-center lg:justify-self-end"
            aria-label="Social media links"
          >
            <ul className="space-y-3 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label + "FooterFour"}>
                  <Link
                    className="text-sm flex items-center"
                    href={href}
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer bottom bar */}
        <div className="border-t mt-8 pt-8 md:mt-12 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-center md:items-center text-sm">
          {/* <nav aria-label="Legal links">
            <ul className="flex flex-col md:flex-row md:items-center gap-4">
              <li>
                <Link
                  className="underline underline-offset-2 hover:underline-offset-4"
                  href="#"
                  aria-label="Privacy Policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-2 hover:underline-offset-4"
                  href="#"
                  aria-label="Terms of Service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="underline underline-offset-2 hover:underline-offset-4"
                  href="#"
                  aria-label="Cookie Settings"
                >
                  Cookies Settings
                </Link>
              </li>
            </ul>
          </nav> */}
          <p>
            © {new Date().getFullYear()} Artistice Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
