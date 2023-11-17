import React, { useState } from "react";

function Random() {
  const [clicked, setClicked] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  function useHandleonClick() {
    setClicked(true);
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
  }

  return (
    <>
      <div className="container">
        <div>
          <h1 className="title">Random Generator App</h1>
        </div>
        <div>
          <h3 className="output">{randomNumber}</h3>
        </div>
        <div>
          <button className="button" onClick={useHandleonClick}>
            Randomize
          </button>
        </div>
      </div>
    </>
  );
}

export default Random;
