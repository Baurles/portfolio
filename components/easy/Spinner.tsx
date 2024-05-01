"use client";
import { GoButton } from "../ui/GoButton";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useRef } from "react";
import EasyStore from "@/stores/easyStore";
import { observer } from "mobx-react";

const Store = EasyStore;

export const Spinner = observer(
  ({ children }: { children: React.ReactNode }) => {
    let spinnerRef = useRef<HTMLInputElement>(null);

    const handleLeftArrow = () => {
      const style = spinnerRef.current && getComputedStyle(spinnerRef.current);
      if (style !== null) {
        Store.sliderOffset < 0
          ? Store.setSliderOffsetLeft(
              Store.sliderOffset,
              Number(style.width.slice(0, 4)),
            )
          : Store.setOffsetMax(-Number(style.width.slice(0, 4)));
      }
    };
    const handleRightArrow = () => {
      const style = spinnerRef.current && getComputedStyle(spinnerRef.current);
      if (style !== null) {
        Store.sliderOffset > -2 * Number(style.width.slice(0, 4))
          ? Store.setSliderOffsetRight(
              Store.sliderOffset,
              Number(style.width.slice(0, 4)),
            )
          : Store.setOffsetNull();
      }
    };

    return (
      <div className="p-4 flex  flex-col justify-center items-center  w-full h-full">
        <div className="flex items-center w-full h-full">
          <motion.div initial={{ x: -20, opacity: 0 }} id="arrLeft">
            <IoIosArrowBack
              onClick={handleLeftArrow}
              color="black"
              className="cursor-pointer"
              size={40}
            />
          </motion.div>
          <motion.div
            ref={spinnerRef}
            initial={{ scale: 0.2 }}
            id="spinnerView"
            className="w-full overflow-hidden h-3/4"
          >
            <motion.div
              animate={{ x: Store.sliderOffset }}
              transition={{ duration: 0.5 }}
              id="allpages"
              className="flex h-full"
            >
              {children}
            </motion.div>
          </motion.div>
          <motion.div initial={{ x: 20, opacity: 0 }} id="arrRight">
            <IoIosArrowForward
              onClick={handleRightArrow}
              className="cursor-pointer"
              size={40}
              color="black"
            />
          </motion.div>
        </div>
        <div className="mt-4">
          <GoButton word={"Давай сложнее!"} />
        </div>
      </div>
    );
  },
);
