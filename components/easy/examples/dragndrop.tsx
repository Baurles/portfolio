"use client";

import { FaGithub } from "react-icons/fa";
import DragStore from "@/stores/examples/DragStore";
import { observer } from "mobx-react";
import { cardProps } from "@/stores/examples/DragStore";

const Store = DragStore;

export const DragNDrop = observer(() => {
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDragLeave(e) {}
  function handleDragStart(e, board, item) {
    Store.setCurrentBoard(board);
    Store.setCurrentItem(item);
  }
  function handleDragEnd(e) {}
  function handleDrop(e, board, item) {
    e.preventDefault();
    const currentIndex = Store.currentBoard.items.indexOf(Store.currentItem);
    Store.currentBoard.items.splice(currentIndex, 1);

    const droptIndex = board.items.indexOf(item);
    board.items.splice(droptIndex + 1, 0, Store.currentItem);

    Store.setBoardList(board);
  }
  return (
    <div className="min-w-full text-black max-w-full flex h-full rounded-lg border-2 border-black">
      <div className="w-4/6 h-full flex-col flex justify-between p-4 items-center border-r-2 border-black ">
        <h2 className="text-lg font-bold">Аналог Kanban-доски</h2>
        <div className="flex w-full h-full items-center justify-center gap-10 pt-2">
          {Store.boardList.map((board) => (
            <div
              key={board.id}
              className="flex flex-col rounded-lg w-1/4 h-3/4 border-2 border-black items-center justify-start gap-8 p-2"
            >
              <div className="border-b-black border-b-4 w-full flex justify-center items-center font-bold text-lg">
                {board.title}
              </div>
              <div className="flex flex-col h-3/4 gap-2 w-40 rounded-lg border-black border-2 p-2 items-center justify-start ">
                {board.items.map((item) => (
                  <div
                    key={item.id}
                    className=" w-full flex cursor-pointer rounded-lg justify-center items-center h-10 border-black border-2"
                    draggable={true}
                    onDragOver={(e) => handleDragOver(e)}
                    onDragLeave={(e) => handleDragLeave(e)}
                    onDragStart={(e) => handleDragStart(e, board, item)}
                    onDragEnd={(e) => handleDragEnd(e)}
                    onDrop={(e) => handleDrop(e, board, item)}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <span>
          Можете подёргать ячейки списков, как внутри, так из одного в другой
        </span>
      </div>
      <div className="w-2/6 gap-10 pt-2 justify-center h-full flex flex-col items-center ">
        <span className="font-bold text-2xl">TODO с Drag-n-Drop</span>
        <span>Простой пример реализации Драг-н-Дропа в ТуДу листе</span>
        <FaGithub size={50} />
      </div>
    </div>
  );
});

const InnerList = observer(() => {
  function handleDragStart(
    e: React.DragEvent<HTMLDivElement>,
    card: cardProps,
  ) {
    Store.setCurrentCard(card);
  }
  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    (e.target as HTMLDivElement).style.background = "white";
  }
  function handleDragEnd(e: React.DragEvent<HTMLDivElement>) {
    (e.target as HTMLDivElement).style.background = "white";
  }
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    (e.target as HTMLDivElement).style.background = "lightgray";
  }
  function handleDrop(e: React.DragEvent<HTMLDivElement>, card: cardProps) {
    e.preventDefault();
    (e.target as HTMLDivElement).style.background = "white";
    Store.setCardList(card);
  }

  return (
    <div className="h-3/4 border-2 gap-2 p-2 justify-center items-center border-black flex flex-col w-1/4"></div>
  );
});
