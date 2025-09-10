export default function EjerciciosSection() {
  return (
    <section id="ejercicios" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          ✏️ Ejercicios de Escritura Creativa
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ejercicios prácticos diseñados para desarrollar tu creatividad y técnica narrativa. Desde ejercicios diarios hasta desafíos específicos para cada formato.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Daily Exercises */}
        <div className="section-card bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 shadow-lg border border-border" data-testid="daily-exercises">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📝</span>
          </div>
          <h4 className="text-2xl font-heading font-bold text-primary text-center mb-6">Ejercicios Diarios</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Escritura libre de 15 minutos</h5>
              <p className="text-sm text-muted-foreground">Escribe sin parar durante 15 minutos sobre cualquier tema. No corrijas, solo fluye.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Descripción de personaje en 100 palabras</h5>
              <p className="text-sm text-muted-foreground">Crea un personaje completo usando exactamente 100 palabras. Incluye físico, personalidad y trasfondo.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Diálogo sin narración</h5>
              <p className="text-sm text-muted-foreground">Escribe una escena completa usando únicamente diálogo. La historia debe entenderse sin descripciones.</p>
            </div>
          </div>
        </div>

        {/* Format-Specific Exercises */}
        <div className="section-card bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 shadow-lg border border-border" data-testid="format-exercises">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎯</span>
          </div>
          <h4 className="text-2xl font-heading font-bold text-secondary text-center mb-6">Por Formato</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Microrrelato: Límite de 55 palabras</h5>
              <p className="text-sm text-muted-foreground">Historia completa en exactamente 55 palabras. Incluye inicio, desarrollo y final sorprendente.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Cuento: Reescribir desde otro POV</h5>
              <p className="text-sm text-muted-foreground">Toma un cuento famoso y reescríbelo desde la perspectiva del antagonista.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Novela: Esquema de 25 capítulos</h5>
              <p className="text-sm text-muted-foreground">Planifica una novela completa con estructura de tres actos y arcos de personajes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Challenges */}
      <div className="bg-card rounded-xl p-8 shadow-lg border border-border mb-8" data-testid="weekly-challenges">
        <h4 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Desafíos Semanales</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🌟</span>
            </div>
            <h5 className="font-bold text-primary mb-3">Semana 1: Géneros</h5>
            <p className="text-sm">Escribe el mismo argumento en 7 géneros diferentes: terror, comedia, drama, ciencia ficción, fantasía, thriller y realismo.</p>
          </div>
          
          <div className="bg-accent/10 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🎭</span>
            </div>
            <h5 className="font-bold text-accent mb-3">Semana 2: Voces</h5>
            <p className="text-sm">Una historia contada por 7 narradores diferentes: niño, anciano, animal, objeto, extraterrestre, fantasma y IA.</p>
          </div>
          
          <div className="bg-secondary/10 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">⏰</span>
            </div>
            <h5 className="font-bold text-secondary mb-3">Semana 3: Tiempo</h5>
            <p className="text-sm">Juega con la estructura temporal: flashbacks, flashforwards, narrativa no lineal, tiempo circular.</p>
          </div>
        </div>
      </div>
    </section>
  );
}