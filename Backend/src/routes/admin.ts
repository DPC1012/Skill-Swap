import { Hono } from "hono";
import { getPrisma } from "../prisma/client";

export const adminRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

adminRouter.put("/ban/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");

  const user = await prisma.user.update({
    where: { id },
    data: { banned: true },
  });

  return c.json(user);
});

adminRouter.get("/report/users", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const users = await prisma.user.findMany({
    include: {
      feedbackReceived: true,
      skillsOffered: true,
      skillsWanted: true,
    },
  });

  return c.json(users);
});
