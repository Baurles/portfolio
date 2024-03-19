import { makeAutoObservable } from 'mobx';

class HeaderStore {
  isHovered = false;
  isSticky = false;

  constructor() {
    makeAutoObservable(this);
  }

  hovered = (value: boolean) => {
    this.isHovered = value;
  };
  sticky = (value: boolean) => {
    this.isSticky = value;
  };
}

export default new HeaderStore();
