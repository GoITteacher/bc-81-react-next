import css from "./Tasks.module.css";
import TaskList from "./TaskList/TaskList";
import Modal from "./Modal/Modal";
import TaskForm from "./TaskForm/TaskForm";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";

const Tasks = () => {
  const [isOpen, openModal, closeModal] = useModal();
  const [tasks, isLoading] = useTasks();

  return (
    <div className={css["container"]}>
      <header className={css.header}>
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {tasks && !isLoading && <TaskList tasks={tasks} />}
      {isOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Tasks;
