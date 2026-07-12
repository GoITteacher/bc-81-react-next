import css from "./Form.module.css";

export default function EventProposalForm() {
  return (
    <form className={css.form}>
      <h2>Подання ідеї заходу</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Базова інформація</legend>

        <label className={css.label} htmlFor="event-title">
          Назва події
        </label>
        <input
          id="event-title"
          name="title"
          type="text"
          className={css.input}
          placeholder="Напр., Вечір стартап-пітчів"
        />

        <label className={css.label} htmlFor="event-format">
          Формат
        </label>
        <input
          id="event-format"
          name="format"
          type="text"
          className={css.input}
          placeholder="Онлайн / офлайн / змішаний"
        />

        <label className={css.label} htmlFor="event-price">
          Орієнтовна вартість квитка
        </label>
        <input
          id="event-price"
          name="price"
          type="number"
          min="0"
          step="1"
          className={css.input}
          placeholder="300 грн"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Опис</legend>

        <label className={css.label} htmlFor="event-summary">
          Короткий опис
        </label>
        <input
          id="event-summary"
          name="summary"
          type="text"
          className={css.input}
          placeholder="Що це за подія"
        />

        <label className={css.label} htmlFor="event-detail">
          Деталі та програма
        </label>
        <textarea
          id="event-detail"
          name="detail"
          rows={4}
          className={css.textarea}
          placeholder="Ключові спікери, тривалість, теми"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Контакти організатора</legend>

        <label className={css.label} htmlFor="organizer-name">
          Ім’я
        </label>
        <input
          id="organizer-name"
          name="organizerName"
          type="text"
          className={css.input}
          placeholder="Ваше ім’я"
        />

        <label className={css.label} htmlFor="organizer-email">
          Email
        </label>
        <input
          id="organizer-email"
          name="organizerEmail"
          type="email"
          className={css.input}
          placeholder="name@email.com"
        />

        <label className={css.label} htmlFor="organizer-role">
          Роль / компанія
        </label>
        <input
          id="organizer-role"
          name="role"
          type="text"
          className={css.input}
          placeholder="Напр., координатор, ГО/компанія"
        />
      </fieldset>

      <button type="submit" className={css.button}>
        Надіслати ідею
      </button>
    </form>
  );
}
