import css from "./OrangesCounter.module.css";

interface OrangesCounterProps {
  onIncrement: () => void;
}

const OrangesCounter = ({ onIncrement }: OrangesCounterProps) => {
  return (
    <div className={css["orangesCounter"]}>
      <button onClick={onIncrement}>Oranges +</button>
    </div>
  );
};

export default OrangesCounter;
