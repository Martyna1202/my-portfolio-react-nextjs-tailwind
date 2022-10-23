import Image from "next/image";

//  pictures of my projects
import toDoApp from "../public/toDoApp.png";
import LiveFlightWidget from "../public/LiveFlightWidget.png";
import recipesSmoothieApp from "../public/recipesSmoothieApp.png";
import AboutMePage1 from "../public/AboutMePage1.png";
import AboutMePage2 from "../public/AboutMePage2.png";
import AboutMePage3 from "../public/AboutMePage3.png";
import randomColorGenerator from "../public/randomColorGenerator.png";
import colorGuessApp from "../public/colorGuessApp.png";
import webShop from "../public/webShop.png";
import welcomeWeekend from "../public/welcomeWeekend.png";

//  pictures of my future projects
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

function PortfolioProjects() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1">
        <Image
          src={toDoApp}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1 rounded-lg border-2 border-sky-900 dark:border-gray-800">
        <Image
          src={LiveFlightWidget}
          alt=""
          className="rounded-lg object-contain"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={AboutMePage1}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={recipesSmoothieApp}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={AboutMePage2}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={randomColorGenerator}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={AboutMePage3}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={welcomeWeekend}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1 rounded-lg border-2 border-sky-900 dark:border-gray-800">
        <Image
          src={colorGuessApp}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={webShop}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
        And here are some examples, that I like and would like to design in the
        future...
      </p>
      <div className="basis-1/3 flex-1">
        <Image
          src={web2}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={web5}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={web6}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          src={web3}
          alt=""
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default PortfolioProjects;
