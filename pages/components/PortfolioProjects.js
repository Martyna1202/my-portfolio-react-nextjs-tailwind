import Image from "next/image";

//  pictures of my future projects
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import randomColorGenerator from "../../public/randomColorGenerator.png";
import recipesSmoothieApp from "../../public/recipesSmoothieApp.png";
import webShop from "../../public/webShop.png";
import welcomeWeekend from "../../public/welcomeWeekend.png";

function PortfolioProjects() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
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
          src={web3}
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
          src={webShop}
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
    </div>
  );
}

export default PortfolioProjects;
