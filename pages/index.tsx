import { useEffect, useState } from "react";
import { io, Socket } from "Socket.IO-client";
import GameBoard from "./components/GameBoard";

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

const Cards: Array<Card> = [
  { id: 0, word: "Hello", color: "Blue", visible: false },
  { id: 1, word: "Hello", color: "Blue", visible: false },
  { id: 2, word: "Hello", color: "Blue", visible: false },
  { id: 3, word: "Hello", color: "Blue", visible: false },
  { id: 4, word: "Hello", color: "Blue", visible: false },
  { id: 5, word: "Hello", color: "Blue", visible: false },
  { id: 6, word: "Hello", color: "Neutral", visible: false },
  { id: 7, word: "Hello", color: "Neutral", visible: false },
  { id: 8, word: "Hello", color: "Neutral", visible: false },
  { id: 9, word: "Hello", color: "Neutral", visible: false },
  { id: 11, word: "Hello", color: "Blue", visible: false },
  { id: 12, word: "Hello", color: "Blue", visible: false },
  { id: 13, word: "Hello", color: "Blue", visible: false },
  { id: 15, word: "Hello", color: "Red", visible: false },
  { id: 14, word: "Hello", color: "Red", visible: false },
  { id: 10, word: "Hello", color: "Red", visible: false },
  { id: 16, word: "Hello", color: "Red", visible: false },
  { id: 17, word: "Hello", color: "Red", visible: false },
  { id: 18, word: "Hello", color: "Red", visible: false },
  { id: 19, word: "Hello", color: "Red", visible: false },
  { id: 20, word: "Hello", color: "Red", visible: false },
  { id: 21, word: "Hello", color: "Red", visible: false },
  { id: 22, word: "Hello", color: "Red", visible: false },
  { id: 23, word: "Hello", color: "Red", visible: false },
  { id: 24, word: "Hello", color: "Black", visible: false },
];

const Home = () => {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState(Cards);

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
      setCards(msg);
    });
  };

  function clickCard(e, cardId: number) {
    console.log("flipping card", cardId);
    let newCards = cards
      .slice(0, cardId)
      .concat({ ...cards[cardId], visible: true })
      .concat(cards.slice(cardId + 1));
    socket.emit("card-flip", newCards);
  }

  return (
    <div className="m-20">
      <div className="text-xl">Codenames</div>
      <GameBoard clickCard={clickCard} cards={cards}></GameBoard>
    </div>
  );
};

export default Home;
