import { useRoute, Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextEditor } from "@/components/ui/text-editor";
import { LessonCard } from "@/components/lesson-card";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { terrorTechniques, terrorExample, terrorExample2, dailyTip } from "@/data/lessons";
import { microrrelatos_themes } from "@/data/themes";

export default function Lesson() {
  const [, params] = useRoute("/microrrelatos/:theme/lesson/:lessonId");
  const { theme, lessonId } = params || {};
  const [exerciseContent, setExerciseContent] = useState("");

  const { toast } = useToast();

  const currentTheme = microrrelatos_themes.find(t => t.id === theme);

  const { data: user } = useQuery({
    queryKey: ["/api/user"]
  });

  const { data: lesson } = useQuery({
    queryKey: ["/api/lessons", lessonId],
    enabled: !!lessonId
  });

  const { data: exercises = [] } = useQuery({
    queryKey: ["/api/lessons", lessonId, "exercises"],
    enabled: !!lessonId
  });

  const { data: allLessons = [] } = useQuery({
    queryKey: ["/api/lessons"],
    queryParams: { theme }
  });

  const { data: userProgress = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "progress"],
    enabled: !!user?.id
  });

  const { data: userExercises = [] } = useQuery({
    queryKey: ["/api/users", user?.id, "exercises"],
    queryParams: { exerciseId: exercises[0]?.id },
    enabled: !!user?.id && exercises.length > 0
  });

  const saveExerciseMutation = useMutation({
    mutationFn: async (content: string) => {
      return apiRequest("POST", `/api/users/${user?.id}/exercises`, {
        exerciseId: exercises[0]?.id,
        content
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users", user?.id, "exercises"] });
      toast({
        title: "Ejercicio guardado",
        description: "Tu microrrelato ha sido guardado exitosamente"
      });
    }
  });

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", `/api/users/${user?.id}/progress`, {
        lessonId,
        completed: true
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users", user?.id, "progress"] });
      toast({
        title: "¡Lección completada!",
        description: "Has completado esta lección exitosamente"
      });
    }
  });

  if (!lesson || !currentTheme) {
    return (
      <div className="p-6 lg:p-8">
        <p>Lección no encontrada</p>
      </div>
    );
  }

  const currentExercise = exercises[0];
  const currentProgress = userProgress.find(p => p.lessonId === lesson.id);
  const isCompleted = currentProgress?.completed || false;

  const handleSubmitExercise = async () => {
    if (!exerciseContent.trim()) {
      toast({
        title: "Error",
        description: "Por favor escribe algo antes de enviar",
        variant: "destructive"
      });
      return;
    }

    await saveExerciseMutation.mutateAsync(exerciseContent);
    
    if (!isCompleted) {
      await markCompleteMutation.mutateAsync();
    }
  };

  const handleAutoSave = async (content: string) => {
    if (user?.id && currentExercise && content.trim()) {
      try {
        await apiRequest("POST", `/api/users/${user.id}/exercises`, {
          exerciseId: currentExercise.id,
          content
        });
      } catch (error) {
        // Silent fail for auto-save
      }
    }
  };

  const currentLessonIndex = allLessons.findIndex(l => l.id === lesson.id);
  const previousLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  return (
    <div className="p-6 lg:p-8" data-testid="page-lesson">
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
          <Link href={`/microrrelatos/${theme}`} className="hover:text-foreground" data-testid="link-breadcrumb-theme">
            {currentTheme.name}
          </Link>
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-foreground">{lesson.title}</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Lesson Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-medium">
                      {lesson.order}
                    </span>
                  </div>
                  <span>{lesson.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground mb-4">
                    {lesson.content}
                  </p>
                  
                  {lesson.id === "lesson-terror-5" && (
                    <>
                      <h4 className="text-lg font-semibold mb-3">Técnicas Principales:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {terrorTechniques.map((technique, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <i className="fas fa-check-circle text-primary mt-1"></i>
                            <span>
                              <strong>{technique.title}:</strong> {technique.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                {lesson.id === "lesson-terror-5" && (
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Ejemplo:</h5>
                    <blockquote className="text-sm italic text-muted-foreground border-l-4 border-accent pl-4">
                      "Cada noche escucho pasos en el ático. Mi esposa dice que son ratones, 
                      pero yo sé que son del anterior inquilino. El que murió allí hace veinte años. 
                      El que era exactamente igual a mí."
                    </blockquote>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Exercise Section */}
            {currentExercise && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <i className="fas fa-pencil-alt text-accent"></i>
                    <span>Ejercicio Práctico</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Prompt de Escritura:</h4>
                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-accent-foreground" data-testid="text-exercise-prompt">
                        {currentExercise.prompt}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Tu Microrrelato
                      </label>
                      <TextEditor
                        value={exerciseContent}
                        onChange={setExerciseContent}
                        placeholder="Comienza a escribir tu microrrelato aquí..."
                        maxWords={currentExercise.maxWords || undefined}
                        minWords={currentExercise.minWords || undefined}
                        autoSave={true}
                        onAutoSave={handleAutoSave}
                      />
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        onClick={handleSubmitExercise}
                        disabled={saveExerciseMutation.isPending || markCompleteMutation.isPending}
                        data-testid="button-submit-exercise"
                      >
                        {saveExerciseMutation.isPending ? "Guardando..." : "Enviar para Revisión"}
                      </Button>
                      <Button 
                        variant="secondary"
                        onClick={() => setExerciseContent("")}
                        data-testid="button-clear-exercise"
                      >
                        Limpiar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Lesson Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Lecciones de {currentTheme.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {allLessons.map((l, index) => {
                    const progress = userProgress.find(p => p.lessonId === l.id);
                    const isLessonCompleted = progress?.completed || false;
                    const isCurrent = l.id === lesson.id;
                    const isLocked = index > userProgress.filter(p => p.completed).length;

                    return (
                      <LessonCard
                        key={l.id}
                        lesson={l}
                        isCompleted={isLessonCompleted}
                        isCurrent={isCurrent}
                        isLocked={isLocked}
                        theme={theme!}
                      />
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Examples Section */}
            {lesson.id === "lesson-terror-5" && (
              <Card>
                <CardHeader>
                  <CardTitle>Ejemplos Destacados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4 py-2">
                      <p className="text-sm font-medium mb-1">Por {terrorExample.author}</p>
                      <p className="text-sm text-muted-foreground italic">
                        "{terrorExample.text}"
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                        <span data-testid="text-example-likes">
                          <i className="fas fa-heart text-destructive"></i> {terrorExample.likes} me gusta
                        </span>
                        <span>
                          <i className="fas fa-comment"></i> {terrorExample.comments} comentarios
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4 py-2">
                      <p className="text-sm font-medium mb-1">Por {terrorExample2.author}</p>
                      <p className="text-sm text-muted-foreground italic">
                        "{terrorExample2.text}"
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                        <span>
                          <i className="fas fa-heart text-destructive"></i> {terrorExample2.likes} me gusta
                        </span>
                        <span>
                          <i className="fas fa-comment"></i> {terrorExample2.comments} comentarios
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Daily Tip */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <i className="fas fa-lightbulb text-accent"></i>
                <span>Consejo del Día</span>
              </h3>
              <p className="text-muted-foreground">
                {dailyTip}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-border">
          {previousLesson ? (
            <Link href={`/microrrelatos/${theme}/lesson/${previousLesson.id}`}>
              <Button variant="ghost" className="flex items-center space-x-2" data-testid="button-previous-lesson">
                <i className="fas fa-chevron-left"></i>
                <span>Lección Anterior</span>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span data-testid="text-lesson-progress">
              Lección {lesson.order} de {lesson.totalLessons}
            </span>
          </div>
          
          {nextLesson ? (
            <Link href={`/microrrelatos/${theme}/lesson/${nextLesson.id}`}>
              <Button className="flex items-center space-x-2" data-testid="button-next-lesson">
                <span>Siguiente Lección</span>
                <i className="fas fa-chevron-right"></i>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
