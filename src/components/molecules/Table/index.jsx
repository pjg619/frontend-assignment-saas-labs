import React, { useState } from "react";
import styles from "./styles.module.css";
import Pagination from "./Pagination";
const Table = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPageOptions = [5, 10];
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div className={styles.containers}>
      <div
        className={`${styles.table} ${styles.headers}`}
        aria-label="Data table"
      >
        <div className={styles["headersElement"]}>S.No.</div>
        <div className={styles["headersElement"]}>Percentage funded</div>
        <div className={styles["headersElement"]}>Amount pledged</div>
      </div>

      {currentData.map((item, index) => (
        <div
          key={index}
          className={`${styles.table} ${styles.row}`}
          aria-live="polite"
        >
          <div className={styles["element"]}>{startIndex + index + 1}</div>
          <div className={styles["element"]}>{item["amt.pledged"]}</div>
          <div className={styles["element"]}>{item["percentage.funded"]}</div>
        </div>
      ))}

      <div className={styles["pagination"]}>
        <Pagination
          totalItems={data.length}
          rowsPerPageOptions={rowsPerPageOptions}
          handlePageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Table;
