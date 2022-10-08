import Image from "next/image";
import memojiLaptop from "../../public/memojiLaptop.png";

export default function PortfolioDescription() {
  return (
    <div className="dark:text-white">
      <h3 className="text-3xl py-1">Portfolio</h3>
      <h4 className=" text-teal-600 dark:text-teal-300">
        I`m always coding with passion!
      </h4>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-4 overflow-hidden sm:w-80 sm:h-80 md:w-96 md:h-96 dark:from-teal-300">
        <Image
          src={memojiLaptop}
          layout="fill"
          objectFit="cover"
          alt="my picture as a painted png"
        />
      </div>

      <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
        I can`t await to be a
        <span className="text-teal-500 dark:text-teal-300"> webdeveloper </span>{" "}
        soon...
      </p>
      <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
        I will offer a wide range of services, including{" "}
        <span className="text-teal-500 dark:text-teal-300"> programming </span>{" "}
        and maybe
        <span className="text-teal-500 dark:text-teal-300">
          {" "}
          teaching{" "}
        </span>{" "}
        some day, because I`m also a tutor and I love it.
      </p>
      <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
        Here are some of my Projects at the beginning of my journey. As soon, as
        there will be new Projects, I will show you all of them...
      </p>
    </div>
  );
}
