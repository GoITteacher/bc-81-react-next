import { getSongById } from "@/lib/songs";
import css from "./Page.module.css";
import Link from "next/link";
interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const song = await getSongById(id);

  return (
    <div className={css["page"]}>
      <h1>
        {song.title} - {song.artist}
      </h1>
      <Link href="/songs">Back to song list</Link>

      <p>{song.album}</p>
      <p>{song.durationSeconds}</p>
      <p>{song.label}</p>
      <p>{song.genre}</p>
      <p>{song.language}</p>
      <p>{song.releaseYear}</p>
    </div>
  );
};

export default Page;
