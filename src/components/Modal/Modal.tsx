import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";
import { useCloseModal } from "../../hooks/useCloseModal";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  useCloseModal(onClose);

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button type="button" className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root") as HTMLDivElement
  );
}
