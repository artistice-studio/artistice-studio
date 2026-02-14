"use client"
import { FmaosConfigProvider } from "@/components/providers/FmaosConfigProvider"
// import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"

export default function Providers({ children }) {
    return (
        // <ThemeProvider
        //     attribute="class"
        //     defaultTheme="system"
        //     enableSystem
        //     disableTransitionOnChange>
            <FmaosConfigProvider>
                {children}
                <Toaster />
            </FmaosConfigProvider>
        // </ThemeProvider>
    )
}