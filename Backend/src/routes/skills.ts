import { Hono } from "hono";
import { getPrisma } from "../prisma/client";

export const skillRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

// POST /skills - Add a skill
skillRouter.post("/", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const { name, description, userId, type } = await c.req.json();

  if (!name || !userId || !type || !["OFFERED", "WANTED"].includes(type)) {
    return c.json(
      { error: "Missing or invalid fields. 'name', 'userId', and valid 'type' required." },
      400
    );
  }

  // Check if skill already exists
  const existingSkill = await prisma.skill.findFirst({ where: { name } });

  const skill = existingSkill
    ? await prisma.skill.update({
        where: { id: existingSkill.id },
        data: {
          usersOffering: type === "OFFERED" ? { connect: { id: userId } } : undefined,
          usersWanting: type === "WANTED" ? { connect: { id: userId } } : undefined,
        },
      })
    : await prisma.skill.create({
        data: {
          name,
          description,
          usersOffering: type === "OFFERED" ? { connect: { id: userId } } : undefined,
          usersWanting: type === "WANTED" ? { connect: { id: userId } } : undefined,
        },
      });

  return c.json(skill);
});

// GET /skills/search?q=... - Search for skills
skillRouter.get("/search", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const query = c.req.query("q") || "";

  const skills = await prisma.skill.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    include: {
      usersOffering: true,
      usersWanting: true,
    },
  });

  return c.json(skills);
});
