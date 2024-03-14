import { makeAutoObservable } from "mobx";

class HeaderStore {
  isHovered = false;

  constructor(){
    makeAutoObservable(this)
  }

  hovered = (value:boolean) => {
    this.isHovered = value;
  }

}

export default new HeaderStore();