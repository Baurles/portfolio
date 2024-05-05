"use client";

import { FaGithub } from "react-icons/fa";
import DragStore from "@/stores/examples/DragStore";
import { observer } from "mobx-react";
import { AnimationSequence, animate, motion } from "framer-motion";
import { itemProps, boardProps } from "@/stores/examples/DragStore";
import { useEffect } from "react";

const Store = DragStore;

export const DragNDrop = () => {
  return (
    <div className="min-w-full text-black max-w-full flex h-full rounded-lg border-2 border-black">
      <div className="w-4/6 h-full flex-col flex justify-between p-4 items-center border-r-2 border-black ">
        <h2 className="text-lg font-bold">Аналог Kanban-доски</h2>
        <BoardsnCards />
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
};

const BoardsnCards = observer(() => {
  const boardsAnimationSequence: AnimationSequence = [
    [".board", { rotate: 1 }, { duration: 1 }],
    [".board", { y: -1 }, { duration: 1, at: "<" }],
    [".board", { rotate: 0 }, { duration: 1 }],
    [".board", { y: 0 }, { duration: 1, at: "<" }],
    [".board", { rotate: -1 }, { duration: 1 }],
    [".board", { y: 1 }, { duration: 1, at: "<" }],
    [".board", { rotate: 0 }, { duration: 1 }],
    [".board", { y: 0 }, { duration: 1, at: "<" }],
  ];
  function animateBoards() {
    animate(boardsAnimationSequence, { repeat: Infinity });
  }
  useEffect(() => animateBoards(), []);
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function animateRemove() {
    const itemShake: AnimationSequence = [
      [`#item-${Store.currentItem.id}`, { rotate: 2 }],
      [`#item-${Store.currentItem.id}`, { rotate: 0 }],
      [`#item-${Store.currentItem.id}`, { rotate: -2 }],
      [`#item-${Store.currentItem.id}`, { rotate: 0 }],
    ];
    const boardRemoveSequence: AnimationSequence = [
      [`#board-${Store.currentBoard.id}`, { scale: 0.98 }, { duration: 0.1 }],
    ];
    animate(boardRemoveSequence);
    animate(itemShake, { repeat: Infinity });
  }

  function animateAdd(board: boardProps) {
    const boardAddSequence: AnimationSequence = [
      [`#board-${Store.currentBoard.id}`, { scale: 1 }, { duration: 0.1 }],
      [`#board-${board.id}`, { scale: 0.97 }, { duration: 0.1, at: "<" }],
      [`#board-${board.id}`, { scale: 1 }, { duration: 0.2 }],
    ];
    animate(boardAddSequence);
  }

  function handleDragLeave(e: React.DragEvent) {}
  function handleDragStart(
    e: MouseEvent | TouchEvent | PointerEvent,
    board: boardProps,
    item: itemProps,
  ) {
    Store.setCurrentBoard(board);
    Store.setCurrentItem(item);

    animateRemove();
  }
  function handleDragEnd(e: MouseEvent | TouchEvent | PointerEvent) {}
  function handleDrop(e: React.DragEvent, board: boardProps, item: itemProps) {
    e.stopPropagation();
    e.preventDefault();
    Store.setDeleteFromBoard(board, item);
    animateAdd(board);
    Store.setNullCurrentItem();
    animateRemove();
    Store.setBoardList(board);
  }

  function dropItemHandler(e: React.DragEvent, board: boardProps) {
    e.stopPropagation();
    Store.setAddToBoard(board);
    Store.setBoardList(board);
    animateAdd(board);
  }

  return (
    <div className="flex w-full h-full items-center justify-center gap-10 pt-2">
      {Store.boardList.map((board) => (
        <motion.div
          id={`board-${board.id.toString()}`}
          key={board.id}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => dropItemHandler(e, board)}
          className="board flex flex-col rounded-lg w-1/4 h-3/4 border-2 border-black items-center justify-start gap-8 p-2"
        >
          <div className="border-b-black border-b-4 w-full flex justify-center items-center font-bold text-lg">
            {board.title}
          </div>
          <div className="flex flex-col h-3/4 overflow-scroll gap-2 w-40 rounded-lg border-black border-2 p-2 items-center justify-start ">
            {board.items.map((item) => (
              <motion.div
                id={`item-${item.id.toString()}`}
                whileHover={{
                  scale: 1.05,
                  color: "white",
                  background: "black",
                }}
                key={item.id}
                initial={{ background: "white", color: "black" }}
                transition={{ duration: 0.5 }}
                className="w-full text-sm p-2 flex cursor-pointer rounded-lg justify-center items-center h-10 border-black border-2"
                draggable={true}
                onDragOver={(e) => handleDragOver(e)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDragStart={(e) => handleDragStart(e, board, item)}
                onDragEnd={(e) => handleDragEnd(e)}
                onDrop={(e) => handleDrop(e, board, item)}
              >
                {item.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
});
