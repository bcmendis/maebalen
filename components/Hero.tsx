import Image from "next/image";
import { motion as m } from "framer-motion";

const logo = require("../assets/logo/image1.svg");
const roto = require("../assets/hero/roto.png");

const bgScale = {
  normal: {
    opacity: 1,
  },
  visible: {
    scale: 1.5,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const signature = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
      scrollTo: "top",
    },
  },
};

const slideUp = {
  hidden: {
    y: "100vh",
    x: "-100px",
    opacity: 0,
  },
  visible: {
    y: "0",
    x: "-100px",
    opacity: 0,
    transition: {
      delay: 3,
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
      scrollTo: "top",
      when: "beforeChildren",
    },
  },
};

const Hero = () => {
  return (
    <div className="min-w-[280px] flex justify-center items-start absolute top-0 right-0 left-0 bottom-0 overflow-hidden">
      <m.div
        variants={bgScale}
        initial="normal"
        animate="visible"
        className="min-w-[280px] flex justify-center items-start absolute top-0 right-0 left-0 bottom-0  w-full h-screen bg-fixed bg-cover bg-hero bg-top mt-100 overflow-hidden"
      >
        {/* Overlay */}
        <m.div className="min-w-[280px] absolute top-0 right-0 left-0 bottom-0 w-full h-screen z-[1] bg-pink-400/10" />
      </m.div>
      {/* Assets */}
      <div className="flex flex-col w-full justify-center items-center">
        <m.div
          variants={signature}
          initial="visible"
          animate="hidden"
          className="flex w-full sm:min-w-[1000px] justify-center items-center z-[2]"
        >
          <Image
            src={logo}
            alt="logo"
            className="min-w-[50px] max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] absolute top-[60px]"
          />
        </m.div>
        <m.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="mt-10"
        >
          <Image
            src={roto}
            alt="logo"
            className="w-full min-w-[1050px] z-[2]"
          />
        </m.div>
      </div>
    </div>
  );
};

export default Hero;
