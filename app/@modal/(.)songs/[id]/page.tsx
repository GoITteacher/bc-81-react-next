import { getSongById } from "@/lib/songs";
import css from "./Page.module.css";
import BackButton from "@/components/BackButton/BackButton";
interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const song = await getSongById(id);

  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <h1>
          {song.title} - {song.artist}
        </h1>
        <BackButton />
      </div>
    </div>
  );
};

export default Page;
