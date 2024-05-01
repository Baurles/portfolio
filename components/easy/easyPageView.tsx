"use client";

import { GoButton } from "../ui/GoButton";
import { animate } from "framer-motion";
import EasyStore from "@/stores/easyStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { EasyPageText } from "./easyPageText";

const Store = EasyStore;
export const EasyPageView = observer(
  ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
      handleAnimate();
    }, [Store.easyText]);

    function handleAnimate() {
      animate([
        ["#spinnerView", { scale: 1 }, { duration: 0.5 }],
        ["#arrLeft", { x: 0, opacity: 1 }, { duration: 0.5, at: ">" }],
        ["#arrRight", { x: 0, opacity: 1 }, { duration: 0.5, at: "<" }],
        ["#gobtn", { opacity: 1 }, { duration: 0.2, delay: 2 }],
      ]);
    }

    return (
      <div className="w-full rounded-lg flex flex- col justify-center items-center h-full bg-white">
        {Store.easyText ? <EasyPageText /> : <>{children}</>}
      </div>
    );
  },
);
