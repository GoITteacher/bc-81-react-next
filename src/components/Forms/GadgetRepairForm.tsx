import css from "./Form.module.css";

export default function GadgetRepairForm() {
  return (
    <form className={css.form}>
      <h2>Заявка на ремонт гаджета</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Пристрій</legend>

        <label className={css.label} htmlFor="gadget-type">
          Тип пристрою
        </label>
        <input
          id="gadget-type"
          name="type"
          type="text"
          className={css.input}
          placeholder="Смартфон, ноутбук, планшет"
        />

        <label className={css.label} htmlFor="gadget-brand">
          Марка
        </label>
        <input
          id="gadget-brand"
          name="brand"
          type="text"
          className={css.input}
          placeholder="Samsung, Apple, Asus"
        />

        <label className={css.label} htmlFor="gadget-model">
          Модель
        </label>
        <input
          id="gadget-model"
          name="model"
          type="text"
          className={css.input}
          placeholder="Galaxy S23, ZenBook 14"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Проблема</legend>

        <label className={css.label} htmlFor="issue-summary">
          Короткий опис
        </label>
        <input
          id="issue-summary"
          name="summary"
          type="text"
          className={css.input}
          placeholder="Не заряджається / тріщина екрану"
        />

        <label className={css.label} htmlFor="issue-detail">
          Детальний опис
        </label>
        <textarea
          id="issue-detail"
          name="detail"
          rows={4}
          className={css.textarea}
          placeholder="Коли виникла проблема, що вже перевіряли"
        />

        <label className={css.label} htmlFor="budget">
          Орієнтовний бюджет
        </label>
        <input
          id="budget"
          name="budget"
          type="number"
          min="0"
          step="1"
          className={css.input}
          placeholder="Напр., 1500 грн"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Контакти</legend>

        <label className={css.label} htmlFor="contact-name">
          Ім’я
        </label>
        <input
          id="contact-name"
          name="contactName"
          type="text"
          className={css.input}
          placeholder="Ваше ім’я"
        />

        <label className={css.label} htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="contactEmail"
          type="email"
          className={css.input}
          placeholder="name@email.com"
        />
      </fieldset>

      <button type="submit" className={css.button}>
        Надіслати заявку
      </button>
    </form>
  );
}
