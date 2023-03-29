import Links from "@/components/linksPage/Links";
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

const LinksPage = () => {
  return (
    <div className="flex flex-col items-center sm:justify-center p-5 w-full h-full bg-slate-300 text-black">
      <div className="flex flex-col items-center w-[90%] sm:w-[70%] p-5 sm:justify-center sm:flex-row bg-white rounded-b-3xl rounded-t-[300px] space-y-5 sm:space-y-0 sm:rounded-lg">
        <Image
          src={maebae}
          alt="maebae"
          priority
          className="w-full max-w-[200px] rounded-full"
        />
        <div className="flex flex-col text-center text-slate-700 p-2 sm:p-5 text-sm sm:text-xl space-y-3">
          <h1 className="text-2xl">Hey I’m Mae!</h1>
          <p>I’m a voice actor and content creator! Check out my socials!</p>
        </div>
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
    </div>
  );
};

export default LinksPage;
