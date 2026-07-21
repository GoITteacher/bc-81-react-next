import { useEffect, useState } from "react";

export default function CharacterWidget() {
  const [count, setCount] = useState(() => {
    try {
      const json = localStorage.getItem("counter") as string;
      const data = JSON.parse(json);
      return data;
    } catch {
      return 0;
    }
  });
  const [age, setAge] = useState(() => {
    try {
      const json = localStorage.getItem("age") as string;
      const data = JSON.parse(json);
      return data;
    } catch {
      return 0;
    }
  });

  const [page, setPage] = useState(1);

  // useEffect(()=>{}, [])

  // useEffect(() => {
  //   console.log("Вітаю з днем народження");
  // }, [age]);

  // useEffect(() => {
  //   if (count > 0) {
  //     console.log("Ооо, класна обновка");
  //   }
  // }, [count]);

  // useEffect(() => {}, [count, age]);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("age", JSON.stringify(age));
  }, [age]);

  return (
    <>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setAge(age + 1)}>Age({age})++</button>
      </div>
    </>
  );
}
