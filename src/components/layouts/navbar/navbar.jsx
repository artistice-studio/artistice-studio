"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/lib/datas/metaDatas";
import { Ilogo } from "@/components/other/svgs";
import ThemeToggleBtn from "@/components/other/theme-toggle-button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
];

const subNavItems = [
  { label: "Pricing", href: "#" },
  { label: "Features", href: "#" },
  { label: "Testimonials", href: "#" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="p-4 w-full bg-background text-foreground">
      <div className={cn(
        "mx-auto container p-4 bg-secondary grid grid-cols-2 items-center justify-between border rounded-xl",
        isMobileMenuOpen && "rounded-b-none lg:rounded-b-xl"
      )}>
        {/* Logo */}
        <Link href="#" className="h-8 w-fit flex gap-2 justify-self-start" aria-label="Go to homepage">
          <Ilogo className="h-8 w-fit text-primary" />
          <span className='sr-only'>{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-2 justify-self-end" role="navigation" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <Link
              className={buttonVariants({ variant: "ghost" })+" hover:bg-background"}
              href={item.href}
              key={item.label + "NavbarOne"}
            >
              {item.label}
            </Link>
          ))}

          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="dark:hover:bg-accent/50"
                  aria-expanded="false"
                  aria-label="More navigation options"
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3" role="menu">
                    {subNavItems.map((item) => (
                      <li key={item.label + "NavbarOne"} role="none">
                        <NavigationMenuLink asChild role="menuitem">
                          <Link
                            href={item.href}
                            className="flex-row items-center gap-2"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}
        </nav>

        {/* Desktop Actions */}
        {/* <ThemeToggleBtn className="hidden lg:flex justify-self-end" /> */}


        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden justify-self-end"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden p-4 bg-secondary rounded-b-md border space-y-2" role="navigation" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link
              key={item.label + "NavbarOne"}
              href={item.href}
              className={cn(buttonVariants({ variant: "ghost" }), "block w-fit")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="dark:hover:bg-accent/50"
                  aria-expanded="false"
                  aria-label="More options"
                >
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3" role="menu">
                    {subNavItems.map((item) => (
                      <li key={item.label + "NavbarOne"} role="none">
                        <NavigationMenuLink asChild role="menuitem">
                          <Link
                            href={item.href}
                            className="flex-row items-center gap-2"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}

          <ThemeToggleBtn />
        </nav>
      )}
    </header>
  );
}
