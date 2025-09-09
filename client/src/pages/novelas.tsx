import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Novelas() {
  return (
    <div className="p-6 lg:p-8" data-testid="page-novelas">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Novelas</h1>
          <p className="text-lg text-muted-foreground">
            Domina el arte de la narrativa extensa. Aprende a planificar, estructurar 
            y desarrollar proyectos literarios de gran envergadura.
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
              El módulo de Novelas está en desarrollo. Pronto podrás aprender sobre:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Planificación y escaleta</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Estructura en tres actos</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Desarrollo de personajes complejos</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Construcción de mundos</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Subtramas y arcos narrativos</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-primary"></i>
                <span>Proceso de escritura y revisión</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button disabled data-testid="button-notify-novelas">
            <i className="fas fa-bell mr-2"></i>
            Notificarme cuando esté disponible
          </Button>
        </div>
      </div>
    </div>
  );
}
