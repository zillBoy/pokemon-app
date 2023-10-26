// React Dependencies
import React, { useState, useEffect } from "react";

// External Dependencie
import _ from "lodash";
import { getPalette, PaletteColors } from "react-palette";

// Internal Dependencie
import { checkAndGetPokemonType } from "@/utils/checks";
import { getTwoRandomPokemonMoves, PokemonMoveType } from "@/utils/utils";

type PokemonCardType = {
  pokemon: any;
};

export const PokemonCard = ({ pokemon }: PokemonCardType) => {
  const [loading, setLoading] = useState(true);
  const [colorPalette, setColorPalette] = useState<PaletteColors>({});
  const [image, setImage] = useState<string>("");
  const [moves, setMoves] = useState<PokemonMoveType[]>([]);

  const initialLoading = async () => {
    const pokemonType = checkAndGetPokemonType(pokemon.types[0].type.name);
    const img = `/images/pokemon-type/${pokemonType}.png`;
    const palette = await getPalette(
      pokemon.sprites.other["official-artwork"].front_default
    );
    const pokemonRandomMoves = getTwoRandomPokemonMoves(
      pokemon.moves,
      pokemon.stats[0].base_stat
    );

    setMoves(pokemonRandomMoves);
    setColorPalette(palette);
    setImage(img);
    setLoading(false);
  };

  useEffect(() => {
    initialLoading();
  }, []);

  if (loading) return null;
  return (
    <div
      style={{ backgroundColor: `${colorPalette.lightVibrant}66` }}
      className="relative rounded-lg border-12 w-80 h-96 border-yellow"
    >
      {/* Header */}
      <div className="">
        <div className="flex justify-between pr-1 py-0.5">
          <div className="relative flex">
            <span className="-m-1 h-5 rounded-lg py-0.5 px-2.5 inline text-xs italic font-bold bg-slate-300 text-gray text-shadow-sm shadow-white">
              BASIC
            </span>
            <p className="ml-1 font-semibold">{_.capitalize(pokemon.name)}</p>
          </div>
          <div className="flex">
            <span className="self-end font-semibold text-xxs">HP</span>
            <p className="text-lg font-semibold">
              {pokemon.stats[0].base_stat}
            </p>
            {!_.isEmpty(image) && (
              <img
                className="mb-1 ml-0.5 h-5 w-5 self-end"
                src={image}
                alt="energy"
              />
            )}
          </div>
        </div>
      </div>

      {/* Image */}
      <div
        style={{
          backgroundColor: `${colorPalette.vibrant}55`,
          minHeight: "10.663rem", // 170.6px
        }}
        className="mx-4 border-4 rounded-lg border-yellow"
      >
        <img
          className="w-8/12 mx-auto"
          src={pokemon.sprites.other["official-artwork"].front_default}
        />
      </div>

      {/* Moves */}
      <div>
        {moves.map((move) => (
          <div key={move.id} className="flex justify-between mx-4 my-4">
            <p className="font-semibold">{move.name}</p>
            <p className="font-semibold">{move.value}</p>
          </div>
        ))}
      </div>

      <p className="absolute flex justify-center w-full -bottom-3 text-xxss">
        &copy; {new Date().getFullYear()} Pokémon / Nintendo / Creatures / GAME
        FREAK
      </p>
    </div>
  );
};
