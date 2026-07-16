import { cars } from "../../helpers/cars";
import CarItem from "./CarItem/CarItem";
import css from "./CarList.module.css";

const CarList = () => {
  return (
    <div className={css["carList"]}>
      <ul>
        {cars.map((car) => {
          return <CarItem car={car} key={car._id} />;
        })}
      </ul>
    </div>
  );
};

export default CarList;
