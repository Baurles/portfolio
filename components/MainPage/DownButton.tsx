"use client";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import MainPageStore from "@/stores/mainPage-store";
import { useEffect } from "react";

export const DownButton = observer(() => {
  const Store = MainPageStore;

  useEffect(() => {
    function setVisible() {
      if (window.scrollY <= 100) {
        Store.setArrowVisible(true);
      } else {
        Store.setArrowVisible(false);
      }
    }

    window.addEventListener("scroll", setVisible);

    return () => {
      window.removeEventListener("scroll", setVisible);
    };
  }, []); ///Починить баг с отображением на первом рендере

  return (
    <motion.div
      animate={{ opacity: Store.arrowState ? 1 : 0 }}
      transition={{ duration: 0.2, type: "tween" }}
    >
      <motion.div
        animate={{ y: -20 }}
        initial={{ y: -30 }}
        transition={{ repeat: Infinity, delay: 1.5, duration: 2 }}
      >
        <MdKeyboardDoubleArrowDown
          className="cursor-poitner"
          size={50}
          color="white"
        />
      </motion.div>
    </motion.div>
  );
});
