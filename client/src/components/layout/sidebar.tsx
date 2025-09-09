import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ProgressRing } from "@/components/ui/progress-ring";

export function Sidebar() {
  const [location] = useLocation();

  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const { data: userProgress = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "progress"],
    enabled: !!user?.id
  });

  // Calculate overall progress
  const totalLessons = 21; // 7 terror + 6 amor + 8 sci-fi + etc.
  const completedLessons = userProgress.filter(p => p.completed).length;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const formatSections = [
    {
      path: "/microrrelatos",
      icon: "bolt",
      title: "Microrrelatos",
      subtitle: "8 temas disponibles",
      completed: 5,
      current: location.startsWith("/microrrelatos")
    },
    {
      path: "/cuentos", 
      icon: "book-open",
      title: "Cuentos Cortos",
      subtitle: "Técnicas narrativas",
      completed: 2,
      current: location.startsWith("/cuentos")
    },
    {
      path: "/novelas",
      icon: "book", 
      title: "Novelas",
      subtitle: "Estructura completa",
      completed: 0,
      current: location.startsWith("/novelas")
    }
  ];

  const tools = [
    { path: "/editor", icon: "edit", title: "Editor de Práctica" },
    { path: "/prompts", icon: "lightbulb", title: "Generador de Ideas" },
    { path: "/mis-escritos", icon: "folder", title: "Mis Escritos" }
  ];

  return (
    <aside className="hidden lg:block w-80 bg-card border-r border-border" data-testid="sidebar-main">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Tu Progreso</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progreso General</span>
              <span className="text-sm font-medium" data-testid="text-progress-overall">
                {overallProgress}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
                data-testid="progress-bar-overall"
              />
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Formatos de Historia
            </h3>
            
            <div className="space-y-1">
              {formatSections.map((section) => (
                <Link
                  key={section.path}
                  href={section.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    section.current
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                  data-testid={`link-${section.path.slice(1)}`}
                >
                  <i className={`fas fa-${section.icon} text-lg ${
                    section.current ? "" : "text-muted-foreground"
                  }`}></i>
                  <div className="flex-1">
                    <span className="font-medium">{section.title}</span>
                    <div className={`text-xs ${
                      section.current ? "opacity-75" : "text-muted-foreground"
                    }`}>
                      {section.subtitle}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    section.current 
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    <span className="text-xs" data-testid={`text-completed-${section.path.slice(1)}`}>
                      {section.completed}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Herramientas
            </h3>
            <div className="space-y-1">
              {tools.map((tool) => (
                <Link
                  key={tool.path}
                  href={tool.path}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  data-testid={`link-${tool.path.slice(1)}`}
                >
                  <i className={`fas fa-${tool.icon} text-lg text-muted-foreground`}></i>
                  <span className="font-medium">{tool.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
