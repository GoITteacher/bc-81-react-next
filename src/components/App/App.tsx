import TaskList from "../TaskList/TaskList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { useTasks } from "../../hooks/useTasks";

export default function App() {
  const [query, setQuery] = useState("");

  const { tasks, isLoading } = useTasks(query);
  const [isOpenCreateModal, openCreateModal, closeCreateModal] = useModal();
  const [isOpenUpdateModal, openUpdateModal, closeUpdateModal] = useModal();

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox value={query} onChange={setQuery} />
        <p>QUERY: {query}</p>

        <button className={css.createButton} onClick={openCreateModal}>
          Create task
        </button>
        <button className={css.createButton} onClick={openUpdateModal}>
          Update task
        </button>
      </header>
      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {!isLoading && <TaskList tasks={tasks} />}

      {isOpenCreateModal && (
        <Modal onClose={closeCreateModal}>
          <p>HELLO CREATE</p>
        </Modal>
      )}

      {isOpenUpdateModal && (
        <Modal onClose={closeUpdateModal}>
          <p>HELLO UPDATE</p>
        </Modal>
      )}
    </div>
  );
}

//!=========================================

// useState, useEffect, useId, useDebounce, useQuery, useMutation
