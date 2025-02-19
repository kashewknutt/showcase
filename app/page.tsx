import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import Collaboration from "@/app/components/Collaboration";
import Services from "@/app/components/Services";
import Pricing from "@/app/components/Pricing";
import Roadmap from "@/app/components/Roadmap";
import Footer from "@/app/components/Footer";
import ButtonGradient from "@/public/assets/svg/ButtonGradient";



export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}
