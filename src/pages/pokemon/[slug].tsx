// React Dependencies
import React from "react";

// Internal Dependencies
import { ButtonIcon } from "@/components/common/Button/ButtonIcon";
import { PokemonCard } from "@/components/common/Card/PokemonCard";

const Pokemon = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="w-10/12 mx-auto">
        <div className="flex items-end justify-center sm:justify-start">
          <img
            src="/images/pokemon-app.png"
            className="mt-2 h-14"
            alt="Logo of pokemon-app by Aleksandar Savić / almigor"
          />
          <h1 className="px-2 mb-2 text-2xl font-bold text-center sm:text-left">
            Pokémon-App
          </h1>
        </div>
      </div>

      <div className="mx-auto">
        <PokemonCard />
      </div>

      <div className="flex items-center justify-center">
        <ButtonIcon
          className="justify-center my-6 bg-lightest-gray"
          icon="/svg/refresh-dark.svg"
          alt="cross"
          iconDirection="left"
        >
          <span className="py-1 ml-2 text-xl text-darker-gray">
            Re-Generate
          </span>
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Pokemon;
