import { getBooksByTags } from "@/lib/books";
import css from "./Page.module.css";

interface PageProps {
  params: Promise<{ filters: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  const { filters } = await params;

  const isAllBooks = filters[0] === "all";

  const title = filters[0]; //all
  const author = filters[1];
  const desc = filters[2];

  const bookParams = {
    title: isAllBooks ? undefined : title,
    author,
    desc,
  };

  const res = await getBooksByTags(bookParams);
  console.log(res);

  return (
    <div className={css["page"]}>
      <h1>Books</h1>

      {!isAllBooks && (
        <div>
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>Desc: {desc}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
