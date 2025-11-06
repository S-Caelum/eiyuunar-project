import { Prisma } from "@prisma/client";
import type { Request, Response, NextFunction } from "express";
import { prisma } from "../server";

export async function name(req: Request, res: Response, next: NextFunction) {} // Get, Post, Put, Delete

export async function GetGenders(req: Request, res: Response) {
  console.log("Getting genders: ");
  const gender = await prisma.gender.findMany({
    select: { id: true, name: true },
  });
  res.json(gender);
}

export async function NewGender(req: Request, res: Response) {
    console.log("Creating gender");

    const { name } = req.body;

    const NewGender = await prisma.gender.create({data: {name: name}})
    res.json(NewGender);
}

export async function RemoveGender(req: Request, res: Response) {
    console.log("Deleting gender");

    const { genderID } = req.body;

    try {
        const gender = await prisma.gender.delete({
            where: { id: genderID }
        });
        res.json(gender);
    } catch (error) {
       console.log("Nu ty i dolbayob - ", error);
    }
}
