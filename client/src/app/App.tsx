import "@/app/globals.css";
import { AppProps } from "next/app";
import { AppProvider } from "@/app/AppProvider";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  </AppProvider>
);
