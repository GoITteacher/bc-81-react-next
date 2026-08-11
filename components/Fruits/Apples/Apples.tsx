"use client";

import { useFruitsStore } from "@/stores/fruits";
import css from "./Apples.module.css";

const Apples = () => {
  const apples = useFruitsStore((s) => s.apples);

  return (
    <div className={css["apples"]}>
      <p>Apples: {apples}</p>
    </div>
  );
};

export default Apples;
