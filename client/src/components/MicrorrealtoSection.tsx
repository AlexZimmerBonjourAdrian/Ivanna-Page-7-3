export default function MicrorrealtoSection() {
  return (
    <section id="microrrelatos" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          🌟 El Poder de los Microrrelatos
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Historias completas en menos de 300 palabras. Aprende a crear impacto narrativo en el mínimo espacio posible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="card-microrrelato-definition">
          <h4 className="text-2xl font-heading font-bold text-primary mb-4">¿Qué es un Microrrelato?</h4>
          <div className="space-y-4 text-card-foreground">
            <p>Un microrrelato es una forma narrativa extremadamente breve que contiene todos los elementos de una historia completa: personajes, conflicto, desarrollo y resolución.</p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h5 className="font-semibold text-primary mb-2">Características Esenciales:</h5>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Brevedad extrema (50-300 palabras)</li>
                <li>Intensidad narrativa concentrada</li>
                <li>Final sorprendente o revelador</li>
                <li>Economía lingüística precisa</li>
                <li>Universo narrativo completo</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="card-microrrelato-example">
          <h4 className="text-2xl font-heading font-bold text-accent mb-4">Ejemplo Magistral</h4>
          <div className="quote-block pl-6 py-4 mb-4">
            <p className="italic text-lg mb-2">"Cuando despertó, el dinosaurio todavía estaba allí."</p>
            <p className="text-sm font-semibold text-primary">— Augusto Monterroso, "El Dinosaurio"</p>
          </div>
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h5 className="font-semibold text-secondary mb-2">¿Por qué Funciona?</h5>
            <ul className="text-sm space-y-2">
              <li>• <strong>Misterio inmediato:</strong> ¿Quién despertó? ¿Qué dinosaurio?</li>
              <li>• <strong>Ambigüedad deliberada:</strong> Múltiples interpretaciones posibles</li>
              <li>• <strong>Economía perfecta:</strong> Cada palabra es esencial</li>
              <li>• <strong>Impacto duradero:</strong> Se queda en la memoria del lector</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8" data-testid="microrrelato-techniques">
        <h4 className="text-2xl font-heading font-bold text-foreground mb-6">Técnicas de Escritura para Microrrelatos</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-semibold text-primary mb-2">🎯 In Media Res</h5>
              <p className="text-sm">Comienza en medio de la acción. No hay espacio para introducciones largas.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-semibold text-accent mb-2">💥 Final de Impacto</h5>
              <p className="text-sm">El final debe redefinir toda la historia anterior y sorprender al lector.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-semibold text-secondary mb-2">🔍 Precisión Léxica</h5>
              <p className="text-sm">Cada palabra debe tener un propósito. No hay lugar para la redundancia.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-semibold text-primary mb-2">🌊 Subtexto Profundo</h5>
              <p className="text-sm">Lo no dicho es tan importante como lo dicho. El lector debe completar la historia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
