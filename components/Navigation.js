import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkModeContext } from "./useContext/DarkmodeContext.js";

function Navigation() {
  const { changeDarkMode } = useDarkModeContext();

  return (
    <nav className="p-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons text-amber-800 dark:text-amber-100">
        My first Portfolio
      </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={changeDarkMode}
            className="curser-pointer text-2xl text-teal-600 dark:text-teal-300"
          />
        </li>
        <li>
          <a
            href="#"
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
