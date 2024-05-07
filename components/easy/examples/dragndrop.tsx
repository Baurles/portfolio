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
    <article className="min-w-full text-black max-w-full flex h-full rounded-lg border-2 border-black">
      <section className="w-4/6 h-full flex-col flex justify-between p-4 items-center border-r-2 border-black ">
        <h2 className="cursor-default text-lg font-bold">
          Аналог Kanban-доски
        </h2>
        <p>
          Можете подёргать ячейки списков, как внутри, так из одного в другой
        </p>
        <BoardsnCards />
        <AddItem />
      </section>
      <section className="w-2/6 gap-10 pt-2 justify-center h-full flex flex-col items-center ">
        <h2 className="font-bold text-2xl">
          TODO с <strong>Drag-n-Drop</strong>
        </h2>
        <p>Простой пример реализации Драг-н-Дропа в ТуДу листе</p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/Baurles/portfolio/blob/main/components/easy/examples/dragndrop.tsx"
        >
          <FaGithub size={50} />
        </motion.a>
      </section>
    </article>
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

  function animateColor() {
    animate(
      `#item-${Store.currentItem.id}`,
      { color: "white", background: "black" },
      { duration: 2 },
    );
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    animateColor();
  }

  function animateRemove(Value: number) {
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
    animate(itemShake, { repeat: Value });
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

    animateRemove(Infinity);
  }
  function handleDragEnd(e: MouseEvent | TouchEvent | PointerEvent) {
    animateRemove(0);
  }
  function handleDrop(e: React.DragEvent, board: boardProps, item: itemProps) {
    e.stopPropagation();
    e.preventDefault();
    Store.setDeleteFromBoard(board, item);
    animateAdd(board);
    animateRemove(0);
    Store.setNullCurrentItem();

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
        <motion.section
          id={`board-${board.id.toString()}`}
          key={board.id}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => dropItemHandler(e, board)}
          className="board flex flex-col rounded-lg w-1/4 h-3/4 border-2 border-black items-center justify-start gap-8 p-2"
        >
          <h2 className="cursor-default border-b-black border-b-4 w-full flex justify-center items-center font-bold text-lg">
            {board.title}
          </h2>
          <div className="flex flex-col h-3/4 overflow-scroll gap-2 w-40 rounded-lg border-black border-2 p-2 items-center justify-start ">
            {board.items.map((item) => (
              <motion.section
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
                <p>{item.text}</p>
              </motion.section>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
});

function AddItem() {
  return (
    <section className="flex gap-2 flex-col justify-center items-center">
      <p>Добавь разрабам страшную задачу!</p>
      <input className="w-48 h-10 text-center border-black border-2 rounded-lg" />
    </section>
  );
}
