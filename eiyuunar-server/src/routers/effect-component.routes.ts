import { Router } from "express";
import * as EffectComponent from "../controllers/effect-component.controller";

const EffectComponentRouter: Router = Router();

EffectComponentRouter.get(
  "/effect-component",
  EffectComponent.GetEffectComponents,
);
EffectComponentRouter.post(
  "/effect-component",
  EffectComponent.NewEffectComponent,
);
EffectComponentRouter.post(
  "/effect-component/bulk",
  EffectComponent.NewEffectComponentBulk,
);
EffectComponentRouter.delete(
  "/effect-component",
  EffectComponent.DeleteEffectComponent,
);

export default EffectComponentRouter;
