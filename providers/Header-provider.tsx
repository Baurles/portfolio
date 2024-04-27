"use client";
import Header from "@/components/Header";
import HeaderStore from "@/stores/header-store";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Store = HeaderStore;
export const HeaderProvider = observer(() => {
  useEffect(() => {
    function setVisible() {
      if (window.scrollY >= 100) {
        Store.setHeaderVisible(true);
      } else {
        Store.setHeaderVisible(false);
      }
    }

    window.addEventListener("scroll", setVisible);

    return () => {
      window.removeEventListener("scroll", setVisible);
    };
  }, []); ///Починить баг с отображением на первом рендере

  return (
    <motion.div
      className="container"
      animate={{ opacity: Store.headerState ? 1 : 0 }}
      transition={{ delay: 0.025, type: "tween" }}
    >
      <Header />
    </motion.div>
  );
});
