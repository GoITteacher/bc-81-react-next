import css from "./SongsForm.module.css";

interface SongsFormProps {
  callback: (artist: string) => void;
}

const SongsForm = ({ callback }: SongsFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const value = formData.get("artist") as string;
    callback(value);
  };

  return (
    <form className={css["songsForm"]} action={handleSubmit}>
      <input type="text" name="artist" placeholder="artist" />
      <button type="submit">Шукати</button>
    </form>
  );
};

export default SongsForm;
