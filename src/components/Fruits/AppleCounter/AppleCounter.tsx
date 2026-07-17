import css from "./AppleCounter.module.css";

interface AppleCounterProps {
  onIncrement: () => void;
  apples: number;
}

const AppleCounter = ({ onIncrement, apples }: AppleCounterProps) => {
  return (
    <div className={css["appleCounter"]}>
      <button onClick={onIncrement}>Apple ({apples}) +</button>
    </div>
  );
};

export default AppleCounter;
