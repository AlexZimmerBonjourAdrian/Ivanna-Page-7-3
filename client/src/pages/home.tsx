import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/ui/progress-ring";

export default function Home() {
  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const { data: userProgress = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "progress"],
    enabled: !!user?.id
  });

  const totalLessons = 21;
  const completedLessons = userProgress.filter(p => p.completed).length;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const formats = [
    {
      id: "microrrelatos",
      title: "Microrrelatos",
      description: "Historias completas en muy pocas palabras",
      icon: "bolt",
      themes: 8,
      path: "/microrrelatos"
    },
    {
      id: "cuentos",
      title: "Cuentos Cortos", 
      description: "Narrativas estructuradas de mayor extensión",
      icon: "book-open",
      themes: 1,
      path: "/cuentos"
    },
    {
      id: "novelas",
      title: "Novelas",
      description: "Proyectos literarios de gran envergadura", 
      icon: "book",
      themes: 1,
      path: "/novelas"
    }
  ];

  return (
    <div className="p-6 lg:p-8" data-testid="page-home">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            ¡Bienvenido a EscribeArte, {user?.name || "Escritor"}!
          </h1>
          <p className="text-lg text-muted-foreground">
            Desarrolla tus habilidades de escritura creativa paso a paso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <i className="fas fa-chart-line text-primary"></i>
                <span>Tu Progreso</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <ProgressRing progress={overallProgress} />
                <div>
                  <p className="text-2xl font-bold" data-testid="text-completed-total">
                    {completedLessons}/{totalLessons}
                  </p>
                  <p className="text-sm text-muted-foreground">Lecciones completadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <i className="fas fa-clock text-accent"></i>
                <span>Continuar Aprendiendo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Tienes lecciones en progreso en:
                </p>
                <Link href="/microrrelatos/terror/lesson/lesson-terror-5">
                  <Button className="w-full justify-start" data-testid="button-continue-lesson">
                    <i className="fas fa-skull mr-2"></i>
                    Microrrelatos de Terror - Lección 5
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Formatos de Escritura</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((format) => (
              <Card key={format.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <i className={`fas fa-${format.icon} text-primary text-xl`}></i>
                    </div>
                    <span>{format.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{format.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {format.themes} {format.themes === 1 ? 'módulo' : 'temas'}
                    </span>
                    <Link href={format.path}>
                      <Button variant="outline" size="sm" data-testid={`button-explore-${format.id}`}>
                        Explorar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
