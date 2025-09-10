import { BookOpen } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="gradient-bg py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 text-white">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h5 className="text-xl font-heading font-bold">Narrativa Maestra</h5>
            </div>
            <p className="text-yellow-100 text-sm leading-relaxed">
              Tu guía completa para dominar el arte de contar historias, desde microrrelatos hasta novelas épicas.
            </p>
          </div>
          
          <div>
            <h6 className="font-heading font-bold mb-4">Formatos Narrativos</h6>
            <ul className="space-y-2 text-yellow-100 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('microrrelatos')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-microrrelatos"
                >
                  Microrrelatos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cuentos')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-cuentos"
                >
                  Cuentos Cortos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('novelas')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-novelas"
                >
                  Novelas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ejemplos')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-ejemplos"
                >
                  Ejemplos Literarios
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-heading font-bold mb-4">Recursos de Aprendizaje</h6>
            <ul className="space-y-2 text-yellow-100 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('errores')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-errores"
                >
                  Errores Comunes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('practicas')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-practicas"
                >
                  Mejores Prácticas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ejercicios')}
                  className="hover:text-white transition-colors text-left" 
                  data-testid="footer-ejercicios"
                >
                  Ejercicios de Escritura
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('analisis')}
                  className="hover:text-white transition-colors text-left" 
                  data-testid="footer-analisis"
                >
                  Análisis Literario
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-heading font-bold mb-4">Comunidad</h6>
            <ul className="space-y-2 text-yellow-100 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="hover:text-white transition-colors text-left" 
                  data-testid="footer-blog"
                >
                  Blog de Escritura
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('foro')}
                  className="hover:text-white transition-colors text-left" 
                  data-testid="footer-foro"
                >
                  Foro de Escritores
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('talleres')}
                  className="hover:text-white transition-colors text-left" 
                  data-testid="footer-talleres"
                >
                  Talleres Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="hover:text-white transition-colors text-left" 
                  data-testid="footer-newsletter"
                >
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-yellow-100 text-sm">
            © 2024 Narrativa Maestra. Despertando el escritor que llevas dentro.
          </p>
        </div>
      </div>
    </footer>
  );
}
