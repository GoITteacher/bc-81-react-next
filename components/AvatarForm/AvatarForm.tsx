"use client";
import { ChangeEvent, useEffect, useState } from "react";
import css from "./AvatarForm.module.css";
import { updateAvatar } from "@/lib/auth";

const AvatarForm = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const file = formData.get("avatar") as File;

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

    setImageUrl(null);

    await updateAvatar(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const files = e.target.files || [];

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
  };

  useEffect(() => {
    return () => {
      if (imageUrl) {
        console.log("Очистити кеш");
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  return (
    <div className={css["avatarForm"]}>
      <form action={handleSubmit}>
        <input type="file" name="avatar" onChange={handleChange} />
        <button type="submit">Update avatar</button>
      </form>

      {imageUrl && <img src={imageUrl} alt="image" />}
    </div>
  );
};

export default AvatarForm;
