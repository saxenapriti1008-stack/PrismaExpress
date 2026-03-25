import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.createMany({
    data: [{
      name: "Alice",
      email: "alice@example.com",
      languages: "English, Spanish",
      age: 30
    }]
  });
  console.log(user);
}

seed().then(() => prisma.$disconnect());

