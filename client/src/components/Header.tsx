import { Menu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="gradient-bg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            data-testid="home-button"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-white" data-testid="app-title">
              Narrativa Maestra
            </h1>
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('microrrelatos')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
              data-testid="nav-microrrelatos"
            >
              Microrrelatos
            </button>
            <button 
              onClick={() => scrollToSection('cuentos')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
              data-testid="nav-cuentos"
            >
              Cuentos Cortos
            </button>
            <button 
              onClick={() => scrollToSection('novelas')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
              data-testid="nav-novelas"
            >
              Novelas
            </button>
            <button 
              onClick={() => scrollToSection('ejemplos')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
              data-testid="nav-ejemplos"
            >
              Ejemplos
            </button>
            <button 
              onClick={() => scrollToSection('errores')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
              data-testid="nav-errores"
            >
              Errores Comunes
            </button>
            <button 
              onClick={() => scrollToSection('practicas')}
              className="text-white hover:text-yellow-200 transition-colors font-medium"
              data-testid="nav-practicas"
            >
              Mejores Prácticas
            </button>
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('microrrelatos')}
                className="text-white hover:text-yellow-200 transition-colors font-medium text-left py-2"
                data-testid="mobile-nav-microrrelatos"
              >
                Microrrelatos
              </button>
              <button 
                onClick={() => scrollToSection('cuentos')}
                className="text-white hover:text-yellow-200 transition-colors font-medium text-left py-2"
                data-testid="mobile-nav-cuentos"
              >
                Cuentos Cortos
              </button>
              <button 
                onClick={() => scrollToSection('novelas')}
                className="text-white hover:text-yellow-200 transition-colors font-medium text-left py-2"
                data-testid="mobile-nav-novelas"
              >
                Novelas
              </button>
              <button 
                onClick={() => scrollToSection('ejemplos')}
                className="text-white hover:text-yellow-200 transition-colors font-medium text-left py-2"
                data-testid="mobile-nav-ejemplos"
              >
                Ejemplos
              </button>
              <button 
                onClick={() => scrollToSection('errores')}
                className="text-white hover:text-yellow-200 transition-colors font-medium text-left py-2"
                data-testid="mobile-nav-errores"
              >
                Errores Comunes
              </button>
              <button 
                onClick={() => scrollToSection('practicas')}
                className="text-white hover:text-yellow-200 transition-colors font-medium text-left py-2"
                data-testid="mobile-nav-practicas"
              >
                Mejores Prácticas
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
