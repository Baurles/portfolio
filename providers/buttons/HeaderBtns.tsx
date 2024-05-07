"use client";
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { motion } from "framer-motion";

function Btn({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <motion.a whileHover={{ scale: 1.1 }} href={href}>
      {children}
    </motion.a>
  );
}

export default function HeaderBtns() {
  return (
    <nav className="flex gap-10">
      <Btn href={"https://github.com/Baurles"}>
        <FaGithub color="black" size={25} />
      </Btn>
      <Btn href={"https://t.me/baurlesprod"}>
        <BsTelegram className="cursor-pointer" color="black" size={25} />{" "}
      </Btn>
      <Btn
        href={
          "https://hh.ru/resume/39ce797eff0d0eb2570039ed1f674351413474?from=share_ios"
        }
      >
        <RiFileList3Line className="cursor-pointer" color="black" size={25} />{" "}
      </Btn>
    </nav>
  );
}
