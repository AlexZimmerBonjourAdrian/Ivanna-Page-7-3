export default function ComunidadSection() {
  return (
    <section id="comunidad" className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-heading font-bold text-foreground mb-4">
          👥 Comunidad de Escritores
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Únete a una comunidad vibrante de escritores apasionados. Comparte tus obras, recibe feedback constructivo y crece junto a otros narradores.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Blog Section */}
        <div id="blog" className="section-card bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 shadow-lg border border-border" data-testid="blog-section">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📝</span>
          </div>
          <h4 className="text-2xl font-heading font-bold text-primary text-center mb-6">Blog de Escritura</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Artículos Semanales</h5>
              <p className="text-sm text-muted-foreground">Técnicas avanzadas, análisis de obras contemporáneas y entrevistas con autores reconocidos.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Reseñas Literarias</h5>
              <p className="text-sm text-muted-foreground">Análisis profundos de novedades editoriales desde la perspectiva del escritor.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Consejos de Publicación</h5>
              <p className="text-sm text-muted-foreground">Guías sobre cómo publicar, encontrar agentes y promocionar tu obra.</p>
            </div>
          </div>
        </div>

        {/* Forum Section */}
        <div id="foro" className="section-card bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 shadow-lg border border-border" data-testid="forum-section">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">💬</span>
          </div>
          <h4 className="text-2xl font-heading font-bold text-secondary text-center mb-6">Foro de Escritores</h4>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Intercambio de Feedback</h5>
              <p className="text-sm text-muted-foreground">Comparte tus textos y recibe críticas constructivas de otros escritores.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Grupos por Género</h5>
              <p className="text-sm text-muted-foreground">Espacios especializados en ciencia ficción, romance, terror, fantasía y más.</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h5 className="font-bold text-foreground mb-2">Desafíos Colaborativos</h5>
              <p className="text-sm text-muted-foreground">Concursos mensuales y proyectos de escritura colaborativa.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Workshops Section */}
        <div id="talleres" className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="workshops-section">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎓</span>
          </div>
          <h4 className="text-2xl font-heading font-bold text-accent text-center mb-6">Talleres Online</h4>
          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-4">
              <h5 className="font-bold text-accent mb-1">Taller de Microrrelatos</h5>
              <p className="text-sm text-muted-foreground">4 sesiones intensivas para dominar el arte de la narrativa breve.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h5 className="font-bold text-primary mb-1">Construcción de Personajes</h5>
              <p className="text-sm text-muted-foreground">Crea protagonistas memorables con psicología profunda y motivaciones claras.</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h5 className="font-bold text-secondary mb-1">Estructura Narrativa</h5>
              <p className="text-sm text-muted-foreground">Domina los tres actos, puntos de giro y resoluciones satisfactorias.</p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h5 className="font-bold text-accent mb-1">Diálogo Auténtico</h5>
              <p className="text-sm text-muted-foreground">Escribe conversaciones naturales que revelan carácter y avanzan la trama.</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div id="newsletter" className="section-card bg-card rounded-xl p-8 shadow-lg border border-border" data-testid="newsletter-section">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📬</span>
          </div>
          <h4 className="text-2xl font-heading font-bold text-primary text-center mb-6">Newsletter Semanal</h4>
          <div className="space-y-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h5 className="font-bold text-primary mb-2">📚 Lunes: Técnica de la Semana</h5>
              <p className="text-sm">Aprende una nueva técnica narrativa con ejemplos prácticos y ejercicios.</p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg">
              <h5 className="font-bold text-accent mb-2">✍️ Miércoles: Prompt Creativo</h5>
              <p className="text-sm">Desafío de escritura semanal para mantener activa tu creatividad.</p>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h5 className="font-bold text-secondary mb-2">🌟 Viernes: Escritor Destacado</h5>
              <p className="text-sm">Perfil de un miembro de la comunidad y análisis de su trabajo.</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h5 className="font-bold text-primary mb-2">📖 Domingo: Recomendación Literaria</h5>
              <p className="text-sm">Libro de la semana con análisis de técnicas y lecciones para escritores.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-xl p-8" data-testid="community-stats">
        <h4 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Nuestra Comunidad en Números</h4>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-sm text-muted-foreground">Escritores Activos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Textos Publicados/Mes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Talleres Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Autores Publicados</div>
          </div>
        </div>
      </div>
    </section>
  );
}