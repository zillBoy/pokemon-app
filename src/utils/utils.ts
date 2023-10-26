// React Dependencies
import { ReactElement } from "react";

// External Dependencies
import _ from "lodash";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ** Types
type PokemonMoveAPIType = {
  move: {
    name: string;
  };
};

export type PokemonMoveType = {
  id: string;
  name: string;
  value: number;
};

export const setup = (
  jsx: ReactElement<any, string | React.JSXElementConstructor<any>>,
  props: object = {}
) => {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx, props),
  };
};

export const getTwoRandomPokemonMoves = (
  moves: PokemonMoveAPIType[],
  base: number = 1
): PokemonMoveType[] => {
  const pokemonMoves = _.sampleSize(moves, 2);
  const parsedMoves = _.map(pokemonMoves, (pokemonMove) => ({
    id: _.uniqueId("pokemon-"),
    name: _.startCase(pokemonMove.move.name.split("-").join(" ")),
    value: Math.abs(_.random(10, base - _.random(1, 23))),
  }));

  return parsedMoves;
};
