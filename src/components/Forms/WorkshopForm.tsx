import css from "./Form.module.css";

export default function WorkshopForm() {
  return (
    <form className={css.form}>
      <h2>Реєстрація на воркшоп</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Учасник</legend>

        <label className={css.label} htmlFor="workshop-name">
          Ім’я та прізвище
        </label>
        <input id="workshop-name" className={css.input} />

        <label className={css.label} htmlFor="workshop-email">
          Email
        </label>
        <input id="workshop-email" className={css.input} />

        <label className={css.label} htmlFor="workshop-phone">
          Телефон
        </label>
        <input id="workshop-phone" className={css.input} />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Формат</legend>

        <label className={css.label} htmlFor="track">
          Трек
        </label>
        <select id="track" className={css.input}>
          <option>Обери трек</option>
          <option>Product design</option>
          <option>Frontend</option>
          <option>Growth & marketing</option>
        </select>

        <p className={css.label}>Рівень досвіду</p>

        <label className={css.option}>
          <input />
          Початківець
        </label>

        <label className={css.option}>
          <input />
          Middle
        </label>

        <label className={css.option}>
          <input />
          Senior
        </label>
      </fieldset>

      <label className={css.label} htmlFor="workshop-question">
        Питання чи побажання
      </label>

      <textarea id="workshop-question" rows={4} className={css.textarea} />

      <button type="submit" className={css.button}>
        Зареєструватися
      </button>
    </form>
  );
}
