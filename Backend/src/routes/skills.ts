import { Hono } from "hono";
import { getPrisma } from "../prisma/client";

export const skillRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

// Add a skill
skillRouter.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const { name, description, userId, type } = body;

  if (!name || !userId || !type || !["OFFERED", "WANTED"].includes(type)) {
    return c.json({ error: "Missing or invalid fields" }, 400);
  }

const existing = await prisma.skill.findFirst({
  where: { name },
});

let skill;

if (existing) {
  skill = existing;
} else {
  skill = await prisma.skill.create({
    data: {
      name,
      description,
      usersOffering: type === "OFFERED" ? { connect: { id: userId } } : undefined,
      usersWanting: type === "WANTED" ? { connect: { id: userId } } : undefined,
    },
  });
}
  return c.json(skill);
});

// Search skills
skillRouter.get("/search", async (c) => {
  const q = c.req.query("q") || "";
  const prisma = getPrisma(c.env.DATABASE_URL);

  const results = await prisma.skill.findMany({
    where: {
      name: {
        contains: q,
        mode: "insensitive",
      },
    },
    include: {
      usersOffering: true,
      usersWanting: true,
    },
  });

  return c.json(results);
});
