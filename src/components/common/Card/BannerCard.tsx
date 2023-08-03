// React Dependencies
import React from "react";

// Internal Dependencies
import { Button } from "../Button/Button";

export const BannerCard = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 w-full p-5 text-center bg-white border border-gray-100 shadow-lg rounded-t-3xl sm:p-8 lg:left-10 lg:bottom-10 lg:max-w-2xl lg:rounded-b-3xl">
      <div className="flex items-end justify-center sm:justify-start">
        <img
          src="/images/pokemon-app.png"
          className="h-16 mt-2"
          alt="Logo of pokemon-app by Aleksandar Savić / almigor"
        />
        <h1 className="px-2 mb-2 text-xl font-bold text-center sm:text-left sm:text-4xl">
          Pokémon-App
        </h1>
      </div>
      <div className="my-4 mb-6 text-left sm:my-8">
        <h2 className="px-1 mb-2 text-xl font-bold text-center text-darker-gray sm:text-left sm:text-2xl">
          Generate your favourite pokémon card
        </h2>
        <p className="px-1 text-sm text-gray-500 sm:whitespace-pre sm:px-0 sm:text-base">
          Pokémon-App is a 3D pokémon card generator.
        </p>
        <p className="px-1 text-sm text-gray-500 sm:whitespace-pre sm:px-0 sm:text-base">
          Generate stunning card designs from keywords for the Pokémon you
          choose.
        </p>
      </div>
      <div className="grid gap-y-2 sm:flex">
        <div className="">
          <Button variant="contained" text="Create card" />
        </div>
      </div>
      <div className="flex flex-col mt-6 text-xs font-semibold text-gray-300 sm:mt-8 sm:flex-row sm:text-sm">
        <div>
          <a
            className="inline-block mx-1 sm:mx-3 sm:mr-5 sm:ml-0"
            href="/terms"
          >
            Terms of use
          </a>
          <a
            className="inline-block mx-1 sm:mx-3 sm:mr-5 sm:ml-0"
            href="/privacy"
          >
            Privacy policy
          </a>
        </div>
        <span className="hidden sm:inline">|</span>
        <button className="mt-2 text-sm text-gray-700 sm:mt-0 sm:ml-5">
          Deutsch
        </button>
      </div>
    </div>
  );
};
