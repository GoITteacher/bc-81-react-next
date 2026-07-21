/**
 * - Додати обратник keydown при монтуванні
 * - Закривати по Escape
 * - Розібрати чому реєструється два слухача (Strict Mode)
 * - Очистити слухач при розмонтуванні
 */

import { useEffect, useState } from "react";
import css from "./Sidebar.module.css";

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   console.log("Додати прослуховувач");
  //   function handleKeyDown(e: KeyboardEvent) {
  //     console.log(e.code);
  //     if (e.code === "Escape") {
  //       onClose();
  //     }
  //   }
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     console.log("Видалити прослуховувач");
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("Mount Counter", count);

  //   return () => {
  //     console.log("Unmount Counter", count);
  //   };
  // }, [count]);

  return (
    <div className={css.wrapper}>
      <div className={css.sidebar}>
        <button onClick={onClose}>Close</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptatum culpa modi? Quaerat repellat sit error officia dolore?
          Suscipit nisi aliquam voluptates accusamus repellat illo expedita
          necessitatibus laudantium animi quo?
        </p>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Counter++</button>
      </div>
    </div>
  );
}
