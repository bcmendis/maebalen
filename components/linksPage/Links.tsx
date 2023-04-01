import Link from "next/link";
import { IconType } from "react-icons";
import { motion as m } from "framer-motion";

interface LinkType {
  IconComponent: IconType;
  text: string;
  color: string;
  link: string;
}

const slideUp = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
      scrollTo: "top",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Links: React.FC<LinkType> = ({ IconComponent, color, text, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-1 justify-center items-center w-full sm:min-w-[200px] md:min-w-[250px] lg:min-w-[350px]"
    >
      <m.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex justify-center items-center px-3 py-2 sm:p-3 lg:py-5 bg-slate-200 rounded-lg w-full h-full text-lg sm:text-lg"
      >
        <IconComponent
          className={`w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[30px] min-w-[10px] min-h-[10px] ${color}`}
        />
        <span className="flex-1 text-center p-1 pl-2">{text}</span>
      </m.div>
    </Link>
  );
};

export default Links;
