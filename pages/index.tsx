import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  Card,
  ClientToServerEvents,
  ISocket,
  ServerToClientEvents,
} from "../types";
import GameBoard from "./components/GameBoard";
import Solution from "./components/Solution";
import { generateCards } from "../functions/helpers";

let socket: ISocket;

const Home = () => {
  const [input, setInput] = useState("");
  const emptyArray: Array<Card> = [];
  const [cards, setCards] = useState(emptyArray);
  const [showingKey, setShowingKey] = useState(false);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("update-card", (msg) => {
      console.log("update card");
      setCards(msg);
    });
  };

  function clickCard(e: React.ChangeEvent<HTMLInputElement>, cardId: number) {
    console.log("flipping card", cardId);
    console.log(cards);
    let newCards = cards
      .slice(0, cardId)
      .concat([{ ...(cards[cardId] as Card), visible: true }])
      .concat(cards.slice(cardId + 1));
    socket.emit("card-flip", newCards);
    setCards(newCards);
  }

  return (
    <div className="m-20">
      <div className="text-xl">Codenames</div>
      <button
        className="mt-5 text-lg p-3 border-2 bg-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-100"
        onClick={async () => {
          const newCards = await generateCards();
          setCards(newCards);
          socket.emit("card-flip", newCards);
        }}
      >
        Generate Board
      </button>
      <GameBoard clickCard={clickCard} cards={cards}></GameBoard>
      <button
        className="my-5 text-lg p-3 border-2 bg-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-100"
        onClick={() => setShowingKey(!showingKey)}
      >
        {showingKey ? "Hide Key" : "Show Key"}
      </button>
      {showingKey ? <Solution cards={cards}></Solution> : <></>}
    </div>
  );
};

export default Home;
