import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Router from "next/router";
const router = Router;

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <div className="flex w-screen min-h-screen">
        <Component {...pageProps} key={router.asPath} />
      </div>
    </AnimatePresence>
  );
}
