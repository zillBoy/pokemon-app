// React Dependencies
import React, { useState, useEffect } from "react";

// External Dependencie
import _ from "lodash";

import { mankeyPokemon as pokemon } from "@/utils/constants";

export const PokemonCard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // setLoaded(true)
  }, []);

  if (loaded) return null;
  return (
    <div className="relative rounded-lg border-12 w-80 h-96 border-yellow">
      <div className="bg-orange-100">
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
              <img
                className="mb-1 ml-0.5 h-5 w-5 self-end"
                src={"/images/pokemon-type/fighting.png"}
                alt="energy"
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mx-4 bg-orange-200 border-4 rounded-lg border-yellow">
          <img
            className="w-8/12 mx-auto"
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
        </div>
      </div>

      <p className="absolute flex justify-center w-full -bottom-3 text-xxss">
        &copy; 2022 Pokémon / Nintendo / Creatures / GAME FREAK
      </p>
    </div>
  );
};
