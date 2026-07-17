import css from "./Fruits.module.css";
import AppleCounter from "./AppleCounter/AppleCounter";

import LemonCounter from "./LemonCounter/LemonCounter";
import FruitsCounter from "./FruitsCounter/FruitsCounter";
import OrangesCounter from "./OrangesCounter/OrangesCounter";
import { useState } from "react";

const Fruits = () => {
  const [apples, setApples] = useState(0);
  const [lemons, setLemons] = useState(0);
  const [oranges, setOranges] = useState(0);

  const applesIncrement = () => {
    setApples(apples + 1);
  };

  const orangesIncrement = () => {
    setOranges(oranges + 1);
  };

  const lemonsIncrement = () => {
    setLemons(lemons + 1);
  };
  return (
    <div className={css["fruits"]}>
      <h2>Fruits</h2>
      <FruitsCounter apples={apples} lemons={lemons} oranges={oranges} />
      <AppleCounter onIncrement={applesIncrement} apples={apples} />
      <OrangesCounter onIncrement={orangesIncrement} />
      <LemonCounter onIncrement={lemonsIncrement} />
    </div>
  );
};

export default Fruits;
