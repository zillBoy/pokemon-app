// Next Dependencies
import type { AppProps } from "next/app";

// External Dependencies
import "react-toastify/dist/ReactToastify.css";

// Internal Dependencies
import { PokemonProvider } from "@/context/pokemonContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  );
}
