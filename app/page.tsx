import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Componentes debajo del fold - carga diferida para mejor rendimiento
const Portfolio = dynamic(() => import("@/components/Portfolio"), { 
  loading: () => <div className="min-h-screen" /> 
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-[50vh]" />
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[50vh]" />
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="min-h-[50vh]" />
});
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

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
