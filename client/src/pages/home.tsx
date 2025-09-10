import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavigationTabs from "@/components/NavigationTabs";
import MicrorrealtoSection from "@/components/MicrorrealtoSection";
import CuentosSection from "@/components/CuentosSection";
import NovelasSection from "@/components/NovelasSection";
import EjemplosSection from "@/components/EjemplosSection";
import ErroresSection from "@/components/ErroresSection";
import PracticasSection from "@/components/PracticasSection";
import EjerciciosSection from "@/components/EjerciciosSection";
import AnalisisSection from "@/components/AnalisisSection";
import ComunidadSection from "@/components/ComunidadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-body">
      <Header />
      <Hero />
      <NavigationTabs />
      <main className="container mx-auto px-6 py-12">
        <MicrorrealtoSection />
        <CuentosSection />
        <NovelasSection />
        <EjemplosSection />
        <ErroresSection />
        <PracticasSection />
        <EjerciciosSection />
        <AnalisisSection />
        <ComunidadSection />
      </main>
      <Footer />
    </div>
  );
}
