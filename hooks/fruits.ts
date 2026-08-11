import { useFruitsStore } from "@/stores/fruits";

export const useTotalFruits = () => {
  const apples = useFruitsStore((s) => s.apples);
  const oranges = useFruitsStore((s) => s.oranges);
  const lemons = useFruitsStore((s) => s.lemons);

  const totalFruits = apples + oranges + lemons;

  return totalFruits;
};
