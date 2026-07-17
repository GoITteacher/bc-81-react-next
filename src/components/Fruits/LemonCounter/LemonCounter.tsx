import css from "./LemonCounter.module.css";
interface LemonCounterProps {
  onIncrement: () => void;
}
const LemonCounter = ({ onIncrement }: LemonCounterProps) => {
  return (
    <div className={css["lemonCounter"]}>
      <button onClick={onIncrement}>Lemons +</button>
    </div>
  );
};

export default LemonCounter;
