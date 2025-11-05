type Character = {
  id: string;
  name: string;
  alias: string;
  description: string;
  gender: Gender;
  race: Race;
  birthday: string;
  maxHealth: number;
  health: number;
  maxMana: number;
  mana: number;
  wayre: number;
  speed: number;
  actions: number;
  martial: MartialProficiency;
  magic: MagicProficiency;
  skills: string;
  stats: string;
  owner: string;
  inventory: string;
  equipment: string;
};

type Gender = {
  id: string;
  name: string;
};

type Race = {
  id: string;
  name: string;
  description: string;
  icon: string | undefined;
  effects: string;
};

type MartialProficiency = {
  id: string;
  name: string;
  experience: number;
};

type MagicProficiency = {
  id: string;
  name: string;
  experience: number;
};
