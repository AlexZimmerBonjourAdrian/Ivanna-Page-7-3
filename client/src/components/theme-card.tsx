import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Theme } from "@/data/themes";

interface ThemeCardProps {
  theme: Theme;
  userId?: string;
}

export function ThemeCard({ theme, userId }: ThemeCardProps) {
  const { data: userProgress = [] } = useQuery({
    queryKey: ["/api/users", userId, "progress"],
    enabled: !!userId
  });

  const { data: lessons = [] } = useQuery({
    queryKey: ["/api/lessons"],
    queryParams: { theme: theme.id }
  });

  const themeProgress = userProgress.filter(p => 
    lessons.some(l => l.id === p.lessonId && l.theme === theme.id)
  );
  const completedLessons = themeProgress.filter(p => p.completed).length;

  const isActive = completedLessons > 0;

  return (
    <Link href={`/microrrelatos/${theme.id}`}>
      <button 
        className={`w-full ${theme.className} text-white p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200 ${
          isActive ? 'border-2 border-primary' : ''
        }`}
        data-testid={`button-theme-${theme.id}`}
      >
        <i className={`fas fa-${theme.icon} text-2xl mb-2`}></i>
        <div className="font-medium">{theme.name}</div>
        <div className="text-xs opacity-90" data-testid={`text-progress-${theme.id}`}>
          {completedLessons}/{theme.totalLessons} lecciones
        </div>
      </button>
    </Link>
  );
}
