import { BsTelegram } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function IconsList() {
  return (
    <div className="flex gap-10">
      <a href="https://github.com/Baurles">
        <FaGithub color="black" size={25} />
      </a>
      <a href="https://t.me/baurlesprod">
        <BsTelegram className="cursor-pointer" color="black" size={25} />
      </a>
      <a href="https://hh.ru/resume/39ce797eff0d0eb2570039ed1f674351413474?from=share_ios">
        <RiFileList3Line className="cursor-pointer" color="black" size={25} />
      </a>
    </div>
  );
}
export default function Header() {
  return (
    <div className="h-10 container justify-between bg-white shadow-lg  pl-4 pr-4 border-black border-b-2 border-l-2 border-r-2 items-center flex rounded-b-lg w-full fixed z-10">
      <Link href="/">
        <h1 className="text-lg font-bold text-black cursor-pointer ">
          Artem Khmaruk
        </h1>
      </Link>
      <IconsList />
    </div>
  );
}
