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
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Links: React.FC<LinkType> = ({ IconComponent, color, text, link }) => {
  return (
    <m.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      variants={slideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex justify-center items-center py-2 px-3 sm:py-4 sm:px-6 bg-slate-200 rounded-lg w-full sm:w-[40%] sm:min-h-[100px] text-lg sm:text-2xl"
    >
      <Link href={link} className="flex justify-center items-center w-full">
        <IconComponent
          className={`w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] min-w-[10px] min-h-[10px] ${color}`}
        />
        <span className="flex-1 text-center p-1">{text}</span>
      </Link>
    </m.div>
  );
};

export default Links;
