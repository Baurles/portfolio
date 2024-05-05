"use client";

import { makeAutoObservable } from "mobx";

export interface itemProps {
  id: number;
  order: number;
  text: string;
}
export interface boardProps {
  id: number;
  title: string;
  items: itemProps[];
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
  currentItem: itemProps = { id: 0, order: 0, text: "" };

  currentBoard: boardProps = {
    id: 0,
    title: "",
    items: [],
  };

  constructor() {
    makeAutoObservable(this);
  }
  setBoardList(board: boardProps) {
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
  setCurrentItem(item: itemProps) {
    this.currentItem = item;
  }
  setCurrentBoard(board: boardProps) {
    this.currentBoard = board;
  }
}

const DragStore = new Store();
export default DragStore;
