"use client";
import { animate, motion, stagger, useAnimate } from "framer-motion";
import MainPageStore from "@/stores/mainPage-store";
import { observer } from "mobx-react";
import { animatePageOut } from "@/utils/pageSwitch";
import { useRouter } from "next/navigation";

const Store = MainPageStore;

type AnimationSequence = Parameters<typeof animate>[0];

export const GoButton = observer(({ word }: { word: string }) => {
  const [scope, animate] = useAnimate();
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const btnWord = word.split("");

  const router = useRouter();
  const onBtnClick = () => {
    Store.setGoButtonStateTrue(true);
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumber(-100, 100),
        y: randomNumber(-100, 100),
        scale: randomNumber(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesOut: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.0000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".btnLetter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      [scope.current, { scale: 0.8 }, { duration: 0.1, at: "<" }],
      [scope.current, { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".btnLetter", { y: 0 }, { duration: 0.0000001 }],
      ...sparklesOut,
    ]);

    setTimeout(animatePageOut, 800);
    setTimeout(() => {
      router.push("/easy");
    }, 1500);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      id="gobtn"
      onClick={onBtnClick}
      ref={scope}
      className="text-white flex cursor-default relative text-lg justify-center items-center font-bold bg-black rounded-lg w-48 h-20"
    >
      <span className="sr-only">Погнали!</span>
      <span className="block h-8 overflow-hidden" aria-hidden>
        {btnWord.map((letter, index) => (
          <span
            data-letter={letter}
            className="btnLetter relative leading-8 inline-block h-8 after:h-8 after:absolute after:left-0 after:top-full after:text-white after:content-[attr(data-letter)]"
            key={`${letter}-${index}`}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block  pointer-events-none z-10"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <svg
            key={index}
            className={`absolute opacity-0 left-1/2 top-1/2 sparkle-${index}`}
            viewBox="0 0 122 117"
            width="10"
            height="10"
          >
            <path
              className="fill-white"
              d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
            />
          </svg>
        ))}
      </span>
    </motion.div>
  );
});
