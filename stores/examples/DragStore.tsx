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
        { id: 1, order: 1, text: "Найти работу" },
        { id: 2, order: 2, text: "Модуль авторизации" },
        { id: 3, order: 3, text: "Покрасить кнопочку" },
        { id: 4, order: 4, text: "Исправить баг анимации" },
      ],
    },
    {
      id: 2,
      title: "На ревью",
      items: [
        { id: 5, order: 1, text: "Модуль сортировки шопа" },
        { id: 6, order: 2, text: "Админ панель" },
        { id: 7, order: 3, text: "Поиск" },
      ],
    },
    {
      id: 3,
      title: "Правки",
      items: [
        { id: 8, order: 1, text: "Инпут с тачбара" },
        { id: 9, order: 2, text: "Сделайте красиво как нибудь" },
      ],
    },
    {
      id: 4,
      title: "Выполнено",
      items: [{ id: 10, order: 1, text: "Попить кофе" }],
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
  setNullCurrentItem() {
    this.currentItem = { id: 0, order: 0, text: "" };
  }
  setCurrentBoard(board: boardProps) {
    this.currentBoard = board;
  }
  setDeleteFromBoard(board: boardProps, item: itemProps) {
    const currentIndex = this.currentBoard.items.indexOf(this.currentItem);
    this.currentBoard.items.splice(currentIndex, 1);

    const droptIndex = board.items.indexOf(item);
    board.items.splice(droptIndex + 1, 0, this.currentItem);
  }
  setAddToBoard(board: boardProps) {
    board.items.push(this.currentItem);

    const currentIndex = this.currentBoard.items.indexOf(this.currentItem);
    this.currentBoard.items.splice(currentIndex, 1);
  }
}

const DragStore = new Store();
export default DragStore;
