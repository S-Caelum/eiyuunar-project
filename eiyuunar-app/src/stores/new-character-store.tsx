import { create } from 'zustand';

type Stat = {
  constitution: number;
  endurance: number;
  speed: number;
  reaction: number;
  academics: number;
  wisdom: number;
};

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
  stats: Stat;
  changeParam: <K extends keyof NewCharacterStore>(key: K, v: NewCharacterStore[K]) => void;
  changeNested: <K extends keyof NewCharacterStore, T extends keyof NewCharacterStore[K]>(
    key: K,
    keyNested: T,
    v: NewCharacterStore[K][T],
  ) => void;
};

export const useNewCharacterStore = create<NewCharacterStore>((set) => ({
  name: '',
  alias: '',
  description: '',
  gender: '',
  race: '',
  birthday: '',
  health: 2800,
  mana: 100,
  wayre: 0,
  speed: 5,
  actionsCount: 1,
  martial: {
    name: '',
    experience: 0,
  },
  magic: {
    name: '',
    experience: 0,
  },
  stats: {
    constitution: 2,
    endurance: 2,
    speed: 2,
    reaction: 2,
    academics: 2,
    wisdom: 2,
  },
  changeParam: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  changeNested: (key, nested, value) =>
    set((state) => {
      const cval = state[key];
      if (typeof cval === 'object' && cval !== null) {
        return {
          ...state,
          [key]: {
            ...cval,
            [nested]: value,
          },
        };
      } else {
        return {
          ...state,
        };
      }
    }),
}));
