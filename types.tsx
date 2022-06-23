interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  "update-card": (msg: Array<Card>) => void;
}

interface ClientToServerEvents {
  hello: () => void;
  "update-card": () => void;
  "card-flip": () => void;
}

interface InterServerEvents {
  ping: () => void;
  "update-card": () => void;
  "card-flip": () => void;
}

interface SocketData {
  name: string;
  age: number;
}

type Card = {
  id: number;
  word: string;
  color: "Blue" | "Red" | "Neutral" | "Black";
  visible: boolean;
};

type GameProps = {
  clickCard: (a: any, b: number) => void;
  cards: Array<Card>;
};

type SolutionProps = {
  cards: Array<Card>;
};
