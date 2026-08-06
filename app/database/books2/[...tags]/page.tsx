import { getBooksByTags } from "@/lib/books";
import css from "./Page.module.css";

interface PageProps {
  params: Promise<{ tags: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  const { tags } = await params;
  const isAllBooks = tags[0] === "all";
  const title = isAllBooks ? undefined : tags.join("");
  // const res = await getBooksByTags(title);

  // console.log(res);

  return (
    <div className={css["page"]}>
      <h1>Books</h1>
      {isAllBooks && <h2>All Books</h2>}
      <p>Tags: {tags.join(", ")}</p>

      <p>Title: {title}</p>
    </div>
  );
};

export default Page;
