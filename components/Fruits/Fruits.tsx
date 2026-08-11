import Apples from "./Apples/Apples";
import css from "./Fruits.module.css";
import FruitsControllers from "./FruitsControllers/FruitsControllers";
import Lemons from "./Lemons/Lemons";
import Oranges from "./Oranges/Oranges";

const Fruits = () => {
  return (
    <div className={css["fruits"]}>
      <Apples />
      <Lemons />
      <Oranges />

      <FruitsControllers />
    </div>
  );
};

export default Fruits;
