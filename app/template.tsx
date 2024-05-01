"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/utils/pageSwitch";
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div
        id="banner-1"
        className="banner min-h-screen bg-white z-20 fixed top-0 left-0 w-1/4"
      ></div>

      <div
        id="banner-2"
        className="banner min-h-screen bg-white z-20 fixed top-0 left-1/4 w-1/4"
      ></div>

      <div
        id="banner-3"
        className="banner min-h-screen bg-white z-20 fixed top-0 left-2/4 w-1/4"
      ></div>

      <div
        id="banner-4"
        className="banner min-h-screen bg-white z-20 fixed top-0 left-3/4 w-1/4"
      ></div>
      {children}
    </>
  );
}
