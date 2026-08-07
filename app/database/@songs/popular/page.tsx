import SongList from "@/components/SongList/SongList";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <SongList />
    </div>
  );
};

export default Page;
