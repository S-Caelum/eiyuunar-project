import { prisma } from "../server";
import { Request, Response, NextFunction } from "express";
import RequestLogger from "../loggers/da-hui-znaet";

export async function GetEffectComponents(req: Request, res: Response) {
  console.log("Getting effect components");
  try {
    const effect = await prisma.effectComponent.findMany();
    RequestLogger(effect);
    res.json(effect);
  } catch (err) {
    console.log("НУ И ЕБЛААААН \n", err);
  }
}

export async function NewEffectComponent(req: Request, res: Response) {
  const { name, value, target, modifier } = req.body;
  console.log("Creating effect:");
  try {
    const effect = await prisma.effectComponent.create({
      data: {
        name: name,
        value: value,
        target: target,
        modifier: modifier,
      },
    });
    RequestLogger(effect);
    res.json(effect);
  } catch (err) {
    console.log("НУ И ЕБЛАААААААН \n", err);
  }
}

export async function DeleteEffectComponent(req: Request, res: Response) {
  const { id } = req.body;
  console.log("Deleting effect:");
  try {
    const effect = await prisma.effectComponent.delete({
      where: {
        id: id,
      },
    });
    RequestLogger(effect);
    res.json(effect);
  } catch (err) {
    console.log("НУ И ЕБЛАААААААН \n", err);
  }
}

// Сюда не смотрим, это я для себя делаю чтоб потом быстро эффекты клепать | пишу спустя пару часов. ебать я даун ебаный там createMany метод есть
export async function NewEffectComponentBulk(req: Request, res: Response) {
  const rows = [];
  const name = "SPL MOD";
  console.log(`CREATING FOLLOFWING INSTANCES OF ${name} EFFECT`);
  for (let i = 1; i < 2; i++) {
    const component = await prisma.effectComponent.create({
      data: {
        name: `${name} up`,
        value: i,
        target: "SPELL MODIFIER",
        modifier: "ABSOLUTE",
      },
    });
    rows.push(component);
  }
  RequestLogger(rows);
  res.json(rows);
}
