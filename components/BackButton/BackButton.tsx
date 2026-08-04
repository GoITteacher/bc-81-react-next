"use client";
import { useRouter } from "next/navigation";
import css from "./BackButton.module.css";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("До зустрічі");
    router.back();
  };

  return (
    <button className={css["backButton"]} onClick={handleClick}>
      Back
    </button>
  );
};

export default BackButton;
