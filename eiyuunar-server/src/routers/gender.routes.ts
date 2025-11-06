import { Router } from "express";
import * as smth from "../cotroller/gender.controller"
 
export const GenderRouter: Router = Router();

GenderRouter.get("/gender", smth.GetGenders);
GenderRouter.put("/gender", smth.NewGender);
GenderRouter.delete("/gender", smth.RemoveGender);
