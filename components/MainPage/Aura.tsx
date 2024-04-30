"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#F3EEEA", "#EBE3D5", "#B0A695", "#776B5D"];

export const Aura = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(175% 175% at 50% 0%,#000000 50%,${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="h-screen fixed -z-10 w-screen place-content-center overflow-hidden"
      ></motion.section>
    </>
  );
};
