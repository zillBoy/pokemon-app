import { POKEMON_TYPES } from "./constants";

export const checkAndGetPokemonType = (type: string) => {
  let pokemonType = POKEMON_TYPES.find((pokemonType) => pokemonType === type);

  if (pokemonType === undefined) {
    pokemonType = POKEMON_TYPES[0]; // colorless
  }

  return pokemonType;
};

export const IsWindow = typeof window !== "undefined";
