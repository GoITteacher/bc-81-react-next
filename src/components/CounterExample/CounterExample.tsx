import css from "./CounterExample.module.css";

const CounterExample = () => {
  return (
    <div className={css["counterExample"]}>
      <button>Click Me</button>
      <p>Count:0</p>
    </div>
  );
};

export default CounterExample;
