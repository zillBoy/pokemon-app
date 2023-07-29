// React & Next Dependencies
import { HighlightCard } from "@/components/common/Card/HighlightCard";
import React, { useState } from "react";

// External Dependencies
import Marquee from "react-fast-marquee";
import { getPalette } from "react-palette";

// Internal Dependencies

type HomeProps = {
  pokemonData: {
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
  }[];
};

const Home = ({ pokemonData }: HomeProps) => {
  return (
    <div>
      <Marquee direction="right">
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
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const pokemonData = [
    {
      id: "charizard-id",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      name: "Charizard",
      colors: {},
    },
    {
      id: "pikachu-id",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      name: "Pikachu",
      colors: {},
    },
    {
      id: "arceus-id",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png",
      name: "Arceus",
      colors: {},
    },
    {
      id: "leafeon-id",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
      name: "Leafeon",
      colors: {},
    },
    {
      id: "grovyle-id",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png",
      name: "Grovyle",
      colors: {},
    },
  ];

  await Promise.all(
    pokemonData.map(async (pokemon) => {
      pokemon.colors = await getPalette(pokemon.image);
      return pokemon;
    })
  );

  return {
    props: {
      pokemonData,
    },
  };
};
