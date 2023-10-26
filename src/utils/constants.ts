import type { PaletteColors } from "react-palette";

export const GET_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/";

export type PokemonType = {
  id: string;
  image: string;
  name: string;
  colors: PaletteColors;
};

export const pokemonData: Array<PokemonType> = [
  {
    id: "charizard-id",
    image: "./public/images/pokemon/6.png",
    name: "Charizard",
    colors: {},
  },
  {
    id: "pikachu-id",
    image: "./public/images/pokemon/25.png",
    name: "Pikachu",
    colors: {},
  },
  {
    id: "arceus-id",
    image: "./public/images/pokemon/493.png",
    name: "Arceus",
    colors: {},
  },
  {
    id: "leafeon-id",
    image: "./public/images/pokemon/470.png",
    name: "Leafeon",
    colors: {},
  },
  {
    id: "grovyle-id",
    image: "./public/images/pokemon/253.png",
    name: "Grovyle",
    colors: {},
  },
  {
    id: "ditto-id",
    image: "./public/images/pokemon/132.png",
    name: "Ditto",
    colors: {},
  },
  {
    id: "rapidash-id",
    image: "./public/images/pokemon/78.png",
    name: "Rapidash",
    colors: {},
  },
  {
    id: "mewtwo-id",
    image: "./public/images/pokemon/150.png",
    name: "Mewtwo",
    colors: {},
  },
  {
    id: "zapdos-id",
    image: "./public/images/pokemon/145.png",
    name: "Zapdos",
    colors: {},
  },
  {
    id: "breloom",
    image: "./public/images/pokemon/286.png",
    name: "Breloom",
    colors: {},
  },
  {
    id: "lapras-id",
    image: "./public/images/pokemon/131.png",
    name: "Lapras",
    colors: {},
  },
  {
    id: "lilligant-id",
    image: "./public/images/pokemon/549.png",
    name: "Lilligant",
    colors: {},
  },
  {
    id: "terrakion-id",
    image: "./public/images/pokemon/639.png",
    name: "Terrakion",
    colors: {},
  },
  {
    id: "rayquaza-id",
    image: "./public/images/pokemon/384.png",
    name: "Rayquaza",
    colors: {},
  },
  {
    id: "annihilape-id",
    image: "./public/images/pokemon/979.png",
    name: "Annihilape",
    colors: {},
  },
  {
    id: "zamazenta-id",
    image: "./public/images/pokemon/889.png",
    name: "Zamazenta",
    colors: {},
  },
  {
    id: "kyurem-id",
    image: "./public/images/pokemon/646.png",
    name: "Kyurem",
    colors: {},
  },
  {
    id: "sandslash-id",
    image: "./public/images/pokemon/28.png",
    name: "Sandslash",
    colors: {},
  },
  {
    id: "milotic-id",
    image: "./public/images/pokemon/350.png",
    name: "Milotic",
    colors: {},
  },
  {
    id: "hitmontop-id",
    image: "./public/images/pokemon/237.png",
    name: "Hitmontop",
    colors: {},
  },
];

export const POKEMON_TYPES = [
  "colorless",
  "darkness",
  "dragon",
  "fairy",
  "fighting",
  "grass",
  "lightning",
  "metal",
  "psychic",
  "water",
];
