import css from "./Listener.module.css";

const Listener = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("CLICK");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const showNumber = (x: number) => {
    console.log(x);
  };

  const handleSubmit = (formData: FormData) => {
    const data = {
      title: formData.get("title") as string,
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      age: Number(formData.get("age")),
      city: formData.get("city"),
      isAdmin: Boolean(formData.get("isAdmin")),
      time: formData.getAll("time") as string[],
    };
    const title = formData.get("title") as string;

    console.log(data);
  };

  return (
    <div className={css["listener"]}>
      <button
        onClick={() => {
          showNumber(1);
          console.log("Click");
        }}
      >
        Click Me 1
      </button>
      <button
        onClick={() => {
          console.log("TEST 2");
        }}
      >
        Click Me 2
      </button>
      <input onChange={handleChange} />

      <form action={handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="firstname" />
        <input type="text" name="lastname" />
        <input type="number" name="age" />
        <input type="string" name="city" />

        <input type="checkbox" name="isAdmin" />
        <div>
          <input type="checkbox" name="time" value="12:00" />
          <input type="checkbox" name="time" value="13:00" />
          <input type="checkbox" name="time" value="15:00" />
          <input type="checkbox" name="time" value="19:00" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Listener;
