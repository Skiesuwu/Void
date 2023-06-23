import { PrismaClient } from "@prisma/client";

export function initDatabase() {
  return new PrismaClient();
}
