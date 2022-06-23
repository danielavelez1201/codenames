import { Socket } from "socket.io-client";

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  "update-card": (msg: Array<Card>) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
  "update-card": () => void;
  "card-flip": () => void;
}

export interface InterServerEvents {
  ping: () => void;
  "update-card": () => void;
  "card-flip": () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export interface ISocket extends Socket {
  name?: string;
  cards?: Array<Card>;
}

export type Card = {
  id: number;
  word: string;
  color: "Blue" | "Red" | "Neutral" | "Black";
  visible: boolean;
};

export type GameProps = {
  clickCard: (a: any, b: number) => void;
  cards: Array<Card>;
};

export type SolutionProps = {
  cards: Array<Card>;
};
