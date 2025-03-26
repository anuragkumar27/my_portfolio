import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        data: message
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: validationError.message
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An unknown error occurred"
        });
      }
    }
  });
  
  const httpServer = createServer(app);
  return httpServer;
}
