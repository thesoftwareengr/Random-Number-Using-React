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
      <div>
        <div>
          <h1>Random Generator App</h1>
        </div>
        <div>
          <h3>{randomNumber}</h3>
        </div>
        <div>
          <button onClick={useHandleonClick}>Randomize</button>
        </div>
      </div>
    </>
  );
}

export default Random;
