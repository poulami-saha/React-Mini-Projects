import styles from "./pagination.module.scss";
const Pagination = ({ currentPage, totalPages, handleCurrentPage }) => {
  return (
    <div className={styles.container}>
      <button
        disabled={currentPage === 1}
        onClick={() => handleCurrentPage(currentPage - 1)}
        className="button"
      >
        Prev
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handleCurrentPage(currentPage + 1)}
        className="button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
