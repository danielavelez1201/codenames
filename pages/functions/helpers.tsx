import { Card } from "../../types";

const randomWords = require("random-spanish-words");

async function getWordFromAPI() {
  const response = await fetch(
    "https://palabras-aleatorias-public-api.herokuapp.com/random",
    {
      method: "GET",
      mode: "no-cors",
    }
  );
  const data = await response.json();
  const word = data["body"]["Word"];
  return word;
}

function getWords() {
  const resultArr = [];
  let count = 0;
  while (count < 25) {
    const word = randomWords();
    if (word.length > 4) {
      resultArr.push(word);
      count += 1;
    }
  }
  return resultArr;
}

function getRandIndex(indexArr: Array<number>) {
  let result = Math.floor(Math.random() * 25);
  while (indexArr.includes(result)) {
    result = Math.floor(Math.random() * 25);
  }
  indexArr.push(result);
  return result;
}

export async function generateCards() {
  const wordArray: Array<Card> = [];
  let indexArr: Array<number> = [];
  const words: Array<string> = getWords();
  for (let i = 0; i < 8; i++) {
    wordArray.push({
      word: words[i],
      color: "Blue",
      visible: false,
      id: getRandIndex(indexArr),
    });
  }
  for (let i = 0; i < 7; i++) {
    wordArray.push({
      word: words[i + 8],
      color: "Red",
      visible: false,
      id: getRandIndex(indexArr),
    });
  }
  for (let i = 0; i < 9; i++) {
    wordArray.push({
      word: words[i + 15],
      color: "Neutral",
      visible: false,
      id: getRandIndex(indexArr),
    });
  }
  wordArray.push({
    word: words[24],
    color: "Black",
    visible: false,
    id: getRandIndex(indexArr),
  });
  wordArray.sort((a: Card, b: Card) => a.id - b.id);
  console.log(wordArray);
  return wordArray;
}
