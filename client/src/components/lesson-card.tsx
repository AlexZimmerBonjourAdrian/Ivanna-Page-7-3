import { Link } from "wouter";

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    order: number;
    totalLessons: number;
  };
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
  theme: string;
}

export function LessonCard({ lesson, isCompleted, isCurrent, isLocked, theme }: LessonCardProps) {
  const content = (
    <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
      isCompleted 
        ? "bg-primary/10 border border-primary/20" 
        : isCurrent
        ? "bg-accent/10 border border-accent"
        : "opacity-50"
    }`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isCompleted
          ? "bg-primary"
          : isCurrent 
          ? "bg-accent"
          : "bg-muted"
      }`}>
        {isCompleted ? (
          <i className="fas fa-check text-primary-foreground text-sm"></i>
        ) : (
          <span className={`text-sm font-bold ${
            isCurrent ? "text-accent-foreground" : "text-muted-foreground"
          }`}>
            {lesson.order}
          </span>
        )}
      </div>
      <div className="flex-1">
        <span className={`font-medium ${
          isCompleted 
            ? "text-primary"
            : isCurrent
            ? "text-accent" 
            : "text-muted-foreground"
        }`}>
          {lesson.order}. {lesson.title}
        </span>
        <div className={`text-xs ${
          isCompleted 
            ? "text-primary/70"
            : isCurrent
            ? "text-accent/70"
            : "text-muted-foreground"
        }`}>
          {isCompleted ? "Completado" : isCurrent ? "En progreso" : "Bloqueado"}
        </div>
      </div>
    </div>
  );

  if (isLocked) {
    return (
      <div data-testid={`lesson-card-${lesson.id}`}>
        {content}
      </div>
    );
  }

  return (
    <Link href={`/microrrelatos/${theme}/lesson/${lesson.id}`}>
      <div className="cursor-pointer" data-testid={`lesson-card-${lesson.id}`}>
        {content}
      </div>
    </Link>
  );
}
