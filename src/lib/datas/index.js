import { Aperture, Film, PencilRuler } from "lucide-react";

// SERVICES
export const services = [
    {
        icon: <Aperture className="size-10 group-hover:text-primary" />,
        title: "Photo Shoot",
        description: "Jumpstart and establish your brand with your first website or get your existing website redesigned/updated.",
        lists: [
            {
                title: "Product Photoshoots",
                images: [
                    "/images/services/photo-shoot/product/1.png",
                    "/images/services/photo-shoot/product/2.png",
                    "/images/services/photo-shoot/product/3.png",
                    "/images/services/photo-shoot/product/4.png",
                    "/images/services/photo-shoot/product/5.png",
                    "/images/services/photo-shoot/product/6.png",
                    "/images/services/photo-shoot/product/7.png",
                    "/images/services/photo-shoot/product/8.png",
                    "/images/services/photo-shoot/product/9.png",
                    "/images/services/photo-shoot/product/10.png",
                    "/images/services/photo-shoot/product/11.png",
                    "/images/services/photo-shoot/product/12.png",
                    "/images/services/photo-shoot/product/13.png",
                    "/images/services/photo-shoot/product/14.png",
                    "/images/services/photo-shoot/product/15.png",
                    "/images/services/photo-shoot/product/16.png",
                    "/images/services/photo-shoot/product/17.png",
                    "/images/services/photo-shoot/product/18.png",
                    "/images/services/photo-shoot/product/19.png",
                    "/images/services/photo-shoot/product/20.png",
                    "/images/services/photo-shoot/product/21.png",
                    "/images/services/photo-shoot/product/22.png",
                    "/images/services/photo-shoot/product/23.png",
                    "/images/services/photo-shoot/product/24.png",
                    "/images/services/photo-shoot/product/25.jpg",
                    "/images/services/photo-shoot/product/26.jpg",
                    "/images/services/photo-shoot/product/27.jpg",
                    "/images/services/photo-shoot/product/28.jpg",
                    "/images/services/photo-shoot/product/29.jpg",
                    "/images/services/photo-shoot/product/30.jpg",
                    "/images/services/photo-shoot/product/31.jpg",
                ]
            },
            {
                title: "Event Photoshoots",
                images: [
                    "/images/services/photo-shoot/event/1.jpg",
                    "/images/services/photo-shoot/event/2.jpg",
                    "/images/services/photo-shoot/event/3.jpg",
                    "/images/services/photo-shoot/event/4.jpg",
                ]
            },
            {
                title: "Custom Photoshoots",
                images: [
                    "/images/services/photo-shoot/custom/1.jpg",
                    "/images/services/photo-shoot/custom/2.jpg",
                    "/images/services/photo-shoot/custom/3.jpg",
                    "/images/services/photo-shoot/custom/4.jpg",
                ]
            }
        ],
        link: "/services/photo-shoot"
    },
    {
        icon: <Film className="size-10 group-hover:text-primary" />,
        title: "Video Editing",
        description: "Anything from Website Updates, Bug Fixes, Content changes, or additions of any kind.",
        lists: [
            {
                title: "Promotional Videos",
                images: [
                    "/images/services/video-editing/promotional/1.jpg",
                    "/images/services/video-editing/promotional/2.jpg",
                    "/images/services/video-editing/promotional/3.jpg",
                    "/images/services/video-editing/promotional/4.jpg",
                ]
            },
            {
                title: "Editing Services",
                images: [
                    "/images/services/video-editing/editing/1.jpg",
                    "/images/services/video-editing/editing/2.jpg",
                    "/images/services/video-editing/editing/3.jpg",
                    "/images/services/video-editing/editing/4.jpg",
                ]
            },
            {
                title: "Motion Graphics",
                images: [
                    "/images/services/video-editing/motion/1.jpg",
                    "/images/services/video-editing/motion/2.jpg",
                    "/images/services/video-editing/motion/3.jpg",
                    "/images/services/video-editing/motion/4.jpg",
                ]
            }
        ],
        link: "/services/video-editing"
    },
    {
        icon: <PencilRuler className="size-10 group-hover:text-primary" />,
        title: "Graphic Design",
        description: "Get your website loading faster. A slow site can easily loose visitors and customers.",
        lists: [
            {
                title: "Social Media Graphics",
                images: [
                    "/images/services/graphic-designing/social-media/1.jpg",
                    "/images/services/graphic-designing/social-media/2.jpg",
                    "/images/services/graphic-designing/social-media/3.jpg",
                    "/images/services/graphic-designing/social-media/4.jpg",
                ]
            },
            {
                title: "Branding Design",
                images: [
                    "/images/services/graphic-designing/brand/1.jpg",
                    "/images/services/graphic-designing/brand/2.jpg",
                    "/images/services/graphic-designing/brand/3.jpg",
                    "/images/services/graphic-designing/brand/4.jpg",
                ]
            },
            {
                title: "Print Design",
                images: [
                    "/images/services/graphic-designing/print/1.jpg",
                    "/images/services/graphic-designing/print/2.jpg",
                    "/images/services/graphic-designing/print/3.jpg",
                    "/images/services/graphic-designing/print/4.jpg",
                ]
            }
        ],
        link: "/services/graphic-design",
    },
];

// PRICING & BENEFITS
export const benefits = [
    "Account Handling",
    "Photo Shoot",
    "Video Shoot",
    "Banner Desinging",
    "Post Editing",
    "Graphic Desinging",
    "Motion Graphics",
    "Video Editing",
    "Post Uploading",
]

// Pricing
export const pricing = [
    {
        price: "8k",
        month: "1"
    },
    {
        price: "22k",
        month: "3"
    },
    {
        price: "42k",
        month: "6"
    },
]

// WORKING
export const working = [
    {
        id: "1",
        title: "Photo/Video Shoot",
        description: "Capture your brand's essence with high-quality photography and videography, tailored to showcase your products or services in the best light."
    },
    {
        id: "2",
        title: "Designing & Editing",
        description: "Enhance your visuals with professional design and editing services, ensuring your content is polished, engaging, and aligned with your brand identity."
    },
    {
        id: "3",
        title: "Posting",
        description: "Maximize your reach with strategic posting on social media platforms, tailored to engage your audience and amplify your brand's message."
    },
]


// FAQS
export const faqs = [
    {
        id: "faq1",
        question: "What types of photoshoots do you offer?",
        answer: "We offer a variety of photoshoots, including product photoshoots, event photoshoots, and custom photoshoots tailored to your specific needs."
    },
    {
        id: "faq2",
        question: "How long does it take to complete a video editing project?",
        answer: "The timeline for video editing projects varies depending on the complexity and length of the video. Typically, projects can take anywhere from a few days to a couple of weeks."
    },
    {
        id: "faq3",
        question: "Can you help with branding design for my business?",
        answer: "Yes, we specialize in graphic design services, including social media graphics, branding design, and print design to help establish and enhance your brand's visual identity."
    },
    {
        id: "faq4",
        question: "Do you provide consultations before starting a project?",
        answer: "Absolutely! We offer initial consultations to understand your needs, discuss project details, and provide recommendations to ensure we deliver the best results for your business."
    },
    {
        id: "faq5",
        question: "How can I view samples of your previous work?",
        answer: "You can view samples of our previous work in our service section on the website. It showcases a range of our projects in photoshoots, graphic design, and video editing, demonstrating our expertise and quality."
    },
]

// GALLERY

export const gallery = [
    {
        slug: "cloth-brand",
        label: "Cloth Brand",
        images: [
            "/images/works/36.webp",
            "/images/works/37.webp",
            "/images/works/38.webp",
            "/images/works/39.webp",
            "/images/works/40.webp",
            "/images/works/41.webp",
            "/images/works/42.webp",
            "/images/works/43.webp",
            "/images/works/44.webp",
            "/images/works/45.webp",
            "/images/works/46.webp",
            "/images/works/47.webp",
            "/images/works/48.webp",
            "/images/works/49.webp",
            "/images/works/50.webp",
            "/images/works/51.webp",
            "/images/works/52.webp",
            "/images/works/53.webp",
            "/images/works/54.webp",
            "/images/works/55.webp",
            "/images/works/56.webp",
            "/images/works/57.webp",
            "/images/works/58.webp",
            "/images/works/59.webp",
            "/images/works/60.webp",
            "/images/works/61.webp",
            "/images/works/62.webp",
            "/images/works/63.webp",
            "/images/works/64.webp",
        ]
    },
    {
        slug: "bakery",
        label: "Bakery",
        images: [
            "/images/works/1.webp",
            "/images/works/2.webp",
            "/images/works/3.webp",
            "/images/works/4.webp",
            "/images/works/5.webp",
            "/images/works/6.webp",
            "/images/works/7.webp",
            "/images/works/8.webp",
            "/images/works/9.webp",
        ]
    },
    {
        slug: "college",
        label: "College",
        images: [
            "/images/works/10.webp",
            "/images/works/11.webp",
            "/images/works/13.webp",
            "/images/works/14.webp",
            "/images/works/15.webp",
            "/images/works/17.webp",
            "/images/works/18.webp",
            "/images/works/19.webp",
            "/images/works/24.webp",
            "/images/works/25.webp",
            "/images/works/28.webp",
        ]
    },
    {
        slug: "poster",
        label: "Poster",
        images: [
            "/images/works/20.webp",
            "/images/works/21.webp",
            "/images/works/22.webp",
            "/images/works/23.webp",
            "/images/works/29.webp",
            "/images/works/30.webp",
            "/images/works/33.webp",
            "/images/works/34.webp",
            "/images/works/35.webp",
        ]
    },
    {
        slug: "christmas",
        label: "Christmas",
        images: [
            "/images/works/65.webp",
            "/images/works/66.webp",
            "/images/works/67.webp",
            "/images/works/68.webp",
            "/images/works/69.webp",
            "/images/works/70.webp",
            "/images/works/71.webp",
        ]
    },
    {
        slug: "new-year",
        label: "New Year",
        images: [
            "/images/works/72.webp",
            "/images/works/73.webp",
        ]
    },
    {
        slug: "10-12-fail",
        label: "10th  12th Fail",
        images: [
            "/images/works/74.webp",
            "/images/works/75.webp",
            "/images/works/76.webp",
            "/images/works/77.webp",
        ]
    },
]