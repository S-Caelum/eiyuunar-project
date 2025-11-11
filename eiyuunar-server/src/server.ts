import express from "express";
import { PrismaClient } from "./generated/prisma";
import GenderRouter from "./routers/gender.routes";
import EffectComponentRouter from "./routers/effect-component.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", GenderRouter);
app.use("/api", EffectComponentRouter);

app.get("/", (reuqest, response) => {
  const prikol = "COCITE";

  console.log(prikol);
  response.json(prikol);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export const prisma = new PrismaClient();
