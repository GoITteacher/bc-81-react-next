import { useModal } from "../../hooks/useModal";
import type { Task } from "../../types/task";
import Modal from "../Modal/Modal";
import css from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
          />
          <span className={css.text}>{task.text}</span>
          <button type="button" className={css.button} onClick={openModal}>
            Delete
          </button>
        </li>
      ))}

      {isOpenModal && <Modal onClose={closeModal}>Delete Modal</Modal>}
    </ul>
  );
}
