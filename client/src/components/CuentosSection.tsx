export default function CuentosSection() {
  return (
    <section id="cuentos" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          📖 Maestría en Cuentos Cortos
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          El equilibrio perfecto entre brevedad e intensidad. Desarrolla personajes memorables y tramas cautivadoras en el formato favorito de los grandes maestros.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="section-card bg-card rounded-xl p-6 shadow-lg border border-border" data-testid="card-estructura-clasica">
          <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h4 className="text-xl font-heading font-bold text-secondary mb-3">Estructura Clásica</h4>
          <ul className="space-y-2 text-sm text-card-foreground">
            <li>• <strong>Planteamiento:</strong> Presenta el mundo y el conflicto</li>
            <li>• <strong>Nudo:</strong> Desarrolla la tensión narrativa</li>
            <li>• <strong>Desenlace:</strong> Resuelve con impacto emocional</li>
          </ul>
        </div>

        <div className="section-card bg-card rounded-xl p-6 shadow-lg border border-border" data-testid="card-desarrollo-personajes">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">👥</span>
          </div>
          <h4 className="text-xl font-heading font-bold text-accent mb-3">Desarrollo de Personajes</h4>
          <ul className="space-y-2 text-sm text-card-foreground">
            <li>• <strong>Protagonista definido:</strong> Objetivo claro y motivación</li>
            <li>• <strong>Arco emocional:</strong> Transformación del personaje</li>
            <li>• <strong>Voz única:</strong> Estilo narrativo distintivo</li>
          </ul>
        </div>

        <div className="section-card bg-card rounded-xl p-6 shadow-lg border border-border" data-testid="card-tecnicas-narrativas">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🎭</span>
          </div>
          <h4 className="text-xl font-heading font-bold text-primary mb-3">Técnicas Narrativas</h4>
          <ul className="space-y-2 text-sm text-card-foreground">
            <li>• <strong>Punto de vista:</strong> Primera, segunda o tercera persona</li>
            <li>• <strong>Tiempo narrativo:</strong> Flashbacks y prospecciones</li>
            <li>• <strong>Atmósfera:</strong> Ambientación y tono</li>
          </ul>
        </div>
      </div>

      <div className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8" data-testid="literary-examples">
        <h4 className="text-2xl font-heading font-bold text-foreground mb-6">Ejemplos Maestros de Cuentos Cortos</h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="quote-block pl-6 py-4 mb-4">
              <h5 className="font-bold text-primary text-lg mb-2">"La Casa de Asterión" - Jorge Luis Borges</h5>
              <p className="italic mb-2">"Sé que me acusan de soberbia, y tal vez de misantropía, y tal vez de locura..."</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h6 className="font-semibold text-primary mb-2">¿Por qué es magistral?</h6>
              <ul className="text-sm space-y-1">
                <li>• <strong>Narrador no confiable:</strong> El minotauro cuenta su propia historia</li>
                <li>• <strong>Perspectiva única:</strong> Humaniza al "monstruo" mitológico</li>
                <li>• <strong>Revelación gradual:</strong> La verdad se revela lentamente</li>
                <li>• <strong>Economía narrativa:</strong> Máximo impacto en mínimo espacio</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="quote-block pl-6 py-4 mb-4">
              <h5 className="font-bold text-accent text-lg mb-2">"La Lotería" - Shirley Jackson</h5>
              <p className="italic mb-2">"Bobby Martin ya había llenado sus bolsillos de piedras..."</p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg">
              <h6 className="font-semibold text-accent mb-2">Técnicas magistrales:</h6>
              <ul className="text-sm space-y-1">
                <li>• <strong>Falsa normalidad:</strong> Ambiente aparentemente cotidiano</li>
                <li>• <strong>Tensión creciente:</strong> Detalles inquietantes sutiles</li>
                <li>• <strong>Final devastador:</strong> Revela la verdadera naturaleza ritual</li>
                <li>• <strong>Crítica social:</strong> Cuestiona tradiciones ciegas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
