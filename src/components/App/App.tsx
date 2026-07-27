import { Toaster } from "react-hot-toast";
import Cars from "../Cars/Cars";
import Tasks from "../Tasks/Tasks";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Toaster />
      <Cars />
      <hr />
      <Tasks />
    </div>
  );
}
