// React & Next Dependencies
import React from "react";

// External Dependencies
import _ from "lodash";
import Marquee from "react-fast-marquee";
import { getPalette } from "react-palette";

// Internal Dependencies
import { HighlightCard } from "@/components/common/Card/HighlightCard";
import { pokemonData } from "@/utils/constants";

type Pokemon = {
  id: string;
  image: string;
  name: string;
  colors: {
    darkMuted: string;
    darkVibrant: string;
    lightMuted: string;
    lightVibrant: string;
    muted: string;
    vibrant: string;
  };
};

type HomeProps = {
  groupedPokemonData: Array<Array<Pokemon>>;
};

const Home = ({ groupedPokemonData }: HomeProps) => {
  return (
    <div className="h-screen overflow-hidden">
      {groupedPokemonData.map((pokemonData, index) => (
        <Marquee key={index} direction={index % 2 === 0 ? "right" : "left"}>
          {pokemonData.map((pokemon) => (
            <HighlightCard
              className="m-2"
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              colors={pokemon.colors}
            />
          ))}
        </Marquee>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  await Promise.all(
    pokemonData.map(async (pokemon) => {
      pokemon.colors = await getPalette(pokemon.image);
      return pokemon;
    })
  );

  const parsedPokemonData = _.chunk(pokemonData, 5);

  return {
    props: {
      groupedPokemonData: parsedPokemonData,
    },
  };
};
