import css from "./ObjectExample.module.css";

interface Fruits {
  apples: number;
  lemons: number;
  oranges: number;
  grapes: number;
}

const ObjectExample = () => {
  return (
    <div className={css["objectExample"]}>
      <p>Apples: {0}</p>
      <p>Lemons: {0}</p>

      <button>Apples++</button>
      <button>Lemons++</button>
    </div>
  );
};

export default ObjectExample;
