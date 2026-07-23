import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  forcePage: number;
  onPageChange: (selected: number) => void;
}

const Pagination = ({
  pageCount,
  forcePage,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={forcePage}
      pageRangeDisplayed={5}
      pageCount={pageCount}
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
  );
};

export default Pagination;
