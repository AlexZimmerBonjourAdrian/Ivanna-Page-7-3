import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserExerciseSchema, insertUserProgressSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get current user (simplified - in real app would use session)
  app.get("/api/user", async (req, res) => {
    try {
      const user = await storage.getUser("user-1");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  });

  // Get all lessons
  app.get("/api/lessons", async (req, res) => {
    try {
      const format = req.query.format as string;
      const theme = req.query.theme as string;

      let lessons;
      if (theme) {
        lessons = await storage.getLessonsByTheme(theme);
      } else if (format) {
        lessons = await storage.getLessonsByFormat(format);
      } else {
        lessons = await storage.getAllLessons();
      }
      
      res.json(lessons);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lessons" });
    }
  });

  // Get specific lesson
  app.get("/api/lessons/:id", async (req, res) => {
    try {
      const lesson = await storage.getLesson(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lesson" });
    }
  });

  // Get exercises for a lesson
  app.get("/api/lessons/:lessonId/exercises", async (req, res) => {
    try {
      const exercises = await storage.getExercisesByLesson(req.params.lessonId);
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ message: "Error fetching exercises" });
    }
  });

  // Get user progress
  app.get("/api/users/:userId/progress", async (req, res) => {
    try {
      const progress = await storage.getUserProgress(req.params.userId);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user progress" });
    }
  });

  // Update user progress
  app.post("/api/users/:userId/progress", async (req, res) => {
    try {
      const validated = insertUserProgressSchema.parse({
        ...req.body,
        userId: req.params.userId
      });
      const progress = await storage.updateUserProgress(validated);
      res.json(progress);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid progress data", errors: error.errors });
      }
      res.status(500).json({ message: "Error updating progress" });
    }
  });

  // Get user exercises
  app.get("/api/users/:userId/exercises", async (req, res) => {
    try {
      const exerciseId = req.query.exerciseId as string;
      let exercises;
      
      if (exerciseId) {
        exercises = await storage.getUserExercisesByExercise(req.params.userId, exerciseId);
      } else {
        exercises = await storage.getUserExercises(req.params.userId);
      }
      
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user exercises" });
    }
  });

  // Save user exercise
  app.post("/api/users/:userId/exercises", async (req, res) => {
    try {
      const validated = insertUserExerciseSchema.parse({
        ...req.body,
        userId: req.params.userId
      });
      const exercise = await storage.saveUserExercise(validated);
      res.json(exercise);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid exercise data", errors: error.errors });
      }
      res.status(500).json({ message: "Error saving exercise" });
    }
  });

  // Update user exercise
  app.put("/api/exercises/:id", async (req, res) => {
    try {
      const { content } = req.body;
      if (!content || typeof content !== 'string') {
        return res.status(400).json({ message: "Content is required" });
      }
      
      const wordCount = content.trim().split(/\s+/).length;
      const exercise = await storage.updateUserExercise(req.params.id, content, wordCount);
      
      if (!exercise) {
        return res.status(404).json({ message: "Exercise not found" });
      }
      
      res.json(exercise);
    } catch (error) {
      res.status(500).json({ message: "Error updating exercise" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
