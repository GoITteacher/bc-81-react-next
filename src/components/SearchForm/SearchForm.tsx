import styles from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (query: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;

    onSubmit(query);
  };

  return (
    <form className={styles.form} action={handleSubmit}>
      <input className={styles.input} type="text" name="query" />
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
}
