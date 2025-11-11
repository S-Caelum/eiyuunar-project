import { Router } from "express";
import * as smth from "../controllers/gender.controller";

const GenderRouter: Router = Router();

GenderRouter.get("/gender", smth.GetGenders);
GenderRouter.put("/gender", smth.NewGender);
GenderRouter.delete("/gender", smth.RemoveGender);

export default GenderRouter;
