// Internal Dependencies
import { checkAndGetPokemonType } from "../../src/utils/checks";

describe("checks", () => {
  describe("checkAndGetPokemonType()", () => {
    it('returns "dragon" if pokemonType "dragon" is passed', () => {
      const pokemonType = "dragon";
      const resultType = checkAndGetPokemonType(pokemonType);

      expect(resultType).toEqual(pokemonType);
    });

    it('return "colorless" if pokemonType "abc" is passed', () => {
      const pokemonType = "abc";
      const resultType = checkAndGetPokemonType(pokemonType);

      expect(resultType).toEqual("colorless");
    });
  });
});
