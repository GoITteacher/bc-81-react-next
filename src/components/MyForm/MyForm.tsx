import { ChangeEvent, useState } from "react";
import css from "./MyForm.module.css";

const MyForm = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={css["myForm"]}>
      <input
        type="text"
        value={data.firstname}
        onChange={handleChange}
        name="firstname"
      />
      <input
        type="text"
        value={data.lastname}
        onChange={handleChange}
        name="lastname"
      />
      <input
        type="text"
        value={data.phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
      />
      <input
        type="text"
        value={data.email}
        onChange={handleChange}
        name="email"
      />
      <input
        type="text"
        value={data.password}
        onChange={handleChange}
        name="password"
      />

      <div>
        <p>{JSON.stringify(data, null, 2)}</p>
      </div>
    </div>
  );
};

export default MyForm;
