import { useQuery } from "@tanstack/react-query";
import { getCars } from "../services/carsService";
import { Car } from "../types/cars";
import { AxiosError } from "axios";

type UseCarsResult = [Car[], boolean, Error | null];

export const useCars = (): UseCarsResult => {
  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars({}),
    refetchOnMount: true,
  });

  const carsArr = carsQuery.data?.items || [];
  const isLoading = carsQuery.isLoading;
  const error = carsQuery.error;
  return [carsArr, isLoading, error];
};
