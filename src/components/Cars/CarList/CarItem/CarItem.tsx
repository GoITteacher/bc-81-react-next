import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Car } from "../../../../types/cars";
import css from "./CarItem.module.css";
import { Flex } from "antd";
import { deleteCar } from "../../../../services/carsService";

const CarItem = ({ car }: { car: Car }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["delete-car"],
    mutationFn: () => deleteCar(car._id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
  });

  return (
    <li className={css["car-item"]}>
      <Flex gap="large">
        <p>
          {car.make} {car.model}
        </p>
        <p>{car.price}</p>
        <p>{car.color}</p>
        <p>{car._id}</p>
      </Flex>
      <Flex gap="small">
        <button className={css["remove-btn"]} onClick={() => mutate()}>
          Видалити
        </button>
      </Flex>
    </li>
  );
};

export default CarItem;
