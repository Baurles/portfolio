"use client";

import { FaGithub } from "react-icons/fa";
import DragStore from "@/stores/examples/DragStore";
import { observer } from "mobx-react";
import { cardProps } from "@/stores/examples/DragStore";

const Store = DragStore;

export const DragNDrop = () => {
  return (
    <div className="min-w-full text-black max-w-full flex h-full rounded-lg border-2 border-black">
      <div className="w-4/6 h-full flex-col flex justify-center items-center border-r-2 border-black ">
        <h2 className="text-lg font-bold">Аналог Kanban-доски</h2>
        <Kanban>
          <InnerList />
        </Kanban>
        <span>
          Можете подёргать ячейки списков,как внутри,так из одного в другой
        </span>
      </div>
      <div className="w-2/6 gap-10 pt-2 justify-center h-full flex flex-col items-center ">
        <span className="font-bold text-2xl">Drag-n-Drop</span>
        <span>Простой пример реализации Драг-н-Дропа</span>
        <FaGithub size={50} />
      </div>
    </div>
  );
};

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
    <div className="h-3/4 border-2 gap-2 p-2 justify-center items-center border-black flex flex-col w-1/4">
      {Store.cardList.map((card) => (
        <div
          draggable={true}
          onDragStart={(e) => handleDragStart(e, card)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragEnd={(e) => handleDragEnd(e)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, card)}
          className="w-full cursor-pointer h-20 border-2  flex justify-center items-center border-black "
          key={card.id}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
});

const Kanban = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-2 flex flex-col items-center justify-center h-3/4">
      <div className="pb-2">Поставленные задачи</div>
      {children}
    </div>
  );
};
