// adding initial data to the database
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // Since we ran the command `npx prisma generate`, prismaClient knows the schema of the database

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "scp",
        email: "scp@example.com",
      },
      {
        name: "pedro",
        email: "pedro@example.com",
      },
    ],
  });
}

// Call the seed function, then close the Prisma Client connection
seed().then(() => prisma.$disconnect());
