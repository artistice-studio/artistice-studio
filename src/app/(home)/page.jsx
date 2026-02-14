import Hero from "./hero";
import Logo from "./logo";
import Service from "./service";
import Steps from "./steps";
import Testimonial from "./testimonial";
import Contact from "./contact";
import WorkGallery from "./work-gallery";

export default function Page() {
  return (
    <>
      <Hero />
      <Logo />
      <Service />
      <WorkGallery />
      <Steps />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}
