export interface BasicInfo {
  url: string;
  name: string;
}

export interface Ability {
  slot: number;
  is_hidden: boolean;
  ability: BasicInfo;
}

export interface Stat {
  stat: BasicInfo;
  effort: number;
  base_stat: number;
}

export interface VersionGroupDetail {
  move_learn_method: BasicInfo;
  level_learned_at: number;
  version_group: BasicInfo;
}

export interface Move {
  version_group_details: VersionGroupDetail[];
  move: BasicInfo;
}

export interface Sprites {
  back_female?: any;
  back_shiny_female?: any;
  back_default: string;
  front_female?: any;
  front_shiny_female?: any;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GameIndice {
  version: BasicInfo;
  game_index: number;
}

export interface Type {
  slot: number;
  type: BasicInfo;
}

export interface PokemonModel {
  forms: BasicInfo[];
  abilities: Ability[];
  stats: Stat[];
  name: string;
  weight: number;
  moves: Move[];
  sprites: Sprites;
  held_items: any[];
  location_area_encounters: string;
  height: number;
  is_default: boolean;
  species: BasicInfo;
  id: number;
  order: number;
  game_indices: GameIndice[];
  base_experience: number;
  types: Type[];
}

export interface PokemonListModel {
  count: number;
  next: string;
  previous: string;
  results: PokemonModel[];
}
