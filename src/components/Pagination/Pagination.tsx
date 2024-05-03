import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface PaginationProps {
  info: {
    pages: number;
  };
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ info, pageNumber, setPageNumber }) => {
  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        className={styles.pagination}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName={styles.btn}
        previousClassName={styles.btn}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        activeClassName={styles.active}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        pageCount={info?.pages}
      />
    </div>
  );
};

export default Pagination;
