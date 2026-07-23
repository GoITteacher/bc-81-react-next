import { keepPreviousData, useQuery } from "@tanstack/react-query";
import SearchForm from "../SearchForm/SearchForm";

import styles from "./Cars.module.css";
import { getCars } from "../../services/apiService";
import { useState } from "react";
import CarsList from "../CarsList/CarsList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ReactPaginate from "react-paginate";

const Cars = () => {
  const [make, setMake] = useState("");
  const [page, setPage] = useState(1);

  const { data, isSuccess, isFetching, isError } = useQuery({
    queryKey: ["cars", { make, page }],
    queryFn: () => getCars({ make, page }),
    placeholderData: keepPreviousData,
    enabled: make !== "",
  });

  const totalPage = data?.totalPages ?? 0;

  const getMakeQuery = (q: string) => {
    setMake(q);
    setPage(1);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <SearchForm onSubmit={getMakeQuery} />
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>Tanstask Query (Cars)</h1>
          <hr className={styles.divider} />
          {!make && <p>Enter your search query</p>}

          <hr className={styles.divider} />
          {totalPage > 1 && (
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
          )}
          <div className={styles.content}>
            {isSuccess && data.items.length > 0 && (
              <CarsList cars={data.items} />
            )}
            {isFetching && <Loader />}
            {isError && <ErrorMessage />}
          </div>
        </section>
      </main>
    </>
  );
};

export default Cars;
