import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./TaskForm.module.css";
import { addTask } from "../../../services/taskService";
import { NewTaskData } from "../../../types/task";

interface TaskFormProps {
  onSuccess: () => void;
}

export default function TaskForm({ onSuccess }: TaskFormProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["add-task"],
    mutationFn: (taskData: NewTaskData) => addTask(taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      onSuccess();
    },
    onError: () => {},
  });

  const handleSubmit = (formData: FormData) => {
    const data = {
      text: formData.get("text") as string,
    };

    mutate(data);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <label className={css.label}>
        Task text
        <textarea name="text" className={css.input} rows={5}></textarea>
      </label>

      <button type="submit" className={css.button}>
        {isPending ? "Creating new task..." : "Create"}
      </button>
    </form>
  );
}
