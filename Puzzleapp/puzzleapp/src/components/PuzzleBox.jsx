import React, { useState } from "react";

const PuzzleBox = (prop) => {
  const [output, setOutput] = useState([]);
  const handleClick = (e) => {
    setOutput((prevState) => [...prevState, e]);
    console.log(output, prop.result);
  };
  return (
    <>
      <button onClick={() => setOutput([])}> {output}</button>

      {JSON.stringify(output) === JSON.stringify(prop.result) ? (
        <div className="flex flex-row gap-1">
          <div
            // className="flex border-[20px] border-amber-600 w-[90px] h-[90px] align-middle justify-center items-center hover:animate-bounce"

            type="submit"
            className=" text-white flex border-[20px] bg-green-600 border-green-600 w-[190px] h-[90px] align-middle justify-center items-center hover:animate-bounce"
          >
            Correct Answer
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-1">
          {prop.words.map((word) => {
            return (
              <div
                key={word.id}
                // className="flex border-[20px] border-amber-600 w-[90px] h-[90px] align-middle justify-center items-center hover:animate-bounce"
                onClick={() => handleClick(word.name)}
                id={word.id}
                type="submit"
                className=" text-black flex border-[20px] border-amber-600 w-[90px] h-[90px] align-middle justify-center items-center hover:animate-bounce"
              >
                {word.name}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PuzzleBox;
