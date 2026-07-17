import { useState } from "react";
import Modal from "../Modal/Modal";
import css from "./ModalExample.module.css";

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css["modalExample"]}>
      <h1>Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default ModalExample;
