"use client";

import { useEffect } from "react";
import HeaderStore from "@/stores/header-store";
import { animate } from "framer-motion";
import EasyStore from "@/stores/easyStore";
import { observer } from "mobx-react";

const Store = EasyStore;
const hStore = HeaderStore;
export const EasyPageText = observer(() => {
  useEffect(() => {
    Animation();
    let timer = setTimeout(() => {
      hStore.setHeaderVisible(true);
      Store.setEasyTextVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  function Animation() {
    animate([
      ["#wellcomeText", { opacity: 1 }, { duration: 1, delay: 0.5 }],
      ["#wellcomeText", { opacity: 0 }, { duration: 0.6, delay: 0.7 }],
    ]);
  }
  return (
    <>
      {Store.easyText && (
        <h1 id="wellcomeText" className="text-black opacity-0 text-6xl">
          Начнём с базовых функциональных вещей
        </h1>
      )}
    </>
  );
});
