"use client";

import { makeAutoObservable } from "mobx";

class Store {
  arrowState = true;

  constructor() {
    makeAutoObservable(this);
  }

  setArrowVisible(state: boolean) {
    this.arrowState = state;
  }
}

const MainPageStore = new Store();
export default MainPageStore;
