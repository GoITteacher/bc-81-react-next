import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FruitsStore {
  apples: number;
  oranges: number;
  lemons: number;

  applesIncrement: () => void;
  orangesIncrement: () => void;
  lemonsIncrement: () => void;

  setApples: (newValue: number) => void;
  setOranges: (newValue: number) => void;
  setLemons: (newValue: number) => void;

  setFruits: (apples: number, oranges: number, lemons: number) => void;
  resetFruits: () => void;
}

export const useFruitsStore = create<FruitsStore>()(
  persist(
    (setStore) => {
      return {
        apples: 0,
        oranges: 0,
        lemons: 0,

        applesIncrement: () => {
          setStore((store) => {
            return {
              apples: store.apples + 1,
            };
          });
        },

        orangesIncrement: () => {
          setStore((store) => {
            return {
              oranges: store.oranges + 1,
            };
          });
        },

        lemonsIncrement: () => {
          setStore((store) => {
            return {
              lemons: store.lemons + 1,
            };
          });
        },

        setApples: (newValue: number) => {
          setStore(() => {
            return {
              apples: newValue,
            };
          });
        },

        setLemons: (newValue: number) => {
          setStore(() => {
            return {
              lemons: newValue,
            };
          });
        },

        setOranges: (newValue: number) => {
          setStore(() => {
            return {
              oranges: newValue,
            };
          });
        },

        setFruits: (apples: number, oranges: number, lemons: number) => {
          setStore(() => {
            return {
              apples: apples,
              oranges: oranges,
              lemons: lemons,
            };
          });
        },

        resetFruits: () => {
          setStore(() => {
            return {
              apples: 0,
              oranges: 0,
              lemons: 0,
            };
          });
        },
      };
    },
    {
      name: "fruits",
      partialize: (store) => {
        return { apples: store.apples };
      },
    }
  )
);
