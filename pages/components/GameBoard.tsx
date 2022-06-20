import classnames from "classnames";
import { useState } from "react";

const cardStyles = {
  Red: "bg-red-300",
  Blue: "bg-blue-300",
  Black: "bg-black",
  Neutral: "bg-gray-200",
};

export default function GameBoard(props) {
  return (
    <div className="flex flex-row p-10 max-w-lg flex-wrap">
      {props.cards.map((card: Card) => (
        <button
          key={card.id}
          className={classnames(
            "p-2 border-2 m-3",
            card.visible ? cardStyles[card.color] : ""
          )}
          onClick={(e) => props.clickCard(e, card.id)}
        >
          {card.word}
        </button>
      ))}
    </div>
  );
}
