import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { siteMd } from "@/lib/datas/metaDatas";

const lexend = Lexend({
  variable: "--font-lexend",
});

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.variable} ${lexend.variable} antialiased`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </NextThemesProvider>
      </body>
    </html>
  );
}
