export default function ErroresSection() {
  return (
    <section id="errores" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          ⚠️ Errores Comunes y Cómo Evitarlos
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Aprende de los errores más frecuentes en escritores principiantes y descubre cómo transformarlos en fortalezas narrativas.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Microrrelato Errors */}
        <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="microrrelato-errors">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h4 className="text-2xl font-heading font-bold text-primary">Errores en Microrrelatos</h4>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-red-700 mb-2">❌ Exceso de información</h5>
              <p className="text-sm text-red-600 mb-2">Tratar de explicar demasiado contexto o background</p>
              <p className="text-xs text-red-500 italic">"Juan, de 34 años, contador desde hace 12 años en la empresa familiar..."</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-green-700 mb-2">✅ Solución: Sugiere, no expliques</h5>
              <p className="text-sm text-green-600 mb-2">Deja que el lector complete la información</p>
              <p className="text-xs text-green-500 italic">"Juan ajustó su corbata antes de entrar a la oficina por última vez."</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-red-700 mb-2">❌ Final predecible</h5>
              <p className="text-sm text-red-600">El lector puede anticipar el desenlace desde el primer párrafo</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-green-700 mb-2">✅ Solución: Pistas sutiles y giro inesperado</h5>
              <p className="text-sm text-green-600">Planta pistas que cobran sentido solo al final</p>
            </div>
          </div>
        </div>

        {/* Short Story Errors */}
        <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="short-story-errors">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">📖</span>
            </div>
            <h4 className="text-2xl font-heading font-bold text-accent">Errores en Cuentos Cortos</h4>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-red-700 mb-2">❌ Múltiples conflictos sin resolver</h5>
              <p className="text-sm text-red-600 mb-2">Introducir demasiadas subtramas en poco espacio</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-green-700 mb-2">✅ Solución: Un conflicto central bien desarrollado</h5>
              <p className="text-sm text-green-600">Enfócate en una línea narrativa principal con impacto emocional</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-red-700 mb-2">❌ Personajes planos</h5>
              <p className="text-sm text-red-600">Protagonistas sin motivación clara o desarrollo</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
              <h5 className="font-semibold text-green-700 mb-2">✅ Solución: Arco emocional definido</h5>
              <p className="text-sm text-green-600">El personaje debe cambiar durante la historia</p>
            </div>
          </div>
        </div>

        {/* Novel Errors */}
        <div className="section-card bg-card rounded-xl p-8 shadow-lg border border-border lg:col-span-2" data-testid="novel-errors">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">📚</span>
            </div>
            <h4 className="text-2xl font-heading font-bold text-secondary">Errores Críticos en Novelas</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-red-700 mb-2">❌ Segundo acto flácido</h5>
                <p className="text-sm text-red-600">La mitad de la novela pierde ritmo y dirección</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-green-700 mb-2">✅ Subtramas y mini-clímax</h5>
                <p className="text-sm text-green-600">Mantén la tensión con revelaciones y obstáculos regulares</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-red-700 mb-2">❌ Inconsistencias en el worldbuilding</h5>
                <p className="text-sm text-red-600">Reglas del mundo que cambian sin explicación</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-green-700 mb-2">✅ Biblia del mundo narrativo</h5>
                <p className="text-sm text-green-600">Documento con reglas, historia y lógica interna consistente</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-red-700 mb-2">❌ Demasiados puntos de vista</h5>
                <p className="text-sm text-red-600">Múltiples POV que confunden al lector</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-green-700 mb-2">✅ POV estratégico y limitado</h5>
                <p className="text-sm text-green-600">Cada POV debe aportar información única e importante</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-red-700 mb-2">❌ Resolución apresurada</h5>
                <p className="text-sm text-red-600">Todos los conflictos se resuelven en las últimas páginas</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r-lg">
                <h5 className="font-semibold text-green-700 mb-2">✅ Resolución gradual y satisfactoria</h5>
                <p className="text-sm text-green-600">El clímax resuelve el conflicto central, el epílogo las subtramas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
