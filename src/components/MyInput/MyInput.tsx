import { useState } from "react";
import css from "./MyInput.module.css";

const MyInput = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const hanldeClear = () => {
    setUsername("");
    setIsChecked(true);
  };

  const handleSubmit = () => {
    const data = { username, email, password, age };
    console.log(data);
  };

  return (
    <div className={css["myInput"]}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      {username.length > 0 && <p>Hello {username}</p>}

      <button onClick={hanldeClear}>CLEAR</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MyInput;
