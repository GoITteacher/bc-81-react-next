import { useState } from "react";
import css from "./ArrayExample.module.css";

const ArrayExample = () => {
  const [array, setArray] = useState<number[]>([1, 2, 4, 5]);

  // const handleClick = () => {
  //   setArray([...array, 9]);
  // };

  const handleClick = () => {
    const copy = [...array];
    copy.push(25);
    setArray(copy);
  };

  return (
    <div className={css["arrayExample"]}>
      <button onClick={handleClick}>Arr Random Number</button>

      <ul>
        {array.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayExample;
