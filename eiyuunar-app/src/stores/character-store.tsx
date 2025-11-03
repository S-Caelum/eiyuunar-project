import { create } from "zustand";

type CharacterStore = {
  modifiable: boolean;

  switchMode: () => void;
};

const useCharacter = create<CharacterStore>((set) => ({
  modifiable: false,
  switchMode: () => set((state) => ({ modifiable: !state.modifiable })),
}));

export default useCharacter;
