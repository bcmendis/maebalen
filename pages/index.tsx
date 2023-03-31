import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
const badass = require("../assets/Headshot_Badass.jpg");
const sweet = require("../assets/Headshot_Sweet.jpg");
const edgy = require("../assets/Headshot_Edgy.jpg");

const headshots = [badass, sweet, edgy];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mae Balen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center py-20 h-screen w-screen">
        <Link href="/links" className="flex p-4 text-white">
          Links
        </Link>
        <div className="h-full flex rounded-lg overflow-x-hidden shadow-xl shadow-gray-800">
          {headshots.map((photo, index) => {
            return (
              <m.div key={index} className="flex ">
                <Image
                  src={photo}
                  alt="sweet"
                  priority
                  className="object-cover w-full h-full"
                />
              </m.div>
            );
          })}
        </div>
      </main>
    </>
  );
}
