// React & Next Dependencies
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

// External Dependencies
import _ from "lodash";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

// Internal Dependencies
import { ButtonIcon } from "../common/Button/ButtonIcon";
import { Input } from "../common/Input/Input";
import { GET_POKEMON_API_URL, pokemonData } from "@/utils/constants";

export type FormProps = {
  onHideModal: () => void;
};

const formContainerHeight = "calc(100vh - 15vh - 32px - 50px)"; // full-height - margin - svg-icon

export const Form = ({ onHideModal }: FormProps) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState("");
  const [currentPlaceholderPokemonName, setCurrentPlaceholderPokemonName] =
    useState<string>(pokemonData[0].name);

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `${GET_POKEMON_API_URL}${_.lowerCase(text)}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("error fetchPokemon: ", err);
    }
  };

  const generatePokemonHandler = async () => {
    // const pokemon = await toast.promise(fetchPokemon, {
    //   pending: "Generating",
    //   success: "Success, redirecting...",
    //   error: "Oops something went wrong!",
    // });
    const pokemon = {
      name: "Mankey POKEMON hehe",
      img: "pokemon-image",
    };

    router.push(
      {
        pathname: `/pokemon/${_.lowerCase(text)}`,
        query: pokemon || null,
      },
      `/pokemon/${_.lowerCase(text)}`
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const placeholderName = _.sample(_.cloneDeep(pokemonData))!!;
      setCurrentPlaceholderPokemonName(placeholderName.name);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPlaceholderPokemonName]);

  return (
    <>
      <div className="m-10">
        <div className="flex justify-end">
          <ButtonIcon
            className="p-5 rounded-3xl"
            onClick={onHideModal}
            icon="/svg/cross.svg"
            alt="cross"
          />
        </div>

        <div
          style={{ height: formContainerHeight }}
          className="flex flex-col items-center justify-center"
        >
          <div className="mb-14">
            <h1 className="text-3xl font-bold text-center font-primary text-darker-gray">
              Generate a new pokémon card
            </h1>
            <p className="text-xl font-medium text-center font-primary text-gray">
              Enter the name of pokémon
            </p>
          </div>

          <div className="w-11/12 sm:w-0.8/2">
            <div>
              <Input ref={inputRef} value={text} onChange={changeInputHandler}>
                <div className="relative z-20">
                  <motion.div
                    animate={{ y: [0, 0, -55, -55, -55, -55, -105, -105] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <p
                      onClick={() => inputRef.current?.focus()}
                      className={`${
                        !_.isEmpty(text) ? "hidden" : ""
                      } absolute left-6.5 text-2.5xl text-placeholder-gray font-bold z-20 select-none cursor-text`}
                    >
                      {currentPlaceholderPokemonName}
                    </p>
                  </motion.div>
                </div>
              </Input>
            </div>
            <ButtonIcon
              className="justify-center w-full mt-6 sm:w-full bg-primary-gray"
              icon="/svg/forward-arrow.svg"
              alt="cross"
              disabled={_.isEmpty(text)}
              onClick={generatePokemonHandler}
            >
              <span className="py-1 mr-2 text-xl">Generate</span>
            </ButtonIcon>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        theme="dark"
      />
    </>
  );
};
