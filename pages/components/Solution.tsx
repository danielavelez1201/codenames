import { SolutionProps, Card } from "../../types";

export default function Solution(props: SolutionProps) {
  return (
    <div className="flex flex-row">
      <div className="p-10 flex flex-col bg-blue-100 rounded-lg">
        {props.cards &&
          props.cards.map((card: Card) => {
            if (card.color == "Blue") {
              return (
                <div
                  key={card.id}
                  className={card.visible ? "line-through" : ""}
                >
                  {card.word}
                </div>
              );
            }
          })}
      </div>
      <div className="ml-12 p-10 flex flex-col bg-red-100 rounded-lg">
        {props.cards &&
          props.cards.map((card: Card) => {
            if (card.color == "Red") {
              return (
                <div
                  key={card.id}
                  className={card.visible ? "line-through" : ""}
                >
                  {card.word}
                </div>
              );
            }
          })}
      </div>
      <div className="ml-12 p-10 flex flex-col bg-gray-100 rounded-lg">
        {props.cards &&
          props.cards.map((card: Card) => {
            if (card.color == "Black") {
              return (
                <div
                  key={card.id}
                  className={card.visible ? "line-through" : ""}
                >
                  {card.word}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
