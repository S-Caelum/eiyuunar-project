export type Effect = {
  id: string;
  name: string;
  description: string;

  duration: number;
  maxStacks: number;
  isStackable: boolean;
};

type EffectConponent = {
  id: string;
};
