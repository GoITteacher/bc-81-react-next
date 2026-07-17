import { useState } from "react";
import css from "./CounterExample.module.css";

const CounterExample = () => {
  const [counter, setCounter] = useState(0);
  // const [array, setArray] = useState<string[]>([]);

  const handleIncrement = () => {
    const newValue = counter + 1;
    setCounter(newValue);
  };

  return (
    <div className={css["counterExample"]}>
      <button onClick={handleIncrement}>Click Me</button>
      <p>Count: {counter}</p>
    </div>
  );
};

export default CounterExample;
