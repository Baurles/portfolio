"use client";

import { makeAutoObservable } from "mobx";

export interface cardProps {
  id: number;
  order: number;
  text: string;
}

class Store {
  cardList = [
    { id: 0, order: 1, text: "Карточка 1" },
    { id: 1, order: 2, text: "Карточка 2" },
    { id: 2, order: 3, text: "Карточка 3" },
    { id: 3, order: 4, text: "Карточка 4" },
  ];
  currentCard: cardProps = { id: 0, order: 0, text: "" };

  constructor() {
    makeAutoObservable(this);
  }
  setCardList(card: cardProps) {
    this.cardList = this.cardList
      .map((c) => {
        if (c.id === card.id) {
          return { ...c, order: this.currentCard.order };
        }
        if (c.id === this.currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
      .sort((a, b) => (a.order > b.order ? 1 : -1));
  }
  setCurrentCard(card: cardProps) {
    if (this.currentCard !== null) {
      this.currentCard = card;
    }
  }
}

const DragStore = new Store();
export default DragStore;
