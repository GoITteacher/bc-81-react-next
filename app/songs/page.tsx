import { getSongs } from "@/lib/songs";
import css from "./Page.module.css";
import Link from "next/link";

const Page = async () => {
  const res = await getSongs();
  const songs = res.items;
  return (
    <div className={css["page"]}>
      {songs.map((el) => {
        return (
          <li>
            <Link href={`/songs/${el._id}`}>
              {el.title} - {el.artist}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
