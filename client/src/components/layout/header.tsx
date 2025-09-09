import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
  };

  const navItems = [
    { path: "/", label: "Inicio", id: "dashboard" },
    { path: "/microrrelatos", label: "Microrrelatos", id: "microrrelatos" },
    { path: "/cuentos", label: "Cuentos Cortos", id: "cuentos" },
    { path: "/novelas", label: "Novelas", id: "novelas" }
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50" data-testid="header-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
              <i className="fas fa-feather-alt text-primary text-2xl"></i>
              <h1 className="text-xl font-bold text-foreground">EscribeArte</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.path}
                  className={`font-medium transition-colors ${
                    location === item.path 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`link-${item.id}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center" data-testid="avatar-user">
                <span className="text-primary-foreground text-sm font-medium">
                  {user ? getInitials(user.name) : "MU"}
                </span>
              </div>
              <span className="hidden sm:block text-sm font-medium" data-testid="text-username">
                {user?.name || "María Usuario"}
              </span>
            </div>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link 
                      key={item.id}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block p-4 rounded-lg border border-border transition-colors ${
                        location === item.path 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted"
                      }`}
                      data-testid={`link-mobile-${item.id}`}
                    >
                      <div className="flex items-center space-x-3">
                        <i className={`fas fa-${
                          item.id === 'dashboard' ? 'home' :
                          item.id === 'microrrelatos' ? 'bolt' :
                          item.id === 'cuentos' ? 'book-open' : 'book'
                        }`}></i>
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
