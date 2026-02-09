import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <Testimonials />
        <Trust />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
