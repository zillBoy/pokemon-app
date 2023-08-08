// React Dependencies
import React, { useEffect, useState } from "react";

// External Dependencies
import _ from "lodash";
import { motion } from "framer-motion";

// Internal Dependencies
import { ButtonIcon } from "../common/Button/ButtonIcon";
import { Input } from "../common/Input/Input";
import { pokemonData } from "@/utils/constants";

export type FormProps = {
  onHideModal: () => void;
};

const formContainerHeight = "calc(100vh - 15vh - 32px - 50px)"; // full-height - margin - svg-icon

export const Form = ({ onHideModal }: FormProps) => {
  const [text, setText] = useState("");
  const [currentPlaceholderPokemonName, setCurrentPlaceholderPokemonName] =
    useState<string>(pokemonData[0].name);

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const placeholderName = _.sample(pokemonData)!!;
      setCurrentPlaceholderPokemonName(placeholderName.name);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPlaceholderPokemonName]);

  return (
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
            <Input value={text} onChange={changeInputHandler}>
              <div className="relative z-20">
                <motion.div
                  animate={{ y: [0, 0, -55, -55, -55, -55, -105, -105] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p
                    className={`${
                      !_.isEmpty(text) ? "hidden" : ""
                    } absolute left-6.5 text-2.5xl text-placeholder-gray font-bold z-20`}
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
          >
            <span className="py-1 mr-2 text-xl">Generate</span>
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};
