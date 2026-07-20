import { NewSongBody } from "../../../services/songService";
import css from "./CreateSongForm.module.css";

interface CreateSongFormProps {
  onSubmit: (body: NewSongBody) => void;
}

const CreateSongForm = ({ onSubmit }: CreateSongFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const body: NewSongBody = {
      title: formData.get("title") as string,
      artist: formData.get("artist") as string,
      album: formData.get("album") as string,
      genre: formData.get("genre") as string,
      releaseYear: Number(formData.get("releaseYear")),
      durationSeconds: Number(formData.get("durationSeconds")),
      label: formData.get("label") as string,
      language: formData.get("language") as string,
    };
    onSubmit(body);
  };

  return (
    <form className={css["createSongForm"]} action={handleSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="artist" placeholder="artist" />
      <input type="text" name="album" placeholder="album" />
      <input type="text" name="genre" placeholder="genre" />
      <input type="number" name="releaseYear" placeholder="releaseYear" />
      <input
        type="number"
        name="durationSeconds"
        placeholder="durationSeconds"
      />
      <input type="text" name="label" placeholder="label" />
      <input type="text" name="language" placeholder="language" />

      <button>Create</button>
    </form>
  );
};

export default CreateSongForm;
