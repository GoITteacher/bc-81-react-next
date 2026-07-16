import clsx from "clsx";
import { CarType } from "../../../helpers/cars";
import css from "./CarItem.module.css";
interface CarItem {
  car: CarType;
}
const CarItem = ({ car }: CarItem) => {
  return (
    <div className={clsx(css["carItem"], css["active"])}>
      <p>
        {car.model} - {car.make}
      </p>
    </div>
  );
};

export default CarItem;
