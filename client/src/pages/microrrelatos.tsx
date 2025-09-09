import { useQuery } from "@tanstack/react-query";
import { ThemeCard } from "@/components/theme-card";
import { microrrelatos_themes } from "@/data/themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Microrrelatos() {
  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  return (
    <div className="p-6 lg:p-8" data-testid="page-microrrelatos">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Microrrelatos</h1>
          <p className="text-lg text-muted-foreground">
            Aprende a contar historias completas en muy pocas palabras. 
            Cada tema te enseñará técnicas específicas para ese género.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <i className="fas fa-info-circle text-primary"></i>
              <span>¿Qué es un Microrrelato?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Un microrrelato es una narración extremadamente breve que cuenta una historia completa 
              en pocas palabras, generalmente menos de 100. Su poder radica en la síntesis, 
              la sugerencia y la capacidad de generar un impacto emocional inmediato.
            </p>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-6">Temas Disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {microrrelatos_themes.map((theme) => (
              <ThemeCard 
                key={theme.id} 
                theme={theme} 
                userId={user?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
