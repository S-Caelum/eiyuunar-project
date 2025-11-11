import { Request, Response } from "express";
import { prisma } from "../server";
import RequestLogger from "../loggers/da-hui-znaet";

export async function GetEffects(req: Request, res: Response) {
  console.log("Getting effects:");
  try {
    const effects = await prisma.effect.findMany();
    RequestLogger(effects);
    res.json(effects);
  } catch (err) {
    console.log("НУ И ДЕБИИИЛ \n", err);
  }
}

export async function CreateEffect(req: Request, res: Response) {
  const { name, description, duration, maxStacks, isStackable, componentIDs } =
    req.body;
  console.log("Creating effect");
  try {
    const effect = await prisma.effect.create({
      data: {
        name: name,
        description: description,
        duration: duration,
        maxStacks: maxStacks,
        isStackable: isStackable,
        components: {
          connect: componentIDs,
        },
      },
    });
    console.log(effect);
    res.json(effect);
  } catch (err) {
    console.log("НУ И КОООНЧ \n", err);
  }
}
