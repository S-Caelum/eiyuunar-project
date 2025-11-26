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

export async function CreateEffectSYS(req: Request, res: Response) {
  const effect = await prisma.effect.create({
    data: {
      name: "Рассовый бонус - Фольвин",
      description:
        "Являясь хищниками в своём прошлом, Фольвины обладают острым обонянием, что позволяет им легко различать даже самые неотличимые запахи. Пытаясь как можно быстрее приблизиться к остальным расам, они стали мастерами обмана.",
      duration: 0,
      maxStacks: 1,
      isStackable: false,
      components: {
        connect: [
          { id: "6917f2d925ea71641a44da0f" },
          { id: "6917f29c8b13594488643814" },
          { id: "690f55084d929378d8e89fe1" },
        ],
      },
    },
  });
  res.json(effect);
}

export async function RemoveEffectSYS(req: Request, res: Response) {
  const effect = await prisma.effect.delete({
    where: {
      id: "6917f75d2a6ec20e677e8233",
    },
  });
  res.json(effect);
}
