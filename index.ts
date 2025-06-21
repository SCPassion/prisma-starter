import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient(); // Initialize Prisma Client

app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: { isMarried: true, age: { gt: 30 } },
  }); // Fetch all users from the database
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
