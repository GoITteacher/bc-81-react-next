import css from "./ArrayExample.module.css";

const ArrayExample = () => {
  return (
    <div className={css["arrayExample"]}>
      <button>Arr Random Number</button>

      <ul>
        {[].map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayExample;
