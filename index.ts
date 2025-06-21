import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient(); // Initialize Prisma Client

app.use(express.json());

// Retrieve users
app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: { nationality: { in: ["American", "German"] } }, // Looking for users from specific nationalities
  }); // Fetch all users from the database
  res.json(users);
});

// Update a user's information
app.put("/users", async (_, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "bob@example.com" },
    data: { age: 35, isMarried: false }, // Update Bob's age and marital status
  }); // Fetch all users from the database
  res.json(updatedUser);
});

// Delete a user
app.delete("/users", async (_, res) => {
  // const deleteUser = await prisma.user.delete({
  //   where: { email: "alice@example.com" },
  // }); // Fetch all users from the database
  // res.json(deleteUser);

  const deleteUser = await prisma.user.deleteMany({
    where: { age: { gt: 30 } }, // Delete users older than 30
  }); // Fetch all users from the database
  res.json(deleteUser);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
