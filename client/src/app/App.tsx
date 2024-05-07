import "@/app/globals.css";
import { AppProps } from "next/app";
import { AppProvider } from "@/app/AppProvider";
import { Inter } from "next/dist/compiled/@next/font/dist/google";
const inter = Inter({ subsets: ["latin"] });
export const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  </AppProvider>
);
