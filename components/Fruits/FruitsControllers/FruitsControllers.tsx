"use client";

import { useFruitsStore } from "@/stores/fruits";
import css from "./FruitsControllers.module.css";

const FruitsControllers = () => {
  const aIncrement = useFruitsStore((s) => s.applesIncrement);
  const oIncrement = useFruitsStore((s) => s.orangesIncrement);
  const lIncrement = useFruitsStore((s) => s.lemonsIncrement);
  const resetFruits = useFruitsStore((s) => s.resetFruits);

  return (
    <div className={css["fruitsControllers"]}>
      <button onClick={() => aIncrement()}>Apple ++</button>
      <button onClick={() => lIncrement()}>Lemon ++</button>
      <button onClick={() => oIncrement()}>Orange ++</button>

      <button onClick={() => resetFruits()}>Reset Fruits</button>
    </div>
  );
};

export default FruitsControllers;
