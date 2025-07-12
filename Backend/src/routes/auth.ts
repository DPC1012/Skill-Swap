import { Hono } from "hono";
import { getPrisma } from "../prisma/client";
import { sign } from "hono/jwt";

export const authRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Signup route
authRouter.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return c.json({ error: "Missing fields" }, 400);
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return c.json({ error: "Email already exists" }, 400);
  }

  // ⚠️ Storing plain password (unsafe for production)
  const user = await prisma.user.create({
    data: { name, email, password },
  });

  const token = await sign({ id: user.id, role: user.role }, c.env.JWT_SECRET);
  return c.json({ token, user });
});

// Login route
authRouter.post("/login", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const body = await c.req.json();

  const { email, password } = body;

  if (!email || !password) {
    return c.json({ error: "Missing fields" }, 400);
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.password !== password) {
    return c.json({ error: "Invalid credentials" }, 401);
  }

  const token = await sign({ id: user.id, role: user.role }, c.env.JWT_SECRET);
  return c.json({ token, user });
});
