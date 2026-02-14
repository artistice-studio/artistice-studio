import { siteConfig } from "@/lib/datas/metaDatas";

const baseUrl = siteConfig.baseUrl

export default function sitemap() {
    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/about`,
        },
        {
            url: `${baseUrl}/contact`,
        },
        {
            url: `${baseUrl}/services`,
        },
        {
            url: `${baseUrl}/privacy-policy`,
        },
        {
            url: `${baseUrl}/services/photo-shoot`,
        },
        {
            url: `${baseUrl}/services/video-editing`,
        },
        {
            url: `${baseUrl}/services/graphic-design`,
        },
    ]
}