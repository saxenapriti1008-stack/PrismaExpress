import express from "express";
import { PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch(error) {
    if(error instanceof Error){
      res.status(500).send(error.message);
    }
    res.status(500).send("An unexpected error occurred");
  }
});

app.listen(3000,() => {
  console.log("Server is running on port 3000");
});