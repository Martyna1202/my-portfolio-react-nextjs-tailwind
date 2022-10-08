import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillSlackCircle,
  AiFillMail,
} from "react-icons/ai";

function Links() {
  return (
    <div className="text-5xl flex justify-center gap-10 py-3 text-amber-900 dark:text-amber-100">
      <a href="https://github.com/Martyna1202" target="blank">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/martina-mischlinski/" target="blank">
        <AiFillLinkedin />
      </a>
      <a href="#" target="blank">
        <AiFillSlackCircle />
      </a>
      <a href="#" target="blank">
        <AiFillMail />
      </a>
    </div>
  );
}

export default Links;
