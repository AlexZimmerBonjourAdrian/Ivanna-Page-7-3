export default function EjemplosSection() {
  return (
    <section id="ejemplos" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          ✨ Ejemplos Literarios Magistrales
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Analiza obras maestras de la literatura mundial. Comprende por qué estos textos han perdurado en el tiempo y qué técnicas puedes aplicar en tu propia escritura.
        </p>
      </div>

      {/* Microrrelatos Ejemplos */}
      <div className="mb-16">
        <h4 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Microrrelatos Legendarios</h4>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="example-dinosaurio">
            <div className="quote-block pl-6 py-6 mb-6">
              <p className="text-xl italic mb-3 text-foreground">"Cuando despertó, el dinosaurio todavía estaba allí."</p>
              <p className="font-bold text-primary text-lg">— Augusto Monterroso, "El Dinosaurio"</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h5 className="font-bold text-primary mb-4">Análisis de Genialidad:</h5>
              <ul className="space-y-3 text-sm">
                <li>• <strong>Ambigüedad perfecta:</strong> ¿Es real o sueño? ¿Humano o dinosaurio el que despierta?</li>
                <li>• <strong>Economía extrema:</strong> Una sola oración que contiene universo completo</li>
                <li>• <strong>Múltiples lecturas:</strong> Metáfora del pasado que persiste, crítica social</li>
                <li>• <strong>Impacto duradero:</strong> Más de 50 años después sigue siendo citado</li>
              </ul>
            </div>
          </div>

          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="example-espejo">
            <div className="quote-block pl-6 py-6 mb-6">
              <p className="text-xl italic mb-3 text-foreground">"El suicida se arrojó a la calle desde el décimo piso, y al pasar por el quinto vio a través de la ventana a su mujer haciendo el amor con otro hombre y pensó: ¡Caramba, si yo hubiera sabido esto antes!"</p>
              <p className="font-bold text-accent text-lg">— Marco Denevi, "Apocalipsis"</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg">
              <h5 className="font-bold text-accent mb-4">Técnicas magistrales:</h5>
              <ul className="space-y-3 text-sm">
                <li>• <strong>Ironía devastadora:</strong> El momento de revelación más irónico posible</li>
                <li>• <strong>Timing perfecto:</strong> La información llega en el peor momento</li>
                <li>• <strong>Humor negro:</strong> Transforma tragedia en comedia absurda</li>
                <li>• <strong>Estructura circular:</strong> El final redefine completamente el inicio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cuentos Cortos Ejemplos */}
      <div className="mb-16">
        <h4 className="text-3xl font-heading font-bold text-secondary mb-8 text-center">Cuentos Cortos Inmortales</h4>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="example-borges">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-primary text-xl mb-3">"El Aleph" - Jorge Luis Borges</h5>
              <p className="italic mb-3 text-foreground">"Vi el Aleph, desde todos los puntos, vi en el Aleph la tierra, y en la tierra otra vez el Aleph y en el Aleph la tierra..."</p>
            </div>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h6 className="font-bold text-primary mb-4">¿Por qué es genial?</h6>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Concepto imposible:</strong> Un punto que contiene todo el universo</li>
                <li>• <strong>Narrador complejo:</strong> Borges como personaje y autor</li>
                <li>• <strong>Filosofía profunda:</strong> Explora infinito, percepción y realidad</li>
                <li>• <strong>Estructura meta:</strong> Historia sobre escribir la historia imposible</li>
                <li>• <strong>Lenguaje preciso:</strong> Cada palabra está cuidadosamente elegida</li>
              </ul>
            </div>
          </div>

          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="example-cortazar">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-accent text-xl mb-3">"Casa Tomada" - Julio Cortázar</h5>
              <p className="italic mb-3 text-foreground">"Irene nunca molestaba a nadie. A veces llegaba a creer que era ella quien no me dejaba casar..."</p>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg">
              <h6 className="font-bold text-accent mb-4">Elementos brillantes:</h6>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Terror sutil:</strong> Amenaza invisible y nunca explicada</li>
                <li>• <strong>Rutina como horror:</strong> Lo cotidiano se vuelve siniestro</li>
                <li>• <strong>Simbolismo político:</strong> Metáfora del peronismo en Argentina</li>
                <li>• <strong>Atmosfera claustrofóbica:</strong> Espacios que se reducen progresivamente</li>
                <li>• <strong>Final abierto:</strong> El lector debe completar el significado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Novelas Ejemplos */}
      <div className="mb-16">
        <h4 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Inicios Legendarios de Novelas</h4>
        <div className="space-y-8">
          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="example-kafka">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-primary text-xl mb-3">"La Metamorfosis" - Franz Kafka</h5>
              <p className="text-lg italic mb-3 text-foreground">"Al despertar Gregorio Samsa una mañana, tras un sueño intranquilo, se encontró en su cama convertido en un monstruoso insecto."</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h6 className="font-bold text-primary mb-4">Genialidad del inicio:</h6>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Premisa imposible:</strong> Presenta lo absurdo como normal</li>
                  <li>• <strong>Tono objetivo:</strong> Narra horror con frialdad clínica</li>
                  <li>• <strong>Hook inmediato:</strong> Primera frase define toda la novela</li>
                  <li>• <strong>Alegoría existencial:</strong> Alienación del hombre moderno</li>
                </ul>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h6 className="font-bold text-secondary mb-4">Lecciones para escritores:</h6>
                <ul className="space-y-2 text-sm">
                  <li>• Comienza con lo extraordinario</li>
                  <li>• Trata lo fantástico como cotidiano</li>
                  <li>• La primera frase debe ser memorable</li>
                  <li>• Usa metáforas físicas para emociones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="example-garcia-marquez">
            <div className="quote-block pl-6 py-6 mb-6">
              <h5 className="font-bold text-accent text-xl mb-3">"Cien Años de Soledad" - Gabriel García Márquez</h5>
              <p className="text-lg italic mb-3 text-foreground">"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/10 p-6 rounded-lg">
                <h6 className="font-bold text-accent mb-4">Técnica del flashforward:</h6>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Tiempo circular:</strong> Futuro y pasado en una frase</li>
                  <li>• <strong>Destino inevitable:</strong> Sabemos que morirá fusilado</li>
                  <li>• <strong>Contraste poético:</strong> Violencia vs. inocencia del hielo</li>
                  <li>• <strong>Generaciones:</strong> Padre e hijo, tradición y ruptura</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h6 className="font-bold text-primary mb-4">Aplicación práctica:</h6>
                <ul className="space-y-2 text-sm">
                  <li>• Comienza en momento de máxima tensión</li>
                  <li>• Usa flashback para crear suspense</li>
                  <li>• Conecta momentos distantes en el tiempo</li>
                  <li>• Establece tono épico desde el inicio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Técnicas Universales */}
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-xl p-8" data-testid="universal-techniques">
        <h4 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Técnicas Universales de los Maestros</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎭</span>
            </div>
            <h5 className="font-bold text-primary mb-3">Mostrar vs. Contar</h5>
            <p className="text-sm text-muted-foreground">Los maestros no dicen "estaba triste", muestran lágrimas, gestos, acciones que revelan emociones.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h5 className="font-bold text-accent mb-3">Economía Narrativa</h5>
            <p className="text-sm text-muted-foreground">Cada palabra debe servir múltiples propósitos: avanzar trama, desarrollar personaje, crear atmósfera.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h5 className="font-bold text-secondary mb-3">Subtexto Profundo</h5>
            <p className="text-sm text-muted-foreground">Lo más importante nunca se dice directamente. El lector debe descubrirlo entre líneas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}