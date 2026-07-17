import { useState } from "react";
import css from "./ObjectExample.module.css";

interface Fruits {
  apples: number;
  lemons: number;
  oranges: number;
  grapes: number;
}

const ObjectExample = () => {
  const [fruits, setFruits] = useState({
    apples: 0,
    lemons: 0,
    oranges: 0,
    grapes: 0,
  });

  const handleApplesIncrement = () => {
    const copy = { ...fruits };
    copy.apples += 1;
    setFruits(copy);

    // setFruits({ ...fruits, apples: fruits.apples + 1 });
  };

  const handleLemonsIncrement = () => {
    const copy = { ...fruits };
    copy.lemons += 1;
    setFruits(copy);
    // setFruits({ ...fruits, apples: fruits.apples + 1 });
  };

  const resetFruits = () => {
    setFruits({
      apples: 0,
      lemons: 0,
      oranges: 0,
      grapes: 0,
    });
  };

  return (
    <div className={css["objectExample"]}>
      <p>Apples: {fruits.apples}</p>
      <p>Lemons: {fruits.lemons}</p>

      <button onClick={handleApplesIncrement}>Apples++</button>
      <button onClick={handleLemonsIncrement}>Lemons++</button>
      <button onClick={resetFruits}>Clear</button>
    </div>
  );
};

export default ObjectExample;
