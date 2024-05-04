"use client";

import { makeAutoObservable } from "mobx";

export interface cardProps {
  id: number;
  order: number;
  text: string;
}

class Store {
  boardList = [
    {
      id: 1,
      title: "Задачи",
      items: [
        { id: 0, order: 1, text: "Карточка 1" },
        { id: 1, order: 2, text: "Карточка 2" },
        { id: 2, order: 3, text: "Карточка 3" },
        { id: 3, order: 4, text: "Карточка 4" },
      ],
    },
    {
      id: 2,
      title: "На ревью",
      items: [
        { id: 0, order: 1, text: "Карточка 1" },
        { id: 1, order: 2, text: "Карточка 2" },
        { id: 2, order: 3, text: "Карточка 3" },
      ],
    },
    {
      id: 3,
      title: "Правки",
      items: [
        { id: 0, order: 1, text: "Карточка 1" },
        { id: 1, order: 2, text: "Карточка 2" },
      ],
    },
    {
      id: 4,
      title: "Выполнено",
      items: [{ id: 0, order: 1, text: "Карточка 1" }],
    },
  ];
  currentItem = null;
  currentBoard = null;

  constructor() {
    makeAutoObservable(this);
  }
  setBoardList(board) {
    this.boardList.map((b) => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === this.currentBoard.id) {
        return this.currentBoard;
      }
      return b;
    });
  }
  setCurrentItem(item) {
    this.currentItem = item;
  }
  setCurrentBoard(board) {
    this.currentBoard = board;
  }
}

const DragStore = new Store();
export default DragStore;
