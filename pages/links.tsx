import Links from "@/components/linksPage/Links";
import { motion as m } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaDiscord,
  FaImdb,
  FaPaypal,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWeb } from "react-icons/md";

const maebae = require("../assets/MaeBae.png");

const links = [
  {
    icon: FaTiktok,
    url: "https://www.tiktok.com/@maebelen",
    color: "text-slate-700",
    text: "TikTok ~",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/maeebelenn/",
    color: "text-slate-700",
    text: "Instagram :3",
  },
  {
    icon: FaDiscord,
    url: "https://discord.com/invite/XCu4AhqdN6",
    color: "text-slate-700",
    text: "Join the Maebaes!",
  },
  {
    icon: MdOutlineWeb,
    url: "https://maebelen.com",
    color: "text-slate-700",
    text: "Acting Resumes",
  },
  {
    icon: HiOutlineMail,
    url: "",
    color: "text-slate-700",
    text: "Looking to work with me?",
  },
  {
    icon: FaImdb,
    url: "https://www.imdb.com/name/nm8708251/",
    color: "text-slate-700",
    text: "My IMDB!!",
  },
  {
    icon: FaPaypal,
    url: "https://www.paypal.com/paypalme/maebelen",
    color: "text-slate-700",
    text: "Paypal me!",
  },
];
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

const profilePhoto = {
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
      damping: 23,
      stiffness: 500,
      scrollTo: "top",
      when: "",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const LinksPage = () => {
  return (
    <div className="flex flex-col items-center sm:justify-center p-5 w-full min-h-screen bg-slate-300 text-black">
      <m.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideUp}
        className="flex flex-col items-center w-[90%] lg:w-[70%] p-8 justify-center bg-white rounded-b-3xl rounded-t-[20rem] sm:rounded-xl sm:rounded-t-[9rem] shadow-lg gap-2 sm:gap-10"
      >
        <m.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={profilePhoto}
          className="flex flex-col w-full sm:flex-row items-center gap-2 sm:gap-3"
        >
          <m.div
            whileHover={{
              y: -10,
            }}
          >
            <Image
              src={maebae}
              alt="maebae"
              priority
              className="w-full max-w-[300px] sm:max-w-[250px] lg:max-w-[350px] rounded-full"
            />
          </m.div>
          <div className="flex flex-col sm:w-full text-center text-slate-700 p-2 sm:p-5 text-lg sm:text-2xl lg:text-3xl gap-3 sm:gap-10">
            <h1 className="text-3xl lg:text-5xl font-semibold">Hey I’m Mae!</h1>
            <p>I’m a voice actor and content creator! Check out my socials!</p>
          </div>
        </m.div>
        <div className="flex flex-col justify-center items-center w-full gap-3 sm:gap-5 sm:flex-row sm:flex-wrap">
          {links.map((link, index) => (
            <Links
              key={index}
              IconComponent={link.icon}
              text={link.text}
              color={link.color}
              link={link.url}
            />
          ))}
        </div>
      </m.div>
    </div>
  );
};

export default LinksPage;
