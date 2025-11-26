import { Request, Response } from "express";
import { prisma } from "../server";

export async function GetOrigins(req: Request, res: Response) {}

export async function CreateOrigin(req: Request, res: Response) {
  const origin = prisma.raceOrigin.create({
    data: {
      name: "Младший Фольвин",
      description:
        "Мастера слова и притворства, Младшие Фольвины, мало чем отличаются от людей внешне, не считая лисьи уши и их пушистые хвосты. Они используют слово и своё очарования вместо оружия и являются замечательными мастерами отступления",
      effects: {
        connect: {},
      },
    },
  });
}
