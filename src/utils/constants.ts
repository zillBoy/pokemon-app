import type { PaletteColors } from "react-palette";

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

// Only for testing, remove it after done

export const mankeyPokemon =
  // 20231023153022
  // https://pokeapi.co/api/v2/pokemon/mankey

  {
    abilities: [
      {
        ability: {
          name: "vital-spirit",
          url: "https://pokeapi.co/api/v2/ability/72/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "anger-point",
          url: "https://pokeapi.co/api/v2/ability/83/",
        },
        is_hidden: false,
        slot: 2,
      },
      {
        ability: {
          name: "defiant",
          url: "https://pokeapi.co/api/v2/ability/128/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 61,
    forms: [
      {
        name: "mankey",
        url: "https://pokeapi.co/api/v2/pokemon-form/56/",
      },
    ],
    game_indices: [
      {
        game_index: 57,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/",
        },
      },
      {
        game_index: 57,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/",
        },
      },
      {
        game_index: 57,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/",
        },
      },
      {
        game_index: 56,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/",
        },
      },
    ],
    height: 5,
    held_items: [
      {
        item: {
          name: "payapa-berry",
          url: "https://pokeapi.co/api/v2/item/170/",
        },
        version_details: [
          {
            rarity: 5,
            version: {
              name: "diamond",
              url: "https://pokeapi.co/api/v2/version/12/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "pearl",
              url: "https://pokeapi.co/api/v2/version/13/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version/14/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "heartgold",
              url: "https://pokeapi.co/api/v2/version/15/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "soulsilver",
              url: "https://pokeapi.co/api/v2/version/16/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "black",
              url: "https://pokeapi.co/api/v2/version/17/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "white",
              url: "https://pokeapi.co/api/v2/version/18/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "black-2",
              url: "https://pokeapi.co/api/v2/version/21/",
            },
          },
          {
            rarity: 5,
            version: {
              name: "white-2",
              url: "https://pokeapi.co/api/v2/version/22/",
            },
          },
        ],
      },
    ],
    id: 56,
    is_default: true,
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/56/encounters",
    moves: [
      {
        move: {
          name: "karate-chop",
          url: "https://pokeapi.co/api/v2/move/2/",
        },
        version_group_details: [
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 11,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 13,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "mega-punch",
          url: "https://pokeapi.co/api/v2/move/5/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
        ],
      },
      {
        move: {
          name: "pay-day",
          url: "https://pokeapi.co/api/v2/move/6/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "fire-punch",
          url: "https://pokeapi.co/api/v2/move/7/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "ice-punch",
          url: "https://pokeapi.co/api/v2/move/8/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder-punch",
          url: "https://pokeapi.co/api/v2/move/9/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "scratch",
          url: "https://pokeapi.co/api/v2/move/10/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "mega-kick",
          url: "https://pokeapi.co/api/v2/move/25/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
        ],
      },
      {
        move: {
          name: "headbutt",
          url: "https://pokeapi.co/api/v2/move/29/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "body-slam",
          url: "https://pokeapi.co/api/v2/move/34/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "take-down",
          url: "https://pokeapi.co/api/v2/move/36/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "thrash",
          url: "https://pokeapi.co/api/v2/move/37/",
        },
        version_group_details: [
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 51,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 51,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 51,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 51,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 46,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 51,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 51,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 29,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "double-edge",
          url: "https://pokeapi.co/api/v2/move/38/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
        ],
      },
      {
        move: {
          name: "leer",
          url: "https://pokeapi.co/api/v2/move/43/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "submission",
          url: "https://pokeapi.co/api/v2/move/66/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
        ],
      },
      {
        move: {
          name: "low-kick",
          url: "https://pokeapi.co/api/v2/move/67/",
        },
        version_group_details: [
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 6,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "counter",
          url: "https://pokeapi.co/api/v2/move/68/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "seismic-toss",
          url: "https://pokeapi.co/api/v2/move/69/",
        },
        version_group_details: [
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 24,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "strength",
          url: "https://pokeapi.co/api/v2/move/70/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunderbolt",
          url: "https://pokeapi.co/api/v2/move/85/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "thunder",
          url: "https://pokeapi.co/api/v2/move/87/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "earthquake",
          url: "https://pokeapi.co/api/v2/move/89/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "dig",
          url: "https://pokeapi.co/api/v2/move/91/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "toxic",
          url: "https://pokeapi.co/api/v2/move/92/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
        ],
      },
      {
        move: {
          name: "meditate",
          url: "https://pokeapi.co/api/v2/move/96/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "rage",
          url: "https://pokeapi.co/api/v2/move/99/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
        ],
      },
      {
        move: {
          name: "mimic",
          url: "https://pokeapi.co/api/v2/move/102/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
        ],
      },
      {
        move: {
          name: "screech",
          url: "https://pokeapi.co/api/v2/move/103/",
        },
        version_group_details: [
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 41,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 32,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "double-team",
          url: "https://pokeapi.co/api/v2/move/104/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "defense-curl",
          url: "https://pokeapi.co/api/v2/move/111/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
        ],
      },
      {
        move: {
          name: "focus-energy",
          url: "https://pokeapi.co/api/v2/move/116/",
        },
        version_group_details: [
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 27,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "bide",
          url: "https://pokeapi.co/api/v2/move/117/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
        ],
      },
      {
        move: {
          name: "metronome",
          url: "https://pokeapi.co/api/v2/move/118/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "swift",
          url: "https://pokeapi.co/api/v2/move/129/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "skull-bash",
          url: "https://pokeapi.co/api/v2/move/130/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 29,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "fury-swipes",
          url: "https://pokeapi.co/api/v2/move/154/",
        },
        version_group_details: [
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 16,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 21,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 9,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 16,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 5,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rest",
          url: "https://pokeapi.co/api/v2/move/156/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rock-slide",
          url: "https://pokeapi.co/api/v2/move/157/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "substitute",
          url: "https://pokeapi.co/api/v2/move/164/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "thief",
          url: "https://pokeapi.co/api/v2/move/168/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "snore",
          url: "https://pokeapi.co/api/v2/move/173/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "curse",
          url: "https://pokeapi.co/api/v2/move/174/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "reversal",
          url: "https://pokeapi.co/api/v2/move/179/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "spite",
          url: "https://pokeapi.co/api/v2/move/180/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "protect",
          url: "https://pokeapi.co/api/v2/move/182/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "scary-face",
          url: "https://pokeapi.co/api/v2/move/184/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "mud-slap",
          url: "https://pokeapi.co/api/v2/move/189/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "foresight",
          url: "https://pokeapi.co/api/v2/move/193/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "detect",
          url: "https://pokeapi.co/api/v2/move/197/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
        ],
      },
      {
        move: {
          name: "outrage",
          url: "https://pokeapi.co/api/v2/move/200/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 47,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 47,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 47,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 44,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "endure",
          url: "https://pokeapi.co/api/v2/move/203/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "swagger",
          url: "https://pokeapi.co/api/v2/move/207/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 19,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 17,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "attract",
          url: "https://pokeapi.co/api/v2/move/213/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "sleep-talk",
          url: "https://pokeapi.co/api/v2/move/214/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "return",
          url: "https://pokeapi.co/api/v2/move/216/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "frustration",
          url: "https://pokeapi.co/api/v2/move/218/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "dynamic-punch",
          url: "https://pokeapi.co/api/v2/move/223/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
        ],
      },
      {
        move: {
          name: "encore",
          url: "https://pokeapi.co/api/v2/move/227/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "pursuit",
          url: "https://pokeapi.co/api/v2/move/228/",
        },
        version_group_details: [
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 12,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "iron-tail",
          url: "https://pokeapi.co/api/v2/move/231/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "hidden-power",
          url: "https://pokeapi.co/api/v2/move/237/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "cross-chop",
          url: "https://pokeapi.co/api/v2/move/238/",
        },
        version_group_details: [
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 31,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 39,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 37,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 22,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 22,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 22,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 22,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rain-dance",
          url: "https://pokeapi.co/api/v2/move/240/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "sunny-day",
          url: "https://pokeapi.co/api/v2/move/241/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "psych-up",
          url: "https://pokeapi.co/api/v2/move/244/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
        ],
      },
      {
        move: {
          name: "rock-smash",
          url: "https://pokeapi.co/api/v2/move/249/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "beat-up",
          url: "https://pokeapi.co/api/v2/move/251/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "uproar",
          url: "https://pokeapi.co/api/v2/move/253/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "facade",
          url: "https://pokeapi.co/api/v2/move/263/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "focus-punch",
          url: "https://pokeapi.co/api/v2/move/264/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "smelling-salts",
          url: "https://pokeapi.co/api/v2/move/265/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "taunt",
          url: "https://pokeapi.co/api/v2/move/269/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 8,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "helping-hand",
          url: "https://pokeapi.co/api/v2/move/270/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "role-play",
          url: "https://pokeapi.co/api/v2/move/272/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "revenge",
          url: "https://pokeapi.co/api/v2/move/279/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "brick-break",
          url: "https://pokeapi.co/api/v2/move/280/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "endeavor",
          url: "https://pokeapi.co/api/v2/move/283/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "secret-power",
          url: "https://pokeapi.co/api/v2/move/290/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
        ],
      },
      {
        move: {
          name: "overheat",
          url: "https://pokeapi.co/api/v2/move/315/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rock-tomb",
          url: "https://pokeapi.co/api/v2/move/317/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "aerial-ace",
          url: "https://pokeapi.co/api/v2/move/332/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "bulk-up",
          url: "https://pokeapi.co/api/v2/move/339/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "covet",
          url: "https://pokeapi.co/api/v2/move/343/",
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "natural-gift",
          url: "https://pokeapi.co/api/v2/move/363/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "u-turn",
          url: "https://pokeapi.co/api/v2/move/369/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 29,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "close-combat",
          url: "https://pokeapi.co/api/v2/move/370/",
        },
        version_group_details: [
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 49,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 36,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 33,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "payback",
          url: "https://pokeapi.co/api/v2/move/371/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "assurance",
          url: "https://pokeapi.co/api/v2/move/372/",
        },
        version_group_details: [
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 25,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 26,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "fling",
          url: "https://pokeapi.co/api/v2/move/374/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "punishment",
          url: "https://pokeapi.co/api/v2/move/386/",
        },
        version_group_details: [
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 45,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 29,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 29,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "poison-jab",
          url: "https://pokeapi.co/api/v2/move/398/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "night-slash",
          url: "https://pokeapi.co/api/v2/move/400/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "seed-bomb",
          url: "https://pokeapi.co/api/v2/move/402/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "drain-punch",
          url: "https://pokeapi.co/api/v2/move/409/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "vacuum-wave",
          url: "https://pokeapi.co/api/v2/move/410/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "focus-blast",
          url: "https://pokeapi.co/api/v2/move/411/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "shadow-claw",
          url: "https://pokeapi.co/api/v2/move/421/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "rock-climb",
          url: "https://pokeapi.co/api/v2/move/431/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "gunk-shot",
          url: "https://pokeapi.co/api/v2/move/441/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "stone-edge",
          url: "https://pokeapi.co/api/v2/move/444/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "captivate",
          url: "https://pokeapi.co/api/v2/move/445/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/",
            },
          },
        ],
      },
      {
        move: {
          name: "hone-claws",
          url: "https://pokeapi.co/api/v2/move/468/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
        ],
      },
      {
        move: {
          name: "smack-down",
          url: "https://pokeapi.co/api/v2/move/479/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "low-sweep",
          url: "https://pokeapi.co/api/v2/move/490/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "round",
          url: "https://pokeapi.co/api/v2/move/496/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "acrobatics",
          url: "https://pokeapi.co/api/v2/move/512/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "retaliate",
          url: "https://pokeapi.co/api/v2/move/514/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 15,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "final-gambit",
          url: "https://pokeapi.co/api/v2/move/515/",
        },
        version_group_details: [
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 53,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 50,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 50,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 50,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 48,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "bulldoze",
          url: "https://pokeapi.co/api/v2/move/523/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "work-up",
          url: "https://pokeapi.co/api/v2/move/526/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
        ],
      },
      {
        move: {
          name: "dual-chop",
          url: "https://pokeapi.co/api/v2/move/530/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "confide",
          url: "https://pokeapi.co/api/v2/move/590/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "power-up-punch",
          url: "https://pokeapi.co/api/v2/move/612/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/",
            },
          },
        ],
      },
      {
        move: {
          name: "power-trip",
          url: "https://pokeapi.co/api/v2/move/681/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "egg",
              url: "https://pokeapi.co/api/v2/move-learn-method/2/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
        ],
      },
      {
        move: {
          name: "stomping-tantrum",
          url: "https://pokeapi.co/api/v2/move/707/",
        },
        version_group_details: [
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/",
            },
          },
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "tutor",
              url: "https://pokeapi.co/api/v2/move-learn-method/3/",
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/",
            },
          },
          {
            level_learned_at: 43,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "brilliant-diamond-and-shining-pearl",
              url: "https://pokeapi.co/api/v2/version-group/23/",
            },
          },
          {
            level_learned_at: 40,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "lash-out",
          url: "https://pokeapi.co/api/v2/move/808/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
      {
        move: {
          name: "tera-blast",
          url: "https://pokeapi.co/api/v2/move/851/",
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: "machine",
              url: "https://pokeapi.co/api/v2/move-learn-method/4/",
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/",
            },
          },
        ],
      },
    ],
    name: "mankey",
    order: 95,
    past_abilities: [],
    past_types: [],
    species: {
      name: "mankey",
      url: "https://pokeapi.co/api/v2/pokemon-species/56/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/56.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/56.png",
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/56.png",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/56.png",
        },
      },
      versions: {
        "generation-i": {
          "red-blue": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/56.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/56.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/56.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/56.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/56.png",
          },
          yellow: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/56.png",
            back_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/56.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/56.png",
            front_gray:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/56.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/56.png",
          },
        },
        "generation-ii": {
          crystal: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/56.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/56.png",
            back_shiny_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/56.png",
            back_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/56.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/56.png",
            front_shiny_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/56.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/56.png",
          },
          gold: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/56.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/56.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/56.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/56.png",
          },
          silver: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/56.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/56.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/56.png",
            front_transparent:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/56.png",
          },
        },
        "generation-iii": {
          emerald: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/56.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/56.png",
          },
          "firered-leafgreen": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/56.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/56.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/56.png",
          },
          "ruby-sapphire": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/56.png",
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/56.png",
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/56.png",
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/56.png",
          },
        },
        "generation-iv": {
          "diamond-pearl": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/56.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/56.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/56.png",
            front_shiny_female: null,
          },
          "heartgold-soulsilver": {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/56.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/56.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/56.png",
            front_shiny_female: null,
          },
          platinum: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/56.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/56.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/56.png",
            front_shiny_female: null,
          },
        },
        "generation-v": {
          "black-white": {
            animated: {
              back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/56.gif",
              back_female: null,
              back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/56.gif",
              back_shiny_female: null,
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif",
              front_female: null,
              front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/56.gif",
              front_shiny_female: null,
            },
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/56.png",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/56.png",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/56.png",
            front_shiny_female: null,
          },
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/56.png",
            front_shiny_female: null,
          },
          "x-y": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/56.png",
            front_shiny_female: null,
          },
        },
        "generation-vii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/56.png",
            front_female: null,
          },
          "ultra-sun-ultra-moon": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/56.png",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/56.png",
            front_shiny_female: null,
          },
        },
        "generation-viii": {
          icons: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/56.png",
            front_female: null,
          },
        },
      },
    },
    stats: [
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fighting",
          url: "https://pokeapi.co/api/v2/type/2/",
        },
      },
    ],
    weight: 280,
  };
