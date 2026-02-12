import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PiecesCarousel from "@/components/PiecesCarousel";
import Styles from "@/components/Styles";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loader from "@/components/Loader";
import GemCuts from "@/components/GemCuts";


export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <PiecesCarousel />
        <GemCuts />
        <Styles />
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
