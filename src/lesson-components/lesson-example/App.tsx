import Container from "./books/Container/Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import Sidebar from "./Sidebar/Sidebar";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.page}>
      <Header />
      <main className={css.main}>
        <Sidebar />
        <Container />
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}
