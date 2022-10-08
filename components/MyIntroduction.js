import React from "react";
import Links from "./Links";
import Image from "next/image";
import memojiMMWinking from "../public/memojiMMWinking.png";

function MyIntroduction() {
  return (
    <>
      <div className="text-center p-">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
          Martina Mischlinski
        </h2>
        <h3 className="text-2xl py-2 text-amber-800 md:text-3xl dark:text-amber-100">
          Developer and designer
        </h3>
        <p className="text-md py-5 leading-8 text-amber-800 md:text-xl max-w-xl mx-auto dark:text-amber-100">
          I`m a DCI Student since January 2022 and I`m fascinated of every
          single topic in webdevelopment. I`m` happy and proud to be a
          wevdeveloper soon, looking for a challenging job. I love and enjoy
          learning new IT-skills and I really want to learn so nearly everything
          about coding.
        </p>
      </div>
      <Links />
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-4 overflow-hidden sm:w-80 sm:h-80 md:w-96 md:h-96 dark:from-teal-300">
        <Image
          src={memojiMMWinking}
          layout="fill"
          objectFit="cover"
          alt="my picture as a painted png"
        />
      </div>
    </>
  );
}

export default MyIntroduction;
