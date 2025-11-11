import RequestLogger from "../loggers/da-hui-znaet";
import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";

export async function GetRaces() {
  const races = await prisma.race.findMany({
    include: {
      effects: {
        include: {
          components: true,
        },
      },
    },
  });
}

export async function NewRace() {}

export async function RemoveRace() {}
