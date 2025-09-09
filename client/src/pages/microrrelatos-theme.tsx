import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LessonCard } from "@/components/lesson-card";
import { microrrelatos_themes } from "@/data/themes";

export default function MicrorrelatesTheme() {
  const [, params] = useRoute("/microrrelatos/:theme");
  const theme = params?.theme;

  const currentTheme = microrrelatos_themes.find(t => t.id === theme);

  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const { data: lessons = [] } = useQuery({
    queryKey: ["/api/lessons"],
    queryParams: { theme }
  });

  const { data: userProgress = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "progress"],
    enabled: !!user?.id
  });

  if (!currentTheme) {
    return (
      <div className="p-6 lg:p-8">
        <p>Tema no encontrado</p>
      </div>
    );
  }

  const themeProgress = userProgress.filter(p => 
    lessons.some(l => l.id === p.lessonId)
  );
  const completedLessons = themeProgress.filter(p => p.completed).length;
  const progressPercentage = Math.round((completedLessons / lessons.length) * 100);

  // Find current lesson (first uncompleted)
  const currentLessonProgress = themeProgress.find(p => !p.completed);
  const currentLesson = currentLessonProgress 
    ? lessons.find(l => l.id === currentLessonProgress.lessonId)
    : null;

  return (
    <div className="p-6 lg:p-8" data-testid="page-microrrelatos-theme">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
            Inicio
          </Link>
          <i className="fas fa-chevron-right text-xs"></i>
          <Link href="/microrrelatos" className="hover:text-foreground" data-testid="link-breadcrumb-microrrelatos">
            Microrrelatos
          </Link>
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-foreground">Tema: {currentTheme.name}</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Microrrelatos de {currentTheme.name}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {currentTheme.description}
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="text-center">
                  <div className="w-16 h-16 relative">
                    <svg className="w-16 h-16 progress-ring">
                      <circle cx="32" cy="32" r="28" stroke="hsl(var(--muted))" strokeWidth="4" fill="none"></circle>
                      <circle 
                        cx="32" 
                        cy="32" 
                        r="28" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray="175.93" 
                        strokeDashoffset={175.93 - (175.93 * progressPercentage / 100)}
                        strokeLinecap="round"
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold" data-testid="text-theme-progress">
                        {progressPercentage}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Completado</p>
                </div>
              </div>
            </div>

            {currentLesson && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <i className="fas fa-play-circle text-accent"></i>
                    <span>Continuar Aprendiendo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{currentLesson.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {currentLesson.description}
                      </p>
                    </div>
                    <Link href={`/microrrelatos/${theme}/lesson/${currentLesson.id}`}>
                      <Button data-testid="button-continue-current-lesson">
                        Continuar Lección
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Sobre los Microrrelatos de {currentTheme.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {theme === 'terror' && 
                    "Los microrrelatos de terror se especializan en generar escalofríos y tensión en muy pocas palabras. Aprenderás a crear atmósferas inquietantes, personajes perturbadores y giros finales que sorprendan al lector."
                  }
                  {theme === 'amor' &&
                    "Los microrrelatos de amor exploran las emociones más profundas del corazón humano. Desde el primer amor hasta el desamor, aprenderás a capturar la esencia de los sentimientos en pocas líneas."
                  }
                  {theme === 'ciencia-ficcion' &&
                    "La ciencia ficción en formato micro te permite explorar futuros posibles, tecnologías avanzadas y reflexiones sobre la humanidad en espacios narrativos reducidos."
                  }
                  {/* Add more theme descriptions as needed */}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lecciones de {currentTheme.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessons.map((lesson, index) => {
                    const progress = userProgress.find(p => p.lessonId === lesson.id);
                    const isCompleted = progress?.completed || false;
                    const isCurrent = !isCompleted && index === completedLessons;
                    const isLocked = index > completedLessons;

                    return (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        isCompleted={isCompleted}
                        isCurrent={isCurrent}
                        isLocked={isLocked}
                        theme={theme!}
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <i className="fas fa-lightbulb text-accent"></i>
                  <span>Consejo del Día</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {theme === 'terror' 
                    ? "En el terror psicológico, lo que no dices es tan importante como lo que sí dices. Deja que la imaginación del lector complete los espacios en blanco."
                    : "Cada palabra en un microrrelato debe tener un propósito. Lee tu texto en voz alta para detectar palabras innecesarias."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
