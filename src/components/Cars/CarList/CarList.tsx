import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";
import { useCars } from "../../../hooks/useCars";

const CarList = () => {
  const [arr, isLoading, error] = useCars();

  if (isLoading) {
    return <p>Loading cars ...</p>;
  }

  if (error) {
    return <p>Error loading</p>;
  }

  return (
    <ul className={css["car-list"]}>
      {arr.map((car) => {
        return <CarItem car={car} key={car._id} />;
      })}
    </ul>
  );
};

export default CarList;
