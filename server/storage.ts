import { 
  type User, 
  type InsertUser, 
  type Lesson, 
  type InsertLesson,
  type Exercise,
  type InsertExercise,
  type UserProgress,
  type InsertUserProgress,
  type UserExercise,
  type InsertUserExercise
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Lesson methods
  getAllLessons(): Promise<Lesson[]>;
  getLessonsByFormat(format: string): Promise<Lesson[]>;
  getLessonsByTheme(theme: string): Promise<Lesson[]>;
  getLesson(id: string): Promise<Lesson | undefined>;
  createLesson(lesson: InsertLesson): Promise<Lesson>;

  // Exercise methods
  getExercisesByLesson(lessonId: string): Promise<Exercise[]>;
  getExercise(id: string): Promise<Exercise | undefined>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;

  // User progress methods
  getUserProgress(userId: string): Promise<UserProgress[]>;
  getUserProgressByLesson(userId: string, lessonId: string): Promise<UserProgress | undefined>;
  updateUserProgress(progress: InsertUserProgress): Promise<UserProgress>;

  // User exercises methods
  getUserExercises(userId: string): Promise<UserExercise[]>;
  getUserExercisesByExercise(userId: string, exerciseId: string): Promise<UserExercise[]>;
  saveUserExercise(exercise: InsertUserExercise): Promise<UserExercise>;
  updateUserExercise(id: string, content: string, wordCount: number): Promise<UserExercise | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private lessons: Map<string, Lesson>;
  private exercises: Map<string, Exercise>;
  private userProgress: Map<string, UserProgress>;
  private userExercises: Map<string, UserExercise>;

  constructor() {
    this.users = new Map();
    this.lessons = new Map();
    this.exercises = new Map();
    this.userProgress = new Map();
    this.userExercises = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Create default user
    const defaultUser: User = {
      id: "user-1",
      username: "maria.usuario",
      password: "password",
      name: "María Usuario",
      createdAt: new Date(),
    };
    this.users.set(defaultUser.id, defaultUser);

    // Initialize microrrelatos lessons for each theme
    const themes = [
      { id: 'terror', name: 'Terror', icon: 'skull', lessons: 7 },
      { id: 'amor', name: 'Amor', icon: 'heart', lessons: 6 },
      { id: 'ciencia-ficcion', name: 'Ciencia Ficción', icon: 'rocket', lessons: 8 },
      { id: 'fantasia', name: 'Fantasía', icon: 'magic', lessons: 6 },
      { id: 'humor', name: 'Humor', icon: 'laugh', lessons: 5 },
      { id: 'drama', name: 'Drama', icon: 'theater-masks', lessons: 7 },
      { id: 'misterio', name: 'Misterio', icon: 'search', lessons: 6 },
      { id: 'realismo-magico', name: 'Realismo Mágico', icon: 'eye', lessons: 8 }
    ];

    // Create lessons for Terror theme (as shown in the design)
    const terrorLessons = [
      {
        id: "lesson-terror-1",
        title: "Introducción al Terror",
        description: "Fundamentos del terror en la narrativa breve",
        content: "El terror en los microrrelatos se basa en crear una sensación de inquietud y miedo en muy pocas palabras. La clave está en sugerir más de lo que se dice explícitamente...",
        format: "microrrelatos",
        theme: "terror",
        order: 1,
        totalLessons: 7
      },
      {
        id: "lesson-terror-2", 
        title: "Crear Atmósfera",
        description: "Técnicas para generar ambiente terrorífico",
        content: "La atmósfera en el terror se construye a través de la descripción sutil de elementos inquietantes...",
        format: "microrrelatos",
        theme: "terror",
        order: 2,
        totalLessons: 7
      },
      {
        id: "lesson-terror-3",
        title: "Personajes Inquietantes", 
        description: "Cómo crear personajes que generen miedo",
        content: "Los personajes en el terror pueden ser ordinarios con características perturbadoras...",
        format: "microrrelatos",
        theme: "terror",
        order: 3,
        totalLessons: 7
      },
      {
        id: "lesson-terror-4",
        title: "Tensión Narrativa",
        description: "Mantener al lector en suspense",
        content: "La tensión se construye gradualmente, incluso en textos muy cortos...",
        format: "microrrelatos", 
        theme: "terror",
        order: 4,
        totalLessons: 7
      },
      {
        id: "lesson-terror-5",
        title: "El Giro Final Inesperado",
        description: "Técnicas para sorprender al lector",
        content: "En los microrrelatos de terror, el giro final es crucial. Debe sorprender al lector y recontextualizar toda la historia en las últimas líneas.",
        format: "microrrelatos",
        theme: "terror", 
        order: 5,
        totalLessons: 7
      },
      {
        id: "lesson-terror-6",
        title: "Edición y Refinamiento",
        description: "Pulir tu microrrelato de terror",
        content: "La edición en microrrelatos es crucial. Cada palabra debe tener un propósito...",
        format: "microrrelatos",
        theme: "terror",
        order: 6,
        totalLessons: 7
      },
      {
        id: "lesson-terror-7",
        title: "Proyecto Final", 
        description: "Crea tu propio microrrelato de terror",
        content: "Aplicando todo lo aprendido, crea un microrrelato de terror original...",
        format: "microrrelatos",
        theme: "terror",
        order: 7,
        totalLessons: 7
      }
    ];

    terrorLessons.forEach(lesson => {
      this.lessons.set(lesson.id, { ...lesson, createdAt: new Date() } as Lesson);
    });

    // Create exercises for current lesson
    const currentExercise: Exercise = {
      id: "exercise-terror-5-1",
      lessonId: "lesson-terror-5",
      prompt: "Escribe un microrrelato de terror (máximo 100 palabras) sobre alguien que encuentra fotos de sí mismo en lugares donde nunca ha estado. Incluye un giro final inesperado.",
      instructions: "Utiliza las técnicas aprendidas sobre giros finales. Recuerda que cada palabra cuenta en un microrrelato.",
      maxWords: 100,
      minWords: 50
    };
    this.exercises.set(currentExercise.id, currentExercise);

    // Set user progress
    for (let i = 1; i <= 4; i++) {
      const progress: UserProgress = {
        id: `progress-${i}`,
        userId: defaultUser.id,
        lessonId: `lesson-terror-${i}`,
        completed: true,
        completedAt: new Date()
      };
      this.userProgress.set(progress.id, progress);
    }

    // Current lesson in progress
    const currentProgress: UserProgress = {
      id: "progress-5",
      userId: defaultUser.id,
      lessonId: "lesson-terror-5",
      completed: false,
      completedAt: null
    };
    this.userProgress.set(currentProgress.id, currentProgress);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async getAllLessons(): Promise<Lesson[]> {
    return Array.from(this.lessons.values());
  }

  async getLessonsByFormat(format: string): Promise<Lesson[]> {
    return Array.from(this.lessons.values()).filter(lesson => lesson.format === format);
  }

  async getLessonsByTheme(theme: string): Promise<Lesson[]> {
    return Array.from(this.lessons.values())
      .filter(lesson => lesson.theme === theme)
      .sort((a, b) => a.order - b.order);
  }

  async getLesson(id: string): Promise<Lesson | undefined> {
    return this.lessons.get(id);
  }

  async createLesson(insertLesson: InsertLesson): Promise<Lesson> {
    const id = randomUUID();
    const lesson: Lesson = { ...insertLesson, id };
    this.lessons.set(id, lesson);
    return lesson;
  }

  async getExercisesByLesson(lessonId: string): Promise<Exercise[]> {
    return Array.from(this.exercises.values()).filter(ex => ex.lessonId === lessonId);
  }

  async getExercise(id: string): Promise<Exercise | undefined> {
    return this.exercises.get(id);
  }

  async createExercise(insertExercise: InsertExercise): Promise<Exercise> {
    const id = randomUUID();
    const exercise: Exercise = { ...insertExercise, id };
    this.exercises.set(id, exercise);
    return exercise;
  }

  async getUserProgress(userId: string): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values()).filter(p => p.userId === userId);
  }

  async getUserProgressByLesson(userId: string, lessonId: string): Promise<UserProgress | undefined> {
    return Array.from(this.userProgress.values()).find(p => 
      p.userId === userId && p.lessonId === lessonId
    );
  }

  async updateUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    const existing = await this.getUserProgressByLesson(insertProgress.userId, insertProgress.lessonId);
    
    if (existing) {
      const updated: UserProgress = {
        ...existing,
        completed: insertProgress.completed ?? existing.completed,
        completedAt: insertProgress.completed ? new Date() : existing.completedAt
      };
      this.userProgress.set(existing.id, updated);
      return updated;
    } else {
      const id = randomUUID();
      const progress: UserProgress = {
        ...insertProgress,
        id,
        completedAt: insertProgress.completed ? new Date() : null
      };
      this.userProgress.set(id, progress);
      return progress;
    }
  }

  async getUserExercises(userId: string): Promise<UserExercise[]> {
    return Array.from(this.userExercises.values()).filter(ex => ex.userId === userId);
  }

  async getUserExercisesByExercise(userId: string, exerciseId: string): Promise<UserExercise[]> {
    return Array.from(this.userExercises.values()).filter(ex => 
      ex.userId === userId && ex.exerciseId === exerciseId
    );
  }

  async saveUserExercise(insertExercise: InsertUserExercise): Promise<UserExercise> {
    const id = randomUUID();
    const wordCount = insertExercise.content.trim().split(/\s+/).length;
    const exercise: UserExercise = {
      ...insertExercise,
      id,
      wordCount,
      submittedAt: new Date(),
      feedback: null
    };
    this.userExercises.set(id, exercise);
    return exercise;
  }

  async updateUserExercise(id: string, content: string, wordCount: number): Promise<UserExercise | undefined> {
    const existing = this.userExercises.get(id);
    if (!existing) return undefined;

    const updated: UserExercise = {
      ...existing,
      content,
      wordCount,
      submittedAt: new Date()
    };
    this.userExercises.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
