import { Router } from "express";
import {
  CreateEffectSYS,
  RemoveEffectSYS,
} from "../controllers/effect.controller";

const EffectRouter: Router = Router();

EffectRouter.post("/effect/sys", CreateEffectSYS);
EffectRouter.delete("/effect/sys", RemoveEffectSYS);

export default EffectRouter;
