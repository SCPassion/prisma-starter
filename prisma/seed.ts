// adding initial data to the database
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // Since we ran the command `npx prisma generate`, prismaClient knows the schema of the database

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "scp",
        email: "scp@example.com",
        age: 30,
        isMarried: true,
        nationality: "American",
      },
      {
        name: "Alice",
        email: "alice@example.com",
        age: 25,
        isMarried: false,
        nationality: "Canadian",
      },
      {
        name: "Bob",
        email: "bob@example.com",
        age: 40,
        isMarried: true,
        nationality: "British",
      },
      {
        name: "Charlie",
        email: "charlie@example.com",
        age: 28,
        isMarried: false,
        nationality: "Australian",
      },
      {
        name: "Diana",
        email: "diana@example.com",
        age: 35,
        isMarried: true,
        nationality: "German",
      },
      {
        name: "Eva",
        email: "eva@example.com",
        age: 32,
        isMarried: false,
        nationality: "French",
      },
      {
        name: "Frank",
        email: "frank@example.com",
        age: 29,
        isMarried: true,
        nationality: "Italian",
      },
      {
        name: "Grace",
        email: "grace@example.com",
        age: 27,
        isMarried: false,
        nationality: "Spanish",
      },
      {
        name: "Henry",
        email: "henry@example.com",
        age: 38,
        isMarried: true,
        nationality: "Dutch",
      },
      {
        name: "Ivy",
        email: "ivy@example.com",
        age: 24,
        isMarried: false,
        nationality: "Swedish",
      },
    ],
  });
}

// Call the seed function, then close the Prisma Client connection
seed().then(() => prisma.$disconnect());
