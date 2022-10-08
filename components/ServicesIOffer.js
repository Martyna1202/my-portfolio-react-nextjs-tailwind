import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

function ServicesIOffer() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-2 dark:text-white">Services I offer</h3>
        <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
          Since the beginning of my journey as a
          <span className="text-teal-500 dark:text-teal-300">
            {" "}
            Webdevelopment{" "}
          </span>{" "}
          student, I`m fascinated of every single topic I learn.
        </p>
        <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
          I`m so proud to be a
          <span className="text-teal-500 dark:text-teal-300">
            {" "}
            webdeveloper{" "}
          </span>{" "}
          soon...
        </p>
        <p className=" text-md py-2 leading-8 text-amber-800 dark:text-amber-100">
          I will offer a wide range of services, including programming and maybe
          teaching some day.
        </p>
      </div>
      <div className="md:flex gap-5 lg:gap-10 dark:text-white ">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 dark:border-gray-800">
          <Image src={design} width={100} height={100} alt="an icon" />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory and also consistently 100% Web Accessibility.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">
            Design tools I use
          </h4>
          <p className="text-amber-900 py-1 dark:text-amber-100">Photoshop</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Illustrator</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Figma</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 dark:border-gray-800">
          <Image src={consulting} width={100} height={100} alt="an icon" />
          <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
          <p className="py-2">
            Actually I`m the class-representative and communication is one of my
            strength, that I`m very proud of. I`m empathic and I`m asking the
            right questions just to get to know what your wishes are and how
            exactly I can fullfil them for achieving your 100% satisfaction.
          </p>
          <p className="py-2">
            Furthermore, thanks to my experiance, I can give you valueable tips,
            how to arrange your application.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">
            communication tools I use
          </h4>
          <p className="text-amber-900 py-1 dark:text-amber-100">Slack</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">E-Mail</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Phone</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border-2 dark:border-gray-800">
          <Image src={code} width={100} height={100} alt="an icon" />
          <h3 className="text-lg font-medium pt-8 pb-2">Clean Code</h3>
          <p className="py-2">
            I only use the newest technologies and I`m a lifelong learner, so
            you get the best and most modern standard.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">
            Coding experiance I have
          </h4>
          <p className="text-amber-900 py-1 dark:text-amber-100">
            HTML / CSS / JS
          </p>
          <p className="text-amber-900 py-1 dark:text-amber-100">React.js</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Next.js</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Tailwind</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Node.js</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">Express.js</p>
          <p className="text-amber-900 py-1 dark:text-amber-100">MongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesIOffer;
