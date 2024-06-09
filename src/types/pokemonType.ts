export type PokemonInfoType = {
  id?: number;
  pokeName: string;
  image: string;
  imageGif?: string;
  types?: PokemonType[];
  quantity?: number;
};

export type PokemonType = {
  slot: number;
  type: { name: string; url: string };
};
