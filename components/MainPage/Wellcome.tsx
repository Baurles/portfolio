"use client";
import { motion } from "framer-motion";

export default function Wellcome() {
  return (
    <div className="text-black flex items-end text-7xl font-extrabold">
      <h2>
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
    </div>
  );
}
