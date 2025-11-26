import express from "express";
import { PrismaClient } from "./generated/prisma";
import GenderRouter from "./routers/gender.routes";
import EffectComponentRouter from "./routers/effect-component.routes";
import EffectRouter from "./routers/effect-router";

const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", GenderRouter);
app.use("/api", EffectComponentRouter);
app.use("/api", EffectRouter);

app.get("/", (reuqest, response) => {
  const prikol = "COCITE";

  console.log(prikol);
  response.json(prikol);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export const prisma = new PrismaClient();
