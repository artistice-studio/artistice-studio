"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { buttonVariants } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import ThemeToggleBtn from "@/components/other/theme-toggle-button";
import Logo from "../other/logo";

const navItems = [
    // { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
    // {
    //     label: "More",
    //     subItems: [
    //         { label: "Pricing", href: "#" },
    //         { label: "Features", href: "#" },
    //         { label: "Testimonials", href: "#" },
    //     ],
    // },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="sticky top-0 left-0 right-0 p-2 md:p-4 z-10">
            <div className="mx-auto container max-w-2xl w-full h-16 bg-black dark:bg-transparent dark:backdrop-blur-2xl text-foreground dark:border rounded-md">
                <div className="p-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative h-8 w-fit flex gap-2 justify-self-start"
                        aria-label="Go to homepage"
                        title="Homepage"
                    >
                        <Logo className="-mt-1 h-8 w-24 text-white" />
                        <span className="sr-only">Artistice Studio SVG Logo</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-2" role="navigation" aria-label="Primary Navigation">
                        <NavbarNavigationLinks className="hidden lg:flex justify-self-center gap-2" />

                        {/* Desktop Actions */}
                        <NavbarCtaAction className="hidden lg:flex items-center gap-2 justify-self-end" />
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden cursor-pointer justify-self-end text-white"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <>
                        <nav className="mt-1 lg:hidden relative p-4 bg-black dark:bg-secondary dark:backdrop-blur-2xl text-foreground dark:border rounded-md" role="navigation" aria-label="Mobile Navigation">
                            <NavbarNavigationLinks />

                            {/* Mobile Actions */}
                            <NavbarCtaAction className="mt-2 flex flex-col gap-2" />
                        </nav>
                    </>
                )}
            </div>
        </header>
    );
}

function NavbarNavigationLinks({ className }) {
    const isMobile = useIsMobile()
    return (
        <NavigationMenu className={className} role="navigation" aria-label="Primary Navigation" viewport={isMobile}>
            <NavigationMenuList className="flex-col items-start lg:flex-row">
                {navItems.map((item) =>
                    item.subItems ? (
                        <NavigationMenuItem key={item.label + "NavbarOne"}>
                            <NavigationMenuTrigger
                                className={cn(buttonVariants({ variant: "ghost" }), "px-4!")}
                                aria-expanded="false"
                                aria-label={`${item.label} navigation options`}
                            >
                                {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-fit gap-3" role="menu">
                                    {item.subItems.map((sub) => (
                                        <li key={sub.label + "NavbarOne"} role="none">
                                            <NavigationMenuLink asChild role="menuitem">
                                                <Link
                                                    className={cn(buttonVariants({ variant: "ghost" }), "w-full items-start")}
                                                    href={sub.href}
                                                >
                                                    {sub.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={item.label + "NavbarOne"}>
                            <NavigationMenuLink className="leading-4 font-semibold uppercase text-white" asChild>
                                <Link
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function NavbarCtaAction({ className }) {
    return (
        <div className={className}>
            <ThemeToggleBtn />
        </div>
    )
}
