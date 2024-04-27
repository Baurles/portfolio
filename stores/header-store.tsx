"use client";

import { makeAutoObservable } from "mobx";

class Store {
  headerState = false;

  constructor() {
    makeAutoObservable(this);
  }

  setHeaderVisible(state: boolean) {
    this.headerState = state;
  }
}

const HeaderStore = new Store();
export default HeaderStore;
