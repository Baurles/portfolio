"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import Me from "@/public/assets/me.jpg";
import { GoButton } from "../ui/GoButton";

function Face() {
  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0 }}
      transition={{ duration: 20 }}
      className="w-1/4"
      id="target"
    >
      <Image
        id="me"
        style={{ borderRadius: "50%" }}
        src={Me}
        width={200}
        alt="Me"
      />
    </motion.div>
  );
}

function Message({ text }: { text: string }) {
  const textToArray = text.split("");
  return (
    <div className="w-full text-lg">
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {textToArray.map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            className="letter text-black inline-block"
            key={`${letter}-${index}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

function TextBlock() {
  const textHey = [
    "Приветствую Вас!",
    "Я Артём - фронтенд разработчик из г. Санкт-Петербург.",
    "В рамках своего портфолио я хочу познакомить Вас со своими работами и помочь Вам определить мой уровень.",
    "На текущий момент мой стек это:",
  ];

  return (
    <section className="pl-4 flex-col justify-start gap-40 flex">
      <h2 className="sr-only">Артём - фронтенд разработчик</h2>
      <p className="sr-only">
        Приветствую Вас! Я <strong>Артём - фронтенд разработчик</strong>из г.
        Санкт-Петербург. В рамках своего портфолио я хочу познакомить Вас со
        своими работами и помочь Вам определить мой уровень. На текущий момент
        мой стек это:
      </p>
      <div className="flex flex-col gap-10 ">
        <Message text={textHey[0]} />
        <Message text={textHey[1]} />
        <Message text={textHey[2]} />
      </div>
      <div className="w-full">
        <Message text={textHey[3]} />
        <motion.ul
          initial={{ opacity: 0 }}
          className="text-black list-disc pt-4 font-bold flex flex-col gap-4"
          id="list"
        >
          <li>Typescript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>MobX/Redux</li>
          <li>Tailwind/Scss/Css-modules</li>
          <li>framer-motion</li>
        </motion.ul>
      </div>
    </section>
  );
}

export default function Hero() {
  const [scope, animate] = useAnimate();

  const handleAnimate = () => {
    animate([
      [scope.current, { opacity: 1 }, { duration: 0.3 }],
      ["#target", { opacity: 1 }, { duration: 0.3, delay: 0.2 }],
      [".letter", { opacity: 1 }, { duration: 0.2, delay: stagger(0.02) }],
      ["#list", { opacity: 1 }, { duration: 0.2, delay: 0.2 }],
      ["#gobtn", { opacity: 1 }, { duration: 0.2, delay: 0.2 }],
      ["#me", { rotate: 360 }, { duration: 30, repeat: Infinity }],
    ]);
  };

  return (
    <motion.div
      onViewportEnter={handleAnimate}
      initial={{ opacity: 0 }}
      className="bg-white border-2 border-black p-4 flex flex-col w-full h-full justify-between items-center rounded-lg"
      ref={scope}
    >
      <div className="flex justify-between self-start ">
        <Face />
        <TextBlock />
      </div>
      <GoButton word={"Погнали!"} />
    </motion.div>
  );
}
