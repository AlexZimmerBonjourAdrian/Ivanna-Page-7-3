export default function NavigationTabs() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-card py-6 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollToSection('microrrelatos')}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            data-testid="tab-microrrelatos"
          >
            🌟 Microrrelatos
          </button>
          <button 
            onClick={() => scrollToSection('cuentos')}
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            data-testid="tab-cuentos"
          >
            📖 Cuentos Cortos  
          </button>
          <button 
            onClick={() => scrollToSection('novelas')}
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            data-testid="tab-novelas"
          >
            📚 Novelas
          </button>
          <button 
            onClick={() => scrollToSection('ejemplos')}
            className="bg-muted text-muted-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted/80 transition-colors"
            data-testid="tab-ejemplos"
          >
            ✨ Ejemplos Literarios
          </button>
        </div>
      </div>
    </section>
  );
}
