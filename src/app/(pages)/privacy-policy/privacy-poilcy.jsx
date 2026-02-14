import { siteConfig } from "@/lib/datas/metaDatas";
import Link from "next/link";

export default function PrivacyPolicy() {
    const currentYear = new Date().getFullYear();
    return (
        <section>
            <div className="section-wrapper">
                <h2 className="h2 text-left">Who We Are</h2>
                <p>I am Sanjeet Kumar Patro from India.</p>
                <p>My website address is: https://artistice-studio.in</p>

                <h2 className="h2 text-left">Personal Information Collection</h2>
                <p>We do not personally collect any personal information from you unless you voluntarily provide it through the forms you fill out.</p>


                <h2 className="h2 text-left">Who We Share Your Data With</h2>
                <p>
                    This website is build with Nextjs (react framework) and deployed on <Link className="text-link" href="https://vercel.com/legal/privacy-policy"> vercel.com</Link>.
                    We use <Link className="text-link" href="https://formspree.io/legal/privacy-policy/">Google search console</Link>to monitor and analyze our website&apos;s performance in Google search results.
                </p>

                <h2 className="h2 text-left">Copyright Notice</h2>
                <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            </div>
        </section>
    )
}
