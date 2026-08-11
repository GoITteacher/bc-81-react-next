"use client";
import { useFruitsStore } from "@/stores/fruits";
import css from "./Oranges.module.css";

const Oranges = () => {
  const oranges = useFruitsStore((s) => s.oranges);

  return (
    <div className={css["oranges"]}>
      <p>oranges: {oranges}</p>
    </div>
  );
};

export default Oranges;
