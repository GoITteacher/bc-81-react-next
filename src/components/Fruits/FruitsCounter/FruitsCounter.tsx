import css from "./FruitsCounter.module.css";

interface FruitsCounterProps {
  apples: number;
  lemons: number;
  oranges: number;
}

const FruitsCounter = ({ apples, lemons, oranges }: FruitsCounterProps) => {
  return (
    <div className={css["fruitsCounter"]}>
      <p>Apples: {apples}</p>
      <p>Lemons: {lemons}</p>
      <p>Oranges: {oranges}</p>
    </div>
  );
};

export default FruitsCounter;
