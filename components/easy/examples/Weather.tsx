"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
export const Weather = () => {
  return (
    <article className="min-w-full text-black max-w-full flex h-full rounded-lg border-2 border-black">
      <section className="w-4/6 h-full border-r-2 border-black "></section>
      <section className="w-2/6 gap-10 pt-2 justify-center h-full flex flex-col items-center ">
        <h2 className="font-bold text-2xl">Weather</h2>
        <p>Прогноз погоды с OpenWeather</p>
        <motion.a whileHover={{ scale: 1.1 }} href="/">
          <FaGithub size={50} />
        </motion.a>
      </section>
    </article>
  );
};
