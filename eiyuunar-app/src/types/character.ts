export interface BaseCharacter {
  name: string;
  alias: string;
  description: string;
  gender: Gender;
  race: Race;
  birthday: string;
  health: number;
  mana: number;
  wayre: number;
  speed: number;
  actions: number;
  stats: Stat;
  owner: string;
}

export interface Character extends BaseCharacter {
  id: string;
  martial: MartialProficiency;
  magic: MagicProficiency;
  skills: string;
  stats: Stat;
  inventory: string;
  equipment: string;
}

export interface Gender {
  id: string;
  name: string;
}

export interface Race {
  id: string;
  name: string;
  description: string;
  icon: string | undefined;
  effects: string;
}

export interface MartialProficiency {
  id: string;
  name: string;
  experience: number;
}

export interface MagicProficiency {
  id: string;
  name: string;
  experience: number;
}

export interface Stat {
  id: string;
  constitution: number;
  endurance: number;
  speed: number;
  reaction: number;
  academics: number;
  wisdom: number;
}

export interface ComplexStat {
  id: string;
  name: string;
  formula: string;
}
