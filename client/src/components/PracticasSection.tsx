export default function PracticasSection() {
  return (
    <section id="practicas" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          🏆 Mejores Prácticas de Escritura
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Técnicas probadas por los grandes maestros de la literatura mundial. Convierte tu escritura amateur en prosa profesional.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Universal Practices */}
        <div className="section-card bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 shadow-lg border border-border" data-testid="universal-practices">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✍️</span>
          </div>
          <h4 className="text-xl font-heading font-bold text-primary text-center mb-6">Prácticas Universales</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Escribir todos los días</h5>
              <p className="text-xs text-muted-foreground">Aunque sean 100 palabras. La constancia desarrolla el estilo.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Leer en tu género</h5>
              <p className="text-xs text-muted-foreground">Analiza cómo los maestros resuelven problemas narrativos.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Revisar sin piedad</h5>
              <p className="text-xs text-muted-foreground">El primer borrador es solo el comienzo del proceso.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Conocer a tus personajes</h5>
              <p className="text-xs text-muted-foreground">Comprende sus motivaciones más profundas y traumas.</p>
            </div>
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="section-card bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl p-8 shadow-lg border border-border" data-testid="technical-excellence">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔧</span>
          </div>
          <h4 className="text-xl font-heading font-bold text-accent text-center mb-6">Excelencia Técnica</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Show, don't tell</h5>
              <p className="text-xs text-muted-foreground">Muestra emociones a través de acciones, no descripciones.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Diálogo auténtico</h5>
              <p className="text-xs text-muted-foreground">Cada personaje debe tener una voz distintiva y natural.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Economía narrativa</h5>
              <p className="text-xs text-muted-foreground">Cada frase debe servir a la trama, personaje o atmósfera.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Ritmo variable</h5>
              <p className="text-xs text-muted-foreground">Alterna momentos de tensión con pausas reflexivas.</p>
            </div>
          </div>
        </div>

        {/* Professional Tips */}
        <div className="section-card bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 shadow-lg border border-border" data-testid="professional-tips">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎯</span>
          </div>
          <h4 className="text-xl font-heading font-bold text-secondary text-center mb-6">Consejos Profesionales</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Tema profundo</h5>
              <p className="text-xs text-muted-foreground">Tu historia debe explorar algo significativo sobre la condición humana.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Subtexto potente</h5>
              <p className="text-xs text-muted-foreground">Lo no dicho es tan importante como lo dicho.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Final inevitable</h5>
              <p className="text-xs text-muted-foreground">Sorpresivo pero lógico. El lector debe sentir que no podía ser de otra manera.</p>
            </div>
            <div className="bg-white/50 p-3 rounded-lg">
              <h5 className="font-semibold text-foreground mb-1">Voz única</h5>
              <p className="text-xs text-muted-foreground">Desarrolla un estilo distintivo que sea reconociblemente tuyo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Master's Quotes Section */}
      <div className="bg-card rounded-xl p-8 shadow-lg border border-border mt-8" data-testid="masters-quotes">
        <h4 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Sabiduría de los Maestros</h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="quote-block pl-6 py-6">
            <p className="text-lg italic mb-4 text-foreground">"Escribe borracho, edita sobrio."</p>
            <p className="font-semibold text-primary">— Ernest Hemingway</p>
            <p className="text-sm text-muted-foreground mt-2">La creatividad fluye libremente en el primer borrador, pero la precisión viene con la revisión meticulosa.</p>
          </div>

          <div className="quote-block pl-6 py-6">
            <p className="text-lg italic mb-4 text-foreground">"No hay reglas para escribir ficción, solo principios útiles."</p>
            <p className="font-semibold text-accent">— Joyce Carol Oates</p>
            <p className="text-sm text-muted-foreground mt-2">Las técnicas son herramientas, no restricciones. Úsalas cuando sirvan a tu historia.</p>
          </div>

          <div className="quote-block pl-6 py-6">
            <p className="text-lg italic mb-4 text-foreground">"Mata a tus amados."</p>
            <p className="font-semibold text-secondary">— William Faulkner</p>
            <p className="text-sm text-muted-foreground mt-2">Elimina esas frases hermosas que no sirven a la historia. La belleza debe servir al propósito.</p>
          </div>

          <div className="quote-block pl-6 py-6">
            <p className="text-lg italic mb-4 text-foreground">"La primera frase ya está diciendo todo."</p>
            <p className="font-semibold text-primary">— Joan Didion</p>
            <p className="text-sm text-muted-foreground mt-2">El tono, estilo y dirección de tu historia se establece desde las primeras palabras.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
