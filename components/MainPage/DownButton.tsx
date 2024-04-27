"use client";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

export default function DownButton() {
  const bounce = {
    duration: 1.2,
    ease: bounceEase,
  };

  function bounceEase(x: number) {
    const n1 = 7.5625;
    const d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
  /////Анимация   https://codesandbox.io/p/sandbox/framer-motion-custom-easing-function-1181n?file=%2Fsrc%2FApp.js%3A31%2C3
  return (
    <motion.div
      animate={{ x: -20 }}
      transition={(bounce, { repeat: Infinity })}
    >
      <MdKeyboardDoubleArrowDown size={50} color="black" />;
    </motion.div>
  );
}
