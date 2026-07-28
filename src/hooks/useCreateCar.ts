import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCarBody } from "../types/cars";
import { createCar } from "../services/carsService";
import toast from "react-hot-toast";

export const useCreateCar = () => {
  const queryClient = useQueryClient();

  const createCarMutation = useMutation({
    mutationKey: ["new-car"],
    mutationFn: (newCar: CreateCarBody) => createCar(newCar),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
      toast.success("success");
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  const { mutate } = createCarMutation;

  return mutate;
};
