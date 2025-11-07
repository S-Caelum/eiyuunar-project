import { create } from "zustand";

type NewCharacterStore = {
  name: string;
  alias: string;
  description: string;
  gender: string;
  race: string;
  birthday: string;

  health: number;
  mana: number;
  wayre: number;
  speed: number;
  actionsCount: number;
  martial: {
    name: string;
    experience: number;
  };
  magic: {
    name: string;
    experience: number;
  };
  changeParam: <K extends keyof NewCharacterStore>(
    key: K,
    v: NewCharacterStore[K],
  ) => void;
};

export const useNewCharacterStore = create<NewCharacterStore>((set) => ({
  name: "",
  alias: "",
  description: "",
  gender: "",
  race: "",
  birthday: "",
  health: 2800,
  mana: 100,
  wayre: 0,
  speed: 5,
  actionsCount: 1,
  martial: {
    name: "",
    experience: 0,
  },
  magic: {
    name: "",
    experience: 0,
  },
  changeParam: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
}));
