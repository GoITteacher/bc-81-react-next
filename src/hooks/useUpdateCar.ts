import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCar } from "../services/carsService";
import { CreateCarBody } from "../types/cars";
interface UpdateCarMutatationBody {
  id: string;
  body: CreateCarBody;
}

export const useUpdateCar = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["update-car"],
    mutationFn: ({ id, body }: UpdateCarMutatationBody) => updateCar(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });

  return mutate;
};
