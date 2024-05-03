import "@/app/globals.css";
import { AppProps } from "next/app";
import { AppProvider } from "@/app/AppProvider";

export const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
);
