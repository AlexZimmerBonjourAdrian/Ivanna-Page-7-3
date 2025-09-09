export default function NovelasSection() {
  return (
    <section id="novelas" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          📚 El Arte de la Novela
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Construye mundos complejos, personajes profundos y tramas épicas. Domina la forma narrativa más ambiciosa y rewarding de la literatura.
        </p>
      </div>

      <div className="space-y-8">
        {/* Novel Structure */}
        <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-primary/10 rounded-xl p-8" data-testid="novel-structure">
          <h4 className="text-2xl font-heading font-bold text-foreground mb-6">Estructura Narrativa de Novela</h4>
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h5 className="font-bold text-secondary mb-2">Acto I: Planteamiento</h5>
              <p className="text-sm text-gray-600">Introducción del mundo, personajes y conflicto central. Hook inicial y primer punto de giro.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚔️</span>
              </div>
              <h5 className="font-bold text-accent mb-2">Acto II-A: Desarrollo</h5>
              <p className="text-sm text-gray-600">Obstáculos crecientes, desarrollo de subtramas, exploración del mundo narrativo.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌋</span>
              </div>
              <h5 className="font-bold text-primary mb-2">Acto II-B: Confrontación</h5>
              <p className="text-sm text-gray-600">Crisis mayor, punto de no retorno, máxima tensión antes del clímax.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h5 className="font-bold text-secondary mb-2">Acto III: Resolución</h5>
              <p className="text-sm text-gray-600">Clímax, resolución del conflicto, epílogo y nuevo equilibrio narrativo.</p>
            </div>
          </div>
        </div>

        {/* Character Development */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="character-arcs">
            <h4 className="text-2xl font-heading font-bold text-primary mb-4">Arcos de Personajes Complejos</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-primary mb-1">Protagonista Dinámico</h5>
                <p className="text-sm text-muted-foreground">Evolución clara desde el estado inicial hasta la transformación final. Motivación profunda y conflicto interno.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h5 className="font-semibold text-accent mb-1">Personajes Secundarios</h5>
                <p className="text-sm text-muted-foreground">Cada personaje debe servir a la trama principal, tener objetivos propios y aportar perspectiva única.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h5 className="font-semibold text-secondary mb-1">Antagonistas Memorables</h5>
                <p className="text-sm text-muted-foreground">Motivaciones comprensibles, métodos únicos, y representación de valores opuestos al protagonista.</p>
              </div>
            </div>
          </div>

          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="worldbuilding-elements">
            <h4 className="text-2xl font-heading font-bold text-accent mb-4">Elementos de Worldbuilding</h4>
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-lg">
                <h5 className="font-semibold text-accent mb-2">🌍 Construcción del Mundo</h5>
                <ul className="text-sm space-y-1">
                  <li>• Reglas consistentes del universo narrativo</li>
                  <li>• Historia y cultura del mundo</li>
                  <li>• Geografía y ambientación detallada</li>
                  <li>• Sistemas sociales y políticos</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h5 className="font-semibold text-primary mb-2">🔧 Herramientas Narrativas</h5>
                <ul className="text-sm space-y-1">
                  <li>• Múltiples puntos de vista</li>
                  <li>• Subtramas entrelazadas</li>
                  <li>• Simbolismo y motivos recurrentes</li>
                  <li>• Ritmo y pacing narrativo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Famous Novel Examples */}
        <div className="bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="novel-examples">
          <h4 className="text-2xl font-heading font-bold text-foreground mb-6">Ejemplos Magistrales de Novelas</h4>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="quote-block pl-6 py-4 mb-4">
                <h5 className="font-bold text-primary text-xl mb-2">"Cien Años de Soledad" - Gabriel García Márquez</h5>
                <p className="italic mb-2">"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota..."</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h6 className="font-semibold text-primary mb-2">Técnicas magistrales:</h6>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Realismo mágico:</strong> Fusiona lo real y lo fantástico</li>
                  <li>• <strong>Estructura cíclica:</strong> La historia se repite en generaciones</li>
                  <li>• <strong>Múltiples generaciones:</strong> Saga familiar épica</li>
                  <li>• <strong>Lenguaje poético:</strong> Prosa musical y evocadora</li>
                  <li>• <strong>Alegoría histórica:</strong> Crítica de la historia latinoamericana</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="quote-block pl-6 py-4 mb-4">
                <h5 className="font-bold text-accent text-xl mb-2">"1984" - George Orwell</h5>
                <p className="italic mb-2">"Era un día luminoso y frío de abril y los relojes daban las trece..."</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <h6 className="font-semibold text-accent mb-2">Elementos innovadores:</h6>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Distopía totalitaria:</strong> Mundo coherentemente opresivo</li>
                  <li>• <strong>Neologismos:</strong> "Newspeak", "doublethink", "Big Brother"</li>
                  <li>• <strong>Alegoría política:</strong> Crítica al totalitarismo</li>
                  <li>• <strong>Estructura progresiva:</strong> Desesperanza creciente</li>
                  <li>• <strong>Influencia cultural:</strong> Conceptos integrados al lenguaje</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
