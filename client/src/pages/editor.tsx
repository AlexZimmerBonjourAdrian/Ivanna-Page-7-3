import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TextEditor } from "@/components/ui/text-editor";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Editor() {
  const [content, setContent] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("microrrelatos");
  const [title, setTitle] = useState("");

  const { toast } = useToast();

  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const { data: userExercises = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "exercises"],
    enabled: !!user?.id
  });

  const saveWorkMutation = useMutation({
    mutationFn: async () => {
      // For now, we'll save as a practice exercise
      return apiRequest("POST", `/api/users/${user?.id}/exercises`, {
        exerciseId: "practice-" + Date.now(),
        content: `${title ? title + '\n\n' : ''}${content}`
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users", user?.id, "exercises"] });
      toast({
        title: "Trabajo guardado",
        description: "Tu texto ha sido guardado en 'Mis Escritos'"
      });
    }
  });

  const wordLimits = {
    microrrelatos: { max: 100, min: 10 },
    cuentos: { max: 2000, min: 500 },
    novelas: { max: undefined, min: 1000 }
  };

  const currentLimits = wordLimits[selectedFormat as keyof typeof wordLimits];

  return (
    <div className="p-6 lg:p-8" data-testid="page-editor">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Editor de Práctica</h1>
          <p className="text-lg text-muted-foreground">
            Espacio libre para practicar tu escritura sin presiones ni límites de tiempo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Tu Texto</span>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger className="w-48" data-testid="select-format">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="microrrelatos">Microrrelato</SelectItem>
                      <SelectItem value="cuentos">Cuento Corto</SelectItem>
                      <SelectItem value="novelas">Novela</SelectItem>
                    </SelectContent>
                  </Select>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Título (opcional)
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Escribe un título para tu obra..."
                    className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                    data-testid="input-title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contenido
                  </label>
                  <TextEditor
                    value={content}
                    onChange={setContent}
                    placeholder={`Escribe tu ${selectedFormat.slice(0, -1)} aquí...`}
                    maxWords={currentLimits.max}
                    minWords={currentLimits.min}
                    autoSave={false}
                    className="min-h-[400px]"
                  />
                </div>

                <div className="flex space-x-3">
                  <Button
                    onClick={() => saveWorkMutation.mutate()}
                    disabled={!content.trim() || saveWorkMutation.isPending}
                    data-testid="button-save-work"
                  >
                    {saveWorkMutation.isPending ? "Guardando..." : "Guardar Trabajo"}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setContent("");
                      setTitle("");
                    }}
                    data-testid="button-clear-work"
                  >
                    Limpiar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <i className="fas fa-lightbulb text-accent"></i>
                  <span>Consejos de Escritura</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {selectedFormat === "microrrelatos" && (
                    <>
                      <p>• Cada palabra debe ser esencial</p>
                      <p>• Comienza cerca del final</p>
                      <p>• Deja algo a la imaginación</p>
                      <p>• El título puede ser parte de la historia</p>
                    </>
                  )}
                  {selectedFormat === "cuentos" && (
                    <>
                      <p>• Define un conflicto central claro</p>
                      <p>• Desarrolla pocos personajes bien</p>
                      <p>• Mantén la unidad de tiempo y lugar</p>
                      <p>• Cada escena debe avanzar la trama</p>
                    </>
                  )}
                  {selectedFormat === "novelas" && (
                    <>
                      <p>• Planifica antes de escribir</p>
                      <p>• Desarrolla múltiples arcos narrativos</p>
                      <p>• Construye un mundo consistente</p>
                      <p>• Equilibra diálogo, acción y descripción</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tus Trabajos Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {userExercises.slice(0, 5).map((exercise) => (
                    <div key={exercise.id} className="p-3 border border-border rounded-lg">
                      <p className="text-sm font-medium truncate">
                        {exercise.content.split('\n')[0].substring(0, 50)}...
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exercise.wordCount} palabras
                      </p>
                    </div>
                  ))}
                  {userExercises.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      Aún no has guardado ningún trabajo
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
