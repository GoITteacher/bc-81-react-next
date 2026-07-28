import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { getTasks } from "../services/taskService";

export const useTasks = (query: string) => {
  const [value] = useDebounce(query, 300);

  const tasksQuery = useQuery({
    queryKey: ["tasks", value],
    queryFn: () => getTasks(value),
  });

  const tasks = tasksQuery.data || [];
  const isLoading = tasksQuery.isLoading;

  return { tasks, isLoading };
};
