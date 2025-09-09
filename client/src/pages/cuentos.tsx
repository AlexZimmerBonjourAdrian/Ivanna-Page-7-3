import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cuentos() {
  return (
    <div className="p-6 lg:p-8" data-testid="page-cuentos">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Cuentos Cortos</h1>
          <p className="text-lg text-muted-foreground">
            Aprende a desarrollar narrativas más extensas con estructura completa, 
            personajes desarrollados y tramas elaboradas.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-construction text-primary"></i>
              <span>Próximamente</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              El módulo de Cuentos Cortos está en desarrollo. Pronto podrás aprender sobre:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Estructura narrativa clásica</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Desarrollo de personajes</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Diálogos efectivos</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Punto de vista narrativo</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Creación de conflictos</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button disabled data-testid="button-notify-cuentos">
            <i className="fas fa-bell mr-2"></i>
            Notificarme cuando esté disponible
          </Button>
        </div>
      </div>
    </div>
  );
}
