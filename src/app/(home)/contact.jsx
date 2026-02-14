import TextAnimation from "@/components/animations/text-animation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="relative bg-secondary"
      aria-labelledby="contact-eight-heading"
      role="region"
    >
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        {/* Text Content */}
        <header className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
          <h2
            id="contact"
            className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance"
          >
            <TextAnimation animation="blurInUp">
              Contact Me for Inquiries, Collaborations, or Just to Say Hello
            </TextAnimation>
          </h2>
          <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
            <TextAnimation animation="blurIn" delay={0.3}>
              Get in touch with me for any inquiries or collaborations.
            </TextAnimation>
          </p>
        </header>

        <address className="mt-8 md:mt-12 md:mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 not-italic">
          <div className="flex flex-col justify-center items-center text-center">
            <MessageCircle className="size-6 shrink-0 text-green-600" aria-hidden="true" />
            <h3 className="mt-3 font-bold text-xl text-green-600">
              <TextAnimation animation="blurIn" delay={0.3}>
                Whatsapp
              </TextAnimation>
            </h3>
            <p className="my-3">
              <TextAnimation animation="blurIn" delay={0.3}>
                Leave a message and I will get back to you within 24 hours.
              </TextAnimation>
            </p>
            <Button className="mt-3 cursor-pointer" variant="outline" size="sm" asChild>
              <a href="https://wa.me/+916206398128">
                Send a Message
              </a>
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Phone className="size-6 shrink-0 text-blue-600" aria-hidden="true" />
            <h3 className="mt-3 font-bold text-xl text-blue-600">
              <TextAnimation animation="blurIn" delay={0.3}>
                Phone
              </TextAnimation>
            </h3>
            <p className="my-3">
              <TextAnimation animation="blurIn" delay={0.3}>
                Call me anytime between 10am and 6pm for quick connection.
              </TextAnimation>
            </p>
            <Button className="mt-3 cursor-pointer" variant="outline" size="sm" asChild>
                <a href="tel:+916206398128">
                  Call Now
                </a>
            </Button>
          </div>
        </address>
      </div>
    </section>
  );
}
