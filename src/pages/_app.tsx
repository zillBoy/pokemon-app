// Next Dependencies
import type { AppProps } from "next/app";

// External Dependencies
import "react-toastify/dist/ReactToastify.css";

// Internal Dependencies
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
