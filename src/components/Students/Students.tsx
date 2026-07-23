import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { getStudents } from "../../services/apiService";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import StudentsList from "../StudentsList/StudentsList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ReactPaginate from "react-paginate";

import styles from "./Students.module.css";

const Students = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isError, isSuccess, isFetching } = useQuery({
    queryKey: ["students", { firstName: query.toLowerCase(), page }],
    queryFn: () => getStudents(query, page),
    placeholderData: keepPreviousData,
    // enabled: Boolean(query), // query !== "", !!query
  });

  const students = data?.items ?? [];
  const totalPage = data?.totalPages ?? 0;

  const getQuery = (query: string) => {
    setPage(1);
    setQuery(query);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <SearchForm onSubmit={getQuery} />
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>Tanstask Query (Students)</h1>
          <hr className={styles.divider} />
          <p className={styles.info}>Student name: {query}</p>
          <p className={styles.info}>Current page: {page}</p>
          <hr className={styles.divider} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={({ selected }) => setPage(selected + 1)}
            forcePage={page - 1}
            pageRangeDisplayed={5}
            pageCount={totalPage}
            renderOnZeroPageCount={null}
            containerClassName={styles.pagination}
            pageClassName={styles.page}
            pageLinkClassName={styles.pageLink}
            previousClassName={styles.previous}
            previousLinkClassName={styles.previousLink}
            nextClassName={styles.next}
            nextLinkClassName={styles.nextLink}
            breakClassName={styles.break}
            breakLinkClassName={styles.breakLink}
            activeClassName={styles.active}
            disabledClassName={styles.disabled}
          />
          <div className={styles.content}>
            {isFetching && <Loader />}
            {isError && <ErrorMessage />}
            {isSuccess && students.length > 0 && (
              <StudentsList students={students} />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Students;
