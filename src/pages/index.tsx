// React & Next Dependencies
import { HighlightCard } from "@/components/common/Card/HighlightCard";
import React, { useState } from "react";

// External Dependencies
import Marquee from "react-fast-marquee";

// Internal Dependencies

const Home = () => {
  const [pokemonData, setPokemonData] = useState({
    id: "charizard-id",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    name: "Charizard",
  });

  return (
    <div>
      {/* <Marquee direction="right">
        <h1>Pokemon</h1>
      </Marquee> */}

      <HighlightCard name={pokemonData.name} image={pokemonData.image} />
    </div>
  );
};

export default Home;
