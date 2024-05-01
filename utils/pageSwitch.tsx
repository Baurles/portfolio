import { animate, stagger } from "framer-motion";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    animate([[".banner", { y: 1000 }, { duration: 0.3, delay: stagger(0.1) }]]);
  }
};

export const animatePageOut = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    animate([[".banner", { y: 0 }, { duration: 0.3, delay: stagger(0.1) }]]);
  }
};
