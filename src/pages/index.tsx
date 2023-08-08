// React & Next Dependencies
import React, { useState } from "react";

// External Dependencies
import _ from "lodash";
import Marquee from "react-fast-marquee";
import { getPalette } from "react-palette";
import { motion } from "framer-motion";

// Internal Dependencies
import { HighlightCard } from "@/components/common/Card/HighlightCard";
import { pokemonData, PokemonType } from "@/utils/constants";
import { BannerCard } from "@/components/common/Card/BannerCard";
import { Form } from "@/components/Form/Form";

export type HomeProps = {
  groupedPokemonData: Array<Array<PokemonType>>;
};

const Home = ({ groupedPokemonData = [] }: HomeProps) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const showModalHandler = () => {
    setIsModalShowing(true);
  };

  const hideModalHandler = () => {
    setIsModalShowing(false);
  };

  return (
    <div className="h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, zIndex: 10 }}
        animate={{
          opacity: isModalShowing ? 1 : 0,
          zIndex: isModalShowing ? 30 : 10,
        }}
        transition={{ duration: 0.25 }}
        className="fixed w-full h-full bg-white"
      >
        <Form onHideModal={hideModalHandler} />
      </motion.div>

      {groupedPokemonData.map((pokemonData, index) => (
        <Marquee
          key={index}
          direction={index % 2 === 0 ? "right" : "left"}
          speed={20}
        >
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

      <div className="relative z-20">
        <BannerCard onCreateCardClick={showModalHandler} />
      </div>
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
