import { useEffect } from "react";

export const useCloseModal = (onClose: () => void) => {
  useEffect(() => {
    function handleKeyDown() {
      onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
