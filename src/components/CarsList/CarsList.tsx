import { Car } from "../../types/car";

interface CarsListProps {
  cars: Car[];
}

const CarsList = ({ cars }: CarsListProps) => {
  return (
    <ul>
      {cars.map((car, index) => (
        <li key={car._id}>
          {index + 1}. {car.make} - {car.model}
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
