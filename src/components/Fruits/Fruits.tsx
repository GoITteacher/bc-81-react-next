import css from "./Fruits.module.css";
import AppleCounter from "./AppleCounter/AppleCounter";
import GrapesCounter from "./GrapesCounter/GrapesCounter";
import LemonCounter from "./LemonCounter/LemonCounter";
import FruitsCounter from "./FruitsCounter/FruitsCounter";

const Fruits = () => {
  return (
    <div className={css["fruits"]}>
      <h2>Fruits</h2>
      <FruitsCounter apples={0} grapes={0} lemons={0} />
      <AppleCounter incrementApple={() => {}} />
      <GrapesCounter incrementGrapes={() => {}} />
      <LemonCounter incrementLemon={() => {}} />
    </div>
  );
};

export default Fruits;
