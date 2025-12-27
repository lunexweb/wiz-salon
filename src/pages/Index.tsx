import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WigCollection from "@/components/WigCollection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Waz Wigs | Premium Hair Salon & Wig Shop in Kempton Park, Johannesburg</title>
        <meta
          name="description"
          content="Waz Wigs offers premium wigs, braids, weaves, and expert hair styling in Kempton Park, Johannesburg. Transform your look with our professional services."
        />
        <meta
          name="keywords"
          content="wigs Johannesburg, hair salon Kempton Park, braids, weaves, wig installation, box braids, knotless braids, hair styling South Africa"
        />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden max-w-full">
        <Navbar />
        <Hero />
        <Services />
        <WigCollection />
        <About />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;