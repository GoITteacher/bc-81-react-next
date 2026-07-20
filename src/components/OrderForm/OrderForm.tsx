import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const prefix = useId();

  const handleSubmit = (formData: FormData) => {
    const data = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      delivery: formData.get("delivery") as string,
      delivery2: formData.get("delivery2") as string,
      color: formData.get("color") as string,
      date: new Date(formData.get("date") as string),
      price: Number(formData.get("price")),
      time: formData.get("time") as string,
    };
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`username-${prefix}`}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="username"
          id={`username-${prefix}`}
        />

        <label className={css.label} htmlFor={`email-${prefix}`}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={`email-${prefix}`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <select name="delivery2">
          <option value="pickup">pickup</option>
          <option value="courier">courier</option>
          <option value="drone">drone</option>
        </select>
      </fieldset>

      <fieldset className={css.fieldset}>
        <input type="color" name="color" />
        <input type="number" name="price" />
        <input type="date" name="date" />
        <input type="time" name="time" />
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
