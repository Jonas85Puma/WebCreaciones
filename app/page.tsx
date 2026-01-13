import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Portfolio />
        <Services />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
