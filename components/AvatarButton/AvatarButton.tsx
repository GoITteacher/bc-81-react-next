"use client";

import { useState } from "react";
import css from "./AvatarButton.module.css";
import { updateAvatar } from "@/lib/auth";

const AvatarButton = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const handleClick = () => {
    const input = document.createElement("input") as HTMLInputElement;
    input.setAttribute("type", "file");

    input.addEventListener("change", (e) => {
      const files = input.files || [];
      if (files?.length === 0) {
        return;
      }

      const file = files[0];

      if (file.size === 0) {
        console.log("Оберіть валідний файл");
        return;
      }

      if (!file.type.startsWith("image/")) {
        console.log("Оберіть зображення");
        return;
      }

      if (file.size > 1024 * 1024 * 10) {
        console.log("Файл повинен бути меншим за 10мб");
        return;
      }

      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }

      const url = URL.createObjectURL(file);
      setImageUrl(url);
    });

    input.click();
  };

  return (
    <div className={css["avatarButton"]}>
      <button onClick={handleClick}>Choose File</button>
      {imageUrl && <img src={imageUrl} />}
    </div>
  );
};

export default AvatarButton;
