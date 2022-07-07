import classnames from "classnames";
import { useState } from "react";
import { GameProps, Card } from "../../types";

const cardStyles = {
  Red: "bg-red-300",
  Blue: "bg-blue-300",
  Black: "bg-black",
  Neutral: "bg-gray-200",
};

export default function GameBoard(props: GameProps) {
  return (
    <div className="flex flex-row lg:p-10 sm:p-2 max-w-7xl flex-wrap">
      {props.cards &&
        props.cards.map((card: Card) => (
          <button
            key={card.id}
            className={classnames(
              "px-8 py-6 m-3 w-48 rounded-md shadow-md text-center",
              card.visible
                ? cardStyles[card.color]
                : "hover:-translate-y-2 hover:border-yellow-200 hover:border-2 border-2"
            )}
            onClick={(e) => props.clickCard(e, card.id)}
          >
            {card.word}
          </button>
        ))}
    </div>
  );
}
