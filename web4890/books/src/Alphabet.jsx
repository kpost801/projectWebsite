import React from "react";

const Alphabet = ({ onLetterClick }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXY".split("");

  return (
    <div className="alphabetname">
      {alphabet.map((letter) => (
        <a
          href={`#${letter}`}
          key={letter}
          onClick={(e) => {
            e.preventDefault();
            if (typeof onLetterClick === "function") {
              onLetterClick(letter);
            } else {
              console.error("Not a function");
            }
          }}
          className="alphabetlist"
        >
          {letter}
        </a>
      ))}
    </div>
  );
};

export default Alphabet;
