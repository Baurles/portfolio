import HeaderBtns from "@/providers/buttons/HeaderBtns";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-10 container justify-between bg-white shadow-lg  pl-4 pr-4 border-black border-b-2 border-l-2 border-r-2 items-center flex rounded-b-lg w-full fixed z-10">
      <Link href="/">
        <h1 className="text-lg font-bold text-black cursor-pointer ">
          Artem Khmaruk
        </h1>
      </Link>
      <HeaderBtns />
    </div>
  );
}
