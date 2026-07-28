import { useState } from "react";

type UseModalResult = [boolean, () => void, () => void];

export const useModal = (): UseModalResult => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return [isModalOpen, openModal, closeModal];
};
