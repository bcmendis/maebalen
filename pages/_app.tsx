import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const allPagesVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, when: "afterChildren" },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <m.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={allPagesVariant}
        key={router.route}
        className="flex w-screen min-h-screen"
      >
        <Component {...pageProps} />
      </m.div>
    </AnimatePresence>
  );
}
