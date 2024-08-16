import React, { useEffect, useState } from "react";
import PuzzleBox from "../components/PuzzleBox";

const Home = () => {
  let [wordData, setWordData] = useState(null);
  let [random, setRandom] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let startGame = () => {
    setSeconds(60);
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      if (seconds === 1) return () => clearInterval(interval);
    }, 1000);
  };

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setWordData(data));
  }, []);

  // setRandom(Math.floor(Math.random() * (0 - 4)) + 4);
  console.log(wordData);

  let word_data = [
    {
      first_word: [
        { id: 1, name: "S" },
        { id: 2, name: "e" },
        { id: 3, name: "A" },
        { id: 4, name: "R" },
        { id: 5, name: "T" },
        { id: 6, name: "T" },
      ],
      first_word_result: ["S", "T", "A", "R", "T"],
      second_word: [
        { id: 11, name: "S" },
        { id: 12, name: "T" },
        { id: 13, name: "O" },
        { id: 14, name: "P" },
        { id: 15, name: "E" },
        { id: 16, name: "N" },
      ],
      second_word_result: ["S", "T", "O", "P"],
      third_word: [
        { id: 21, name: "D" },
        { id: 22, name: "A" },
        { id: 23, name: "T" },
        { id: 24, name: "D" },
        { id: 25, name: "A" },
        { id: 26, name: "F" },
      ],
      third_word_result: ["F", "A", "T", "D", "A", "D"],
      fourth_word: [
        { id: 31, name: "B" },
        { id: 32, name: "B" },
        { id: 33, name: "D" },
        { id: 34, name: "A" },
        { id: 35, name: "Y" },
        { id: 36, name: "O" },
      ],
      fourth_word_result: ["B", "A", "D", "B", "O", "Y"],
      fifth_word: [
        { id: 41, name: "S" },
        { id: 42, name: "T" },
        { id: 43, name: "A" },
        { id: 44, name: "M" },
        { id: 45, name: "P" },
        { id: 46, name: "N" },
      ],
      fifth_word_result: ["S", "T", "A", "M", "P"],
      sixth_word: [
        { id: 51, name: "A" },
        { id: 52, name: "B" },
        { id: 53, name: "P" },
        { id: 54, name: "T" },
        { id: 55, name: "U" },
        { id: 56, name: "R" },
      ],
      sixth_word_result: ["A", "B", "R", "U", "P", "T"],
    },
    {
      first_word: [
        { id: 1, name: "b" },
        { id: 2, name: "B" },
        { id: 3, name: "Q" },
        { id: 4, name: "Y" },
        { id: 5, name: "A" },
        { id: 6, name: "T" },
      ],
      first_word_result: ["B", "A", "B", "Y"],
      second_word: [
        { id: 11, name: "W" },
        { id: 12, name: "R" },
        { id: 13, name: "T" },
        { id: 14, name: "A" },
        { id: 15, name: "E" },
        { id: 16, name: "R" },
      ],
      second_word_result: ["W", "A", "T", "E", "R"],
      third_word: [
        { id: 21, name: "D" },
        { id: 22, name: "A" },
        { id: 23, name: "T" },
        { id: 24, name: "A" },
        { id: 25, name: "A" },
        { id: 26, name: "F" },
      ],
      third_word_result: ["D", "A", "T", "A"],
      fourth_word: [
        { id: 31, name: "B" },
        { id: 32, name: "N" },
        { id: 33, name: "R" },
        { id: 34, name: "A" },
        { id: 35, name: "Y" },
        { id: 36, name: "O" },
      ],
      fourth_word_result: ["B", "O", "R", "N"],
      fifth_word: [
        { id: 41, name: "S" },
        { id: 42, name: "T" },
        { id: 43, name: "D" },
        { id: 44, name: "M" },
        { id: 45, name: "A" },
        { id: 46, name: "N" },
      ],
      fifth_word_result: ["S", "T", "A", "N", "D"],
      sixth_word: [
        { id: 51, name: "A" },
        { id: 52, name: "B" },
        { id: 53, name: "S" },
        { id: 54, name: "B" },
        { id: 55, name: "O" },
        { id: 56, name: "R" },
      ],
      sixth_word_result: ["A", "B", "S", "O", "R", "b"],
    },
    {
      first_word: [
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "A" },
        { id: 4, name: "R" },
        { id: 5, name: "T" },
        { id: 6, name: "T" },
      ],
      first_word_result: ["S", "T", "A", "R", "T"],
      second_word: [
        { id: 11, name: "p" },
        { id: 12, name: "O" },
        { id: 13, name: "O" },
        { id: 14, name: "P" },
        { id: 15, name: "E" },
        { id: 16, name: "N" },
      ],
      second_word_result: ["P", "E", "N"],
      third_word: [
        { id: 21, name: "D" },
        { id: 22, name: "A" },
        { id: 23, name: "T" },
        { id: 24, name: "D" },
        { id: 25, name: "A" },
        { id: 26, name: "F" },
      ],
      third_word_result: ["D", "A", "T", "A"],
      fourth_word: [
        { id: 31, name: "S" },
        { id: 32, name: "B" },
        { id: 33, name: "D" },
        { id: 34, name: "A" },
        { id: 35, name: "Y" },
        { id: 36, name: "O" },
      ],
      fourth_word_result: ["B", "A", "D"],
      fifth_word: [
        { id: 41, name: "S" },
        { id: 42, name: "T" },
        { id: 43, name: "U" },
        { id: 44, name: "M" },
        { id: 45, name: "P" },
        { id: 46, name: "N" },
      ],
      fifth_word_result: ["S", "T", "U", "M", "P"],
      sixth_word: [
        { id: 51, name: "S" },
        { id: 52, name: "I" },
        { id: 53, name: "L" },
        { id: 54, name: "E" },
        { id: 55, name: "U" },
        { id: 56, name: "M" },
      ],
      sixth_word_result: ["S", "M", "I", "L", "E"],
    },
    {
      first_word: [
        { id: 1, name: "S" },
        { id: 2, name: "e" },
        { id: 3, name: "A" },
        { id: 4, name: "R" },
        { id: 5, name: "T" },
        { id: 6, name: "T" },
      ],
      first_word_result: ["S", "T", "A", "R", "T"],
      second_word: [
        { id: 11, name: "S" },
        { id: 12, name: "T" },
        { id: 13, name: "O" },
        { id: 14, name: "P" },
        { id: 15, name: "E" },
        { id: 16, name: "N" },
      ],
      second_word_result: ["S", "T", "O", "P"],
      third_word: [
        { id: 21, name: "D" },
        { id: 22, name: "A" },
        { id: 23, name: "T" },
        { id: 24, name: "D" },
        { id: 25, name: "A" },
        { id: 26, name: "F" },
      ],
      third_word_result: ["F", "A", "T", "D", "A", "D"],
      fourth_word: [
        { id: 31, name: "B" },
        { id: 32, name: "B" },
        { id: 33, name: "D" },
        { id: 34, name: "A" },
        { id: 35, name: "Y" },
        { id: 36, name: "O" },
      ],
      fourth_word_result: ["B", "A", "D", "B", "O", "Y"],
      fifth_word: [
        { id: 41, name: "S" },
        { id: 42, name: "T" },
        { id: 43, name: "A" },
        { id: 44, name: "M" },
        { id: 45, name: "P" },
        { id: 46, name: "N" },
      ],
      fifth_word_result: ["S", "T", "A", "M", "P"],
      sixth_word: [
        { id: 51, name: "A" },
        { id: 52, name: "B" },
        { id: 53, name: "P" },
        { id: 54, name: "T" },
        { id: 55, name: "U" },
        { id: 56, name: "R" },
      ],
      sixth_word_result: ["A", "B", "R", "U", "P", "T"],
    },
  ];
  return (
    <section className="min-h-[100vh] w-[100vw] overflow-hidden">
      <div className="flex flex-row items-center justify-center align-middle h-[50px] pt-[30px] gap-5 ">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setRandom(0)}
        >
          Easy
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setRandom(1)}
        >
          Difficult
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setRandom(2)}
        >
          Advance
        </button>
      </div>
      {seconds > 1 ? (
        <div className="w-full flex flex-col align-middle justify-center items-center pt-5 gap-1">
          <PuzzleBox
            words={word_data[random].first_word}
            result={word_data[random].first_word_result}
          />
          <PuzzleBox
            words={word_data[random].second_word}
            result={word_data[random].second_word_result}
          />
          <PuzzleBox
            words={word_data[random].third_word}
            result={word_data[random].third_word_result}
          />
          <PuzzleBox
            words={word_data[random].fourth_word}
            result={word_data[random].fourth_word_result}
          />
          <PuzzleBox
            words={word_data[random].fifth_word}
            result={word_data[random].fifth_word_result}
          />
          <PuzzleBox
            words={word_data[random].sixth_word}
            result={word_data[random].sixth_word_result}
          />
        </div>
      ) : (
        <div className="w-full flex align-middle items-center justify-center mt-9">
          <button
            className="bg-[green] hover:bg-gray-100  text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              startGame();
            }}
          >
            startgame
          </button>
        </div>
      )}

      <div className="flex align-middle justify-center items-center text-[red]">
        <h1 className="text-3xl p-5">{seconds}</h1>
      </div>
    </section>
  );
};

export default Home;
