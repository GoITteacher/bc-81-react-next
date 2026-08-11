"use client";
import { useFruitsStore } from "@/stores/fruits";
import css from "./Lemons.module.css";

const Lemons = () => {
  const lemons = useFruitsStore((s) => s.lemons);
  // const store = useFruitsStore();
  console.log("RERENDER LEMONS COMPONENT");

  return (
    <div className={css["lemons"]}>
      <p>Lemons: {lemons}</p>
    </div>
  );
};

export default Lemons;
