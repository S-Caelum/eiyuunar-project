import { create } from 'zustand';
import type { BaseCharacter } from '../types/character';

export type ObjectKeys<T> = {
  [K in keyof T]: T[K] extends object ? K : never;
}[keyof T];

export interface NewCharacterStore extends BaseCharacter {
  changeParam: <K extends keyof NewCharacterStore>(key: K, v: NewCharacterStore[K]) => void;
  changeNested: <K extends ObjectKeys<NewCharacterStore>, T extends keyof NewCharacterStore[K]>(
    key: K,
    keyNested: T,
    v: NewCharacterStore[K][T],
  ) => void;
}

const initialState = {
  name: '',
  alias: '',
  description: '',
  gender: {
    id: '-',
    name: 'Мужской',
  },
  race: {
    id: '-',
    name: 'Человек',
    description: '',
    icon: '',
    effects: '',
  },
  birthday: '',
  health: 2800,
  mana: 100,
  wayre: 0,
  speed: 5,
  actions: 1,
  stats: {
    id: '-',
    constitution: 2,
    endurance: 2,
    speed: 2,
    reaction: 2,
    academics: 2,
    wisdom: 2,
  },
  owner: '',
};

export const useNewCharacterStore = create<NewCharacterStore>((set, get) => ({
  ...initialState,
  changeParam: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  changeNested: (key, nested, value) =>
    set((state) => {
      const currentValue = state[key];
      if (typeof currentValue === 'object' && value !== null) {
        return {
          ...state,
          [key]: {
            ...currentValue,
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
