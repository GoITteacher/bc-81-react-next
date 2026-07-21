import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import CharacterWidget from "./CharacterWidget";
import Users from "./Users/Users";
import Timer from "./Timer";

export default function App() {
  const [isOpen, setIsOpen] = useState(() => {
    try {
      const jsonData = localStorage.getItem("isOpen") || "false";
      const value = JSON.parse(jsonData);
      return value;
    } catch {
      return false;
    }
  });

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <>
      <Users />
      {/* <button onClick={open}>Open</button> */}
      {/* {isOpen && <Sidebar onClose={close} />} */}
      {/* <CharacterWidget /> */}
      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <Timer />} */}
    </>
  );
}
