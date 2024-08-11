import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeUp from "@/components/animaitons/FadeUp";
import { Itarget } from "@/components/ui/svgs";

export default function Mission() {
    return (
        <section>
            <div className="section-wrapper">
                <div className="mt-block grid md:grid-cols-7 gap-block">
                    <div className="md:col-span-4">
                        <FadeUp>
                            <h2 className="text-left text-2xl md:text-3xl"><span className="text-primary">
                                Welcome</span> to Artistice-Studio! My name is Sanjeet Kumar Patro, and I am passionate about creating <span className="text-primary">captivating visuals</span> that elevate your brand and <span className="text-primary">engage your audience</span>.</h2>
                        </FadeUp>
                        <FadeUp>
                            <p>
                            At Artistice-Studio, our mission is to help businesses grow <span className="text-primary">exponentially</span> by providing top-notch photoshoots, graphic design, and video editing services. We strive to create content that not only meets your goals but also <span className="text-primary">resonates</span> with your audience on a deeper level. Our approach combines storytelling with emotional appeal to make your brand <span className="text-primary">memorable & impactful</span>.
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <h3 className="mt-base">Our Philosophy</h3>
                        </FadeUp>
                        <FadeUp>
                            <p>
                            We understand the common pitfalls in visual content creation that can hinder your business&apos;s online presence. Here are some practices we avoid to ensure your brand stands out:</p>
                        </FadeUp>

                        <ul className="list-disc mt-xs list-inside text-muted-foreground leading-7">
                            <FadeUp>
                                <li><b>Lackluster Photoshoots:</b> We deliver high-quality, creative photoshoots that capture the essence of your products and events, making your brand visually appealing.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Uninspired Graphic Design:</b> Our graphic designs are tailored to reflect your brand&apos;s unique identity, ensuring your visuals are both eye-catching and meaningful.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Mediocre Video Editing:</b> We provide expert video editing services that turn your raw footage into compelling stories, engaging your audience and enhancing your message.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Inconsistent Branding:</b> Our designs maintain a consistent brand identity across all platforms, reinforcing your brand&apos;s message and values.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Low Engagement:</b> We create content that connects with your audience on an emotional level, boosting engagement and fostering loyalty.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Poor Visual Storytelling:</b> We employ powerful visual storytelling techniques to convey your brand’s narrative effectively, making your content memorable and impactful.</li>
                            </FadeUp>
                        </ul >

                        
                        <FadeUp>
                            <h3 className="mt-base">Our Commitment</h3>
                        </FadeUp>
                        <FadeUp>
                            <p>
                            At Artistice-Studio, we are dedicated to delivering exceptional visual content that helps your business thrive. We believe in the power of collaboration and innovation to create visuals that captivate and convert. Our goal is to empower your brand with intentional, community-driven designs that leave a lasting impression.</p>
                        </FadeUp>
                        <FadeUp>
                            <p className="mt-xs">Let&apos;s work together to transform your brand and achieve new heights of success.</p>
                        </FadeUp>
                    </div >
                    <div className="relative w-full md:col-span-3">
                        <div className="sticky top-block w-full">
                        <FadeUp>
                            <Itarget className="w-full text-muted-foreground" />
                        </FadeUp>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}