export default function AnalisisSection() {
  return (
    <section id="analisis" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          🔍 Análisis Literario Profundo
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Desglose técnico de obras maestras. Aprende cómo los grandes escritores construyen sus historias, desarrollan personajes y crean atmósferas únicas.
        </p>
      </div>

      {/* Classic Analysis */}
      <div className="mb-16">
        <h4 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Análisis de Clásicos</h4>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="analysis-quijote">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-primary text-xl mb-3">"Don Quijote de la Mancha" - Miguel de Cervantes</h5>
              <p className="italic mb-3 text-foreground">"En un lugar de la Mancha, de cuyo nombre no quiero acordarme..."</p>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h6 className="font-bold text-primary mb-2">Técnicas revolucionarias:</h6>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Metaficción:</strong> Cervantes como autor dentro de la obra</li>
                  <li>• <strong>Realidad vs. Fantasía:</strong> Locura como motor narrativo</li>
                  <li>• <strong>Parodia del género:</strong> Deconstrucción de novelas de caballería</li>
                  <li>• <strong>Personajes redondos:</strong> Evolución psicológica compleja</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="analysis-lolita">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-accent text-xl mb-3">"Lolita" - Vladimir Nabokov</h5>
              <p className="italic mb-3 text-foreground">"Lolita, luz de mi vida, fuego de mis entrañas..."</p>
            </div>
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-lg">
                <h6 className="font-bold text-accent mb-2">Maestría técnica:</h6>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Narrador no confiable:</strong> Humbert manipula al lector</li>
                  <li>• <strong>Prosa poética:</strong> Belleza lingüística en tema controvertido</li>
                  <li>• <strong>Juegos de palabras:</strong> Multilingüismo y referencias literarias</li>
                  <li>• <strong>Ironía dramática:</strong> El lector ve más que el narrador admite</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Analysis */}
      <div className="mb-16">
        <h4 className="text-3xl font-heading font-bold text-secondary mb-8 text-center">Literatura Contemporánea</h4>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="analysis-murakami">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-primary text-xl mb-3">"Kafka en la Orilla" - Haruki Murakami</h5>
              <p className="italic mb-3 text-foreground">"A veces el destino se parece a una tormenta de arena..."</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h6 className="font-bold text-primary mb-2">Estilo único:</h6>
              <ul className="text-sm space-y-1">
                <li>• <strong>Realismo mágico urbano:</strong> Lo sobrenatural en lo cotidiano</li>
                <li>• <strong>Narrativas paralelas:</strong> Dos historias que se entrelazan</li>
                <li>• <strong>Simbolismo sutil:</strong> Gatos, música y portales dimensionales</li>
                <li>• <strong>Prosa minimalista:</strong> Lenguaje simple para ideas complejas</li>
              </ul>
            </div>
          </div>

          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="analysis-ferrante">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-accent text-xl mb-3">"La Amiga Estupenda" - Elena Ferrante</h5>
              <p className="italic mb-3 text-foreground">"Desaparecer de uno mismo es la única vía para ir a buscar fuera..."</p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg">
              <h6 className="font-bold text-accent mb-2">Innovaciones narrativas:</h6>
              <ul className="text-sm space-y-1">
                <li>• <strong>Amistad tóxica:</strong> Relación compleja como eje narrativo</li>
                <li>• <strong>Perspectiva femenina:</strong> Experiencias específicamente femeninas</li>
                <li>• <strong>Clase social:</strong> Movilidad social como conflicto central</li>
                <li>• <strong>Saga familiar:</strong> Generaciones entrelazadas en Nápoles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Techniques */}
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-xl p-8" data-testid="analysis-methods">
        <h4 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Métodos de Análisis Literario</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h5 className="font-bold text-primary text-center mb-3">Análisis Estructural</h5>
            <ul className="text-sm space-y-2">
              <li>• Identificar actos y puntos de giro</li>
              <li>• Mapear arcos de personajes</li>
              <li>• Analizar ritmo y pacing</li>
              <li>• Estudiar construcción de escenas</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎭</span>
            </div>
            <h5 className="font-bold text-accent text-center mb-3">Análisis Estilístico</h5>
            <ul className="text-sm space-y-2">
              <li>• Examinar punto de vista narrativo</li>
              <li>• Analizar registro y tono</li>
              <li>• Identificar figuras retóricas</li>
              <li>• Estudiar construcción de diálogos</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h5 className="font-bold text-secondary text-center mb-3">Análisis Temático</h5>
            <ul className="text-sm space-y-2">
              <li>• Identificar temas universales</li>
              <li>• Analizar simbolismo y metáforas</li>
              <li>• Estudiar contexto histórico-social</li>
              <li>• Examinar subtexto y alegorías</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}