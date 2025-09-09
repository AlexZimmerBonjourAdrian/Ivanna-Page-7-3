import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="gradient-bg hero-pattern py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-heading font-bold text-white mb-6">
          Domina el Arte de Contar Historias
        </h2>
        <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Desde microrrelatos que cautivan en segundos hasta novelas épicas que marcan generaciones. 
          Aprende las técnicas de los grandes maestros de la literatura mundial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            onClick={() => scrollToSection('microrrelatos')}
            data-testid="button-start-learning"
          >
            Comenzar Aprendizaje
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors"
            onClick={() => scrollToSection('ejemplos')}
            data-testid="button-view-examples"
          >
            Ver Ejemplos
          </Button>
        </div>
      </div>
    </section>
  );
}
