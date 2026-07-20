import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (query: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    onSubmit(query);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input className={css.input} type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
