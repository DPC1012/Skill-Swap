import { Hono } from "hono";
import { getPrisma } from "../prisma/client";

export const swapRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

// Create swap request
swapRouter.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const { senderId, receiverId, skill } = body;

  if (!senderId || !receiverId || !skill) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const swap = await prisma.swap.create({
    data: {
      senderId,
      receiverId,
      skill,
    },
  });

  return c.json(swap);
});

// Accept or reject swap
swapRouter.put("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");
  const status = c.req.query("status");

  if (!status || (status !== "ACCEPTED" && status !== "REJECTED")) {
    return c.json({ error: "Invalid or missing status. Must be ACCEPTED or REJECTED." }, 400);
  }

  const updated = await prisma.swap.update({
    where: { id },
    data: { status },
  });

  return c.json(updated);
});


// Delete pending swap
swapRouter.delete("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");

  const swap = await prisma.swap.findUnique({ where: { id } });

  if (!swap || swap.status !== "PENDING") {
    return c.json({ error: "Only pending swaps can be deleted" }, 400);
  }

  await prisma.swap.delete({ where: { id } });

  return c.json({ message: "Swap deleted" });
});
