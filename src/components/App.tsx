import css from "./App.module.css";

import CarList from "./CarList/CarList";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />

      <main className={css["main"]}>
        <Sidebar />
        <CarList />
      </main>

      <Footer />
    </>
  );
};

export default App;
