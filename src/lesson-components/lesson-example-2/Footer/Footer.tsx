import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css["footer"]}>
      Footer
      <button
        style={{
          width: "150px",
          fontSize: "25px",
          color: "red",
        }}
        className={css["button"]}
      >
        Test
      </button>
    </footer>
  );
};

export default Footer;
