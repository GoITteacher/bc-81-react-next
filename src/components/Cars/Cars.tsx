import { useState } from "react";
import { Car, getCars } from "../../services/carService";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Cars.module.css";

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const handleSearchCars = async (query: string) => {
    const res = await getCars(query);
    setCars(res.items);
  };

  return (
    <div className={css["cars"]}>
      <h3>Cars</h3>
      <SearchForm onSubmit={handleSearchCars} />
      <ul>
        {cars.map((el) => {
          return (
            <li key={el._id}>
              {el.make} - {el.model}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cars;
