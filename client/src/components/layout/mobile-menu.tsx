import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ isOpen, onOpenChange }: MobileMenuProps) {
  const [location] = useLocation();

  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const { data: userProgress = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "progress"],
    enabled: !!user?.id
  });

  const navItems = [
    { 
      path: "/", 
      label: "Inicio", 
      icon: "home",
      id: "dashboard" 
    },
    { 
      path: "/microrrelatos", 
      label: "Microrrelatos", 
      icon: "bolt",
      id: "microrrelatos",
      subtitle: "8 temas disponibles"
    },
    { 
      path: "/cuentos", 
      label: "Cuentos Cortos", 
      icon: "book-open",
      id: "cuentos",
      subtitle: "Técnicas narrativas"
    },
    { 
      path: "/novelas", 
      label: "Novelas", 
      icon: "book",
      id: "novelas",
      subtitle: "Estructura completa"
    }
  ];

  const tools = [
    { path: "/editor", icon: "edit", label: "Editor de Práctica" },
    { path: "/prompts", icon: "lightbulb", label: "Generador de Ideas" },
    { path: "/mis-escritos", icon: "folder", label: "Mis Escritos" }
  ];

  const totalLessons = 21;
  const completedLessons = userProgress.filter(p => p.completed).length;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="w-80 p-0">
          <div className="p-6 h-full overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left">Menú</SheetTitle>
            </SheetHeader>

            {/* Progress Section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Tu Progreso
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progreso General</span>
                  <span className="text-sm font-medium" data-testid="text-mobile-progress">
                    {overallProgress}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Main Navigation */}
            <nav className="space-y-4 mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Formatos de Historia
              </h3>
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.path}
                  onClick={handleLinkClick}
                >
                  <div 
                    className={`flex items-center space-x-3 p-4 rounded-lg transition-colors ${
                      location === item.path 
                        ? "bg-primary text-primary-foreground" 
                        : "border border-border hover:bg-muted"
                    }`}
                    data-testid={`link-mobile-${item.id}`}
                  >
                    <i className={`fas fa-${item.icon} text-lg`}></i>
                    <div className="flex-1">
                      <span className="font-medium">{item.label}</span>
                      {item.subtitle && (
                        <div className={`text-xs ${
                          location === item.path ? "opacity-75" : "text-muted-foreground"
                        }`}>
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Tools Section */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Herramientas
              </h3>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <Link
                    key={tool.path}
                    href={tool.path}
                    onClick={handleLinkClick}
                  >
                    <div 
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                      data-testid={`link-mobile-${tool.path.slice(1)}`}
                    >
                      <i className={`fas fa-${tool.icon} text-lg text-muted-foreground`}></i>
                      <span className="font-medium">{tool.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Floating Action Button for Quick Write */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 bg-secondary text-secondary-foreground"
        onClick={() => {
          // Navigate to editor
          window.location.href = "/editor";
        }}
        data-testid="button-floating-write"
      >
        <i className="fas fa-plus text-xl"></i>
      </Button>
    </div>
  );
}
