import { Aperture, Film, PencilRuler } from "lucide-react";

// SERVICES
export const services = [
    {
        icon: <Aperture className="size-8 group-hover:text-primary" />,
        title: "Photo Shoot",
        description: "Jumpstart and establish your brand with your first website or get your existing website redesigned/updated.",
        lists: [
            {
                title: "Product Photoshoots",
                images: [
                    "/images/services/photo-shoot/product/1.jpg",
                    "/images/services/photo-shoot/product/2.jpg",
                    "/images/services/photo-shoot/product/3.jpg",
                    "/images/services/photo-shoot/product/4.jpg",
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
        icon: <Film className="size-8 group-hover:text-primary" />,
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
        icon: <PencilRuler className="size-8 group-hover:text-primary" />,
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
