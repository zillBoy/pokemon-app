// React & Next Dependencies
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

// External Dependencies
import _ from "lodash";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

// Internal Dependencies
import { ButtonIcon } from "@/components/common/Button/ButtonIcon";
import { PokemonCard } from "@/components/common/Card/PokemonCard";
import { usePokemonContext } from "@/context/pokemonContext";

const Pokemon = () => {
  const router = useRouter();
  const { pokemon } = usePokemonContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (_.isEmpty(pokemon)) {
      toast.warn("Please generate the pokemon, redirecting...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        router.push({
          pathname: "/",
          query: "redirect=form",
        });
      }, 1000);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          colors={["#f8db72", "#f9e8ae", "#f6f5d5", "#c8e2f4", "#95c1d5"]}
        />
        <ToastContainer />
      </div>
    );

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="w-10/12 mx-auto">
        <Link
          href="/"
          className="flex items-end justify-center cursor-pointer sm:justify-start"
        >
          <img
            src="/images/pokemon-app.png"
            className="mt-2 h-14"
            alt="Logo of pokemon-app by Aleksandar Savić / almigor"
          />
          <h1 className="px-2 mb-2 text-2xl font-bold text-center sm:text-left">
            Pokémon-App
          </h1>
        </Link>
      </div>

      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.75,
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <PokemonCard pokemon={pokemon} />
      </motion.div>

      <div className="flex items-center justify-center">
        <ButtonIcon
          className="justify-center my-6 bg-lightest-gray"
          icon="/svg/refresh-dark.svg"
          alt="cross"
          iconDirection="left"
          onClick={() => router.push({ pathname: "/", query: "redirect=form" })}
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

export const getServerSideProps = async (
  content: GetServerSidePropsContext
) => {
  return {
    props: {
      query: content.query,
    },
  };
};
