import { Hono } from "hono";
import { getPrisma } from "../prisma/client";

export const feedbackRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

// Create feedback
feedbackRouter.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const { rating, comment, fromId, toId } = body;

  if (!fromId || !toId || !rating || rating < 1 || rating > 5) {
    return c.json({ error: "Invalid or missing fields" }, 400);
  }

  const feedback = await prisma.feedback.create({
    data: {
      rating,
      comment,
      fromId,
      toId,
    },
  });

  return c.json(feedback);
});

// Get feedback received by a user
feedbackRouter.get("/user/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");

  const feedbacks = await prisma.feedback.findMany({
    where: { toId: id },
  });

  return c.json(feedbacks);
});
