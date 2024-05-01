"use client";

import { makeAutoObservable } from "mobx";

class Store {
  arrowState = true;
  goButtonState = false;
  constructor() {
    makeAutoObservable(this);
  }

  setArrowVisible(state: boolean) {
    this.arrowState = state;
  }
  setGoButtonStateTrue(state: boolean) {
    this.goButtonState = state;
  }
}

const MainPageStore = new Store();
export default MainPageStore;
