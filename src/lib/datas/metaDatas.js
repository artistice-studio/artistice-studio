export const siteConfig = {
    name: "Artistice-Studio",
    title: "Artistice-Studio - Your Story Our Vision",
    description: "Your go-to partner for innovative and visually stunning photography, video editing, and graphic design services.",
    url: "https://artistice-studio.com",
    baseUrl: "https://artistice-studio.com",
    ogImage: "https://artistice-studio.com/og.jpg",
    links: {
        facebook: "https://www.facebook.com/sanjeet.roy.39982631/",
        instagram: "https://www.instagram.com/sanjeet_kumar_patro/",
    },
    owner: "Sanjeet Kumar Patro"
}

// ===================================================
// // Main Pages
// ===================================================
export const siteMd = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Photography Services",
        "Video Editing",
        "Graphic Design",
        "Creative Media",
    ],
    authors: [
        {
            name: siteConfig.owner,
            url: siteConfig.url,
        },
    ],
    creator: "Artistice-Studio",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@artistice_studio",
    },
    icons: {
        icon: "/logo/favicon.ico",
        shortcut: "/logo/favicon-16x16.png",
        apple: "/logo/apple-touch-icon.png",
    },
}

export const aboutMd = {
    title: "About",
    description: "Learn more about Artistice-Studio, where creativity meets precision in photography, video editing, and graphic design.",
}

export const serviceMd = {
    title: "Services",
    description: "Explore the diverse range of creative services provided by Artistice-Studio, including photography, video editing, and graphic design.",
}

export const portfolioMd = {
    title: "Portfolio",
    description: "Browse our portfolio showcasing the artistic excellence and creativity of Artistice-Studio's projects.",
}

export const contactMd = {
    title: "Contact",
    description: "Get in touch with Artistice-Studio to discuss your creative needs, collaborations, or inquiries.",
}

// ===================================================
// // Additional Pages
// ===================================================

export const hireMd = {
    title: "Hire",
    description: "Engage Artistice-Studio for your next creative project, bringing your vision to life with professional photography, video editing, and graphic design.",
}

export const creditMd = {
    title: "Credits",
    description: "Acknowledgments for the tools, resources, and collaborators that contribute to the success of Artistice-Studio's projects.",
}

export const privacyPolicyMd = {
    title: "Privacy Policy",
    description: "Review Artistice-Studio's privacy policy, outlining our commitment to protecting your personal information.",
}

// ========================================
// // Service Subpages
// ========================================
export const photoMd = {
    title: "Photography Services",
    description: "Capture stunning visuals with Artistice-Studio's professional photography services, tailored to meet your specific needs.",
}
export const videoMd = {
    title: "Video Editing",
    description: "Transform your raw footage into polished, professional videos with Artistice-Studio's expert video editing services.",
}
export const graphicMd = {
    title: "Graphic Design",
    description: "Elevate your brand with Artistice-Studio's creative and impactful graphic design services, tailored to resonate with your audience.",
}
