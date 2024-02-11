import Pagination from "./pagination";
import styles from "./table.module.scss";
const Table = ({ data, currentPage, totalPages, handleCurrentPage }) => {
  return (
    <div className={styles.container}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleCurrentPage={handleCurrentPage}
      />
      <table className={styles.table}>
        <thead className={styles.header}>
          <td className={styles.head}>#</td>
          <td className={styles.head}>Food</td>
          <td className={styles.head}>Price</td>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td className={styles.cell}>{value.id}</td>
                <td className={styles.cell}>{value.name}</td>
                <td className={styles.cell}>${value.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
