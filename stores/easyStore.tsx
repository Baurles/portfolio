"use client";

import { makeAutoObservable } from "mobx";

class Store {
  easyText = true;
  sliderOffset = 0;
  constructor() {
    makeAutoObservable(this);
  }

  setEasyTextVisible(state: boolean) {
    this.easyText = state;
  }
  setSliderOffsetLeft(current: number, width: number) {
    this.sliderOffset = current + width;
    console.log(this.sliderOffset);
  }
  setSliderOffsetRight(current: number, width: number) {
    this.sliderOffset = current - width;
    console.log(this.sliderOffset);
  }
  setOffsetMax(width: number) {
    this.sliderOffset = 2 * width;
  }
  setOffsetNull() {
    this.sliderOffset = 0;
  }
}

const EasyStore = new Store();
export default EasyStore;
