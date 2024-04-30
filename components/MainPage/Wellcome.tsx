"use client";
import { motion } from "framer-motion";

export default function Wellcome() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white   flex items-end text-7xl font-extrabold"
    >
      <h2 className="cursor-default">
        Hello,
        <br />
        Im a frontend dev
      </h2>
      <motion.span
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 2,
          type: "tween",
          repeat: Infinity,
        }}
      >
        |
      </motion.span>
    </motion.div>
  );
}
