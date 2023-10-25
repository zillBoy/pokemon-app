// React & Next Dependencies
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

// External Dependencies
import _ from "lodash";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

// Internal Dependencies
import { ButtonIcon } from "@/components/common/Button/ButtonIcon";
import { PokemonCard } from "@/components/common/Card/PokemonCard";

const Pokemon = ({ pokemonData }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (_.isEmpty(pokemonData)) {
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

export const getServerSideProps = async (
  content: GetServerSidePropsContext
) => {
  const pokemonData = content.query;

  return {
    props: {
      pokemonData: Object.keys(pokemonData).length === 1 ? null : pokemonData,
    },
  };
};
