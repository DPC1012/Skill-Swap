// src/prisma/client.ts
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Accepts DATABASE_URL and returns an accelerated Prisma client
export const getPrisma = (DATABASE_URL: string) =>
  new PrismaClient({ datasourceUrl: DATABASE_URL }).$extends(withAccelerate());
