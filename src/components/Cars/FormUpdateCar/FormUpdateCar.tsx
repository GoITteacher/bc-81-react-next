import { CreateCarBody, FuelType } from "../../../types/cars";
import css from "./FormUpdateCar.module.css";
import { useUpdateCar } from "../../../hooks/useUpdateCar";

const FormUpdateCar = () => {
  const mutate = useUpdateCar();
  const handleSubmit = (formData: FormData) => {
    const id = formData.get("id") as string;
    const newCar: CreateCarBody = {
      model: formData.get("model") as string,
      make: formData.get("make") as string,
      year: Number(formData.get("year")),
      color: formData.get("color") as string,
      price: Number(formData.get("price")),
      mileage: Number(formData.get("mileage")),
      fuelType: formData.get("fuelType") as FuelType,
      description: formData.get("description") as string,
    };

    mutate({ id: id, body: newCar });
  };

  return (
    <form className={css["update-form"]} action={handleSubmit}>
      <input type="text" name="id" placeholder="id" />

      <input type="text" name="make" placeholder="make" />
      <input type="text" name="model" placeholder="model" />
      <input type="number" name="year" placeholder="year" />
      <input type="number" name="price" placeholder="price" />
      <input type="number" name="mileage" placeholder="mileage" />
      <input type="color" name="color" placeholder="color" />

      <select name="fuelType">
        <option value="gasoline">gasoline</option>
        <option value="electric">electric</option>
      </select>

      <textarea name="description"></textarea>

      <button type="submit">Оновити авто</button>
    </form>
  );
};

export default FormUpdateCar;
