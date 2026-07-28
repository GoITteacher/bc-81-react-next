import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/taskService";
import { Task } from "../types/task";

type UseTasks = [Task[], boolean];

export const useTasks = (): UseTasks => {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const arr = data || [];

  return [arr, isLoading];
};
