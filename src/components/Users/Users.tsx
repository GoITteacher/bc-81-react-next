import axios from "axios";
import css from "./Users.module.css";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const json = localStorage.getItem("users") || "[]";
      const data = JSON.parse(json) as User[];
      return data;
    } catch {
      return [];
    }
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     setUsers(res.data);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className={css["users"]}>
      {users.map((el) => {
        return <li key={el.id}>{el.name}</li>;
      })}
    </div>
  );
};

export default Users;
