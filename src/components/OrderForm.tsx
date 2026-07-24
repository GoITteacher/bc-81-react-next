import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .max(20, "Імя повинно бути довшим за 20 символів")
    .min(5, "Імя повинно бути коротшим за 5 символів")
    .required("Це поле є обовязковим"),
  email: Yup.string().email("Invalid email").required("Required"),
  delivery: Yup.string().oneOf(["drone", "courier", "pickup"]).required(),
  restrictions: Yup.array().of(Yup.string()),
  deliveryTime: Yup.string()
    .oneOf(["afternoon", "morning", "evening"])
    .required(),
  message: Yup.string().min(1).required("Is required"),
});

interface Order {
  username: string;
  email: string;
  delivery: "drone" | "courier" | "pickup";
  restrictions: string[];
  deliveryTime: "afternoon" | "morning" | "evening";
  message: string;
}

const initialValues: Order = {
  username: "TEST VALUE",
  email: "test@gmail.com",
  delivery: "drone",
  restrictions: ["vegan"],
  deliveryTime: "evening",
  message: "Hello",
};

export default function OrderForm() {
  const handleSubmit = (values: Order, actions: FormikHelpers<Order>) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      {({ errors, resetForm, isValid }) => {
        const isInvalidName = Boolean(errors.username);
        const isInvalidEmail = Boolean(errors.email);
        console.log(isValid);

        return (
          <Form className={clsx(css.form, !isValid && css.invalid)}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label className={css.label}>Name</label>
              <Field
                type="text"
                name="username"
                className={clsx(css.input, isInvalidName && css.invalid)}
              />

              <label className={css.label}>
                Email
                <ErrorMessage
                  component="span"
                  name="email"
                  className={css.error}
                />
              </label>
              <Field
                type="email"
                name="email"
                className={clsx(css.input, isInvalidEmail && css.invalid)}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>
                Delivery method (<ErrorMessage name="delivery" />)
              </legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
            </fieldset>

            <label className={css.label}>Preferred delivery time</label>
            <Field as="select" name="deliveryTime" className={css.input}>
              <option value="" disabled>
                -- Choose delivery time --
              </option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>

            <label className={css.label}>Additional message</label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              className={clsx(
                css.textarea,
                Boolean(errors.message) && css.invalid
              )}
            ></Field>

            {isValid && (
              <button type="submit" className={css.button}>
                Place order
              </button>
            )}

            <button
              type="reset"
              onClick={() => {
                console.log("Користувач очистив форму");
                resetForm();
              }}
            >
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
