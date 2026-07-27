import { useQuery } from "@tanstack/react-query";
import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";
import { getCars } from "../../../services/carsService";

const CarList = () => {
  const carsQuery = useQuery({
    queryKey: ["cars"],
    queryFn: () => getCars({}),
  });

  const carsArr = carsQuery.data?.items || [];

  return (
    <ul className={css["car-list"]}>
      {carsArr.map((car) => {
        return <CarItem car={car} key={car._id} />;
      })}
    </ul>
  );
};

export default CarList;
