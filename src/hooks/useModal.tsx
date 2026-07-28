import { useState } from "react";

type UseModalResult = [
  boolean,
  () => void,
  () => void,
  () => void,
  (x: boolean) => void,
];

export const useModal = (): UseModalResult => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return [isOpenModal, openModal, closeModal, toggleModal, setIsOpenModal];
};
