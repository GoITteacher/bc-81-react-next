import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";

const IdeaSchema = Yup.object().shape({
  title: Yup.string().min(4).max(20).required(),
  format: Yup.string()
    .oneOf(["online", "offline"], 'Must be one of "online" or "offline"')
    .required(),
  price: Yup.number().min(100).max(10000).integer().required(),
  summary: Yup.string().min(4).max(200).required(),
  detail: Yup.string().min(4).max(200).required(),
  organizerName: Yup.string().min(4).max(20).required(),
  organizerEmail: Yup.string().email().required(),
  role: Yup.string().required(),
});

interface Idea {
  title: string;
  format: string;
  price: number;
  summary: string;
  detail: string;
  organizerName: string;
  organizerEmail: string;
  role: string;
}

const initalValues: Idea = {
  title: "",
  format: "",
  price: 0,
  summary: "",
  detail: "",
  organizerName: "",
  organizerEmail: "",
  role: "",
};

export default function EventProposalForm() {
  const handleSubmit = (values: Idea, actions: FormikHelpers<Idea>) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initalValues}
      onSubmit={handleSubmit}
      validationSchema={IdeaSchema}
    >
      <Form className={css.form}>
        <h2>Подання ідеї заходу</h2>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Базова інформація</legend>

          <label className={css.label} htmlFor="event-title">
            Назва події
            <ErrorMessage component="span" name="title" className={css.error} />
          </label>
          <Field
            id="event-title"
            name="title"
            type="text"
            className={css.input}
            placeholder="Напр., Вечір стартап-пітчів"
          />

          <label className={css.label} htmlFor="event-format">
            Формат
            <ErrorMessage
              component="span"
              name="format"
              className={css.error}
            />
          </label>
          <Field
            id="event-format"
            name="format"
            type="text"
            className={css.input}
            placeholder="Онлайн / офлайн / змішаний"
          />

          <label className={css.label} htmlFor="event-price">
            Орієнтовна вартість квитка{" "}
            <ErrorMessage component="span" name="price" className={css.error} />
          </label>
          <Field
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
          <legend className={css.legend}>Опис </legend>

          <label className={css.label} htmlFor="event-summary">
            Короткий опис{" "}
            <ErrorMessage
              component="span"
              name="summary"
              className={css.error}
            />
          </label>
          <Field
            id="event-summary"
            name="summary"
            type="text"
            className={css.input}
            placeholder="Що це за подія"
          />

          <label className={css.label} htmlFor="event-detail">
            Деталі та програма{" "}
            <ErrorMessage
              component="span"
              name="detail"
              className={css.error}
            />
          </label>
          <Field
            as="textarea"
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
            Ім’я{" "}
            <ErrorMessage
              component="span"
              name="organizerName"
              className={css.error}
            />
          </label>
          <Field
            id="organizer-name"
            name="organizerName"
            type="text"
            className={css.input}
            placeholder="Ваше ім’я"
          />

          <label className={css.label} htmlFor="organizer-email">
            Email{" "}
            <ErrorMessage
              component="span"
              name="organizerEmail"
              className={css.error}
            />
          </label>
          <Field
            id="organizer-email"
            name="organizerEmail"
            type="email"
            className={css.input}
            placeholder="name@email.com"
          />

          <label className={css.label} htmlFor="organizer-role">
            Роль / компанія{" "}
            <ErrorMessage component="span" name="role" className={css.error} />
          </label>
          <Field
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
      </Form>
    </Formik>
  );
}
