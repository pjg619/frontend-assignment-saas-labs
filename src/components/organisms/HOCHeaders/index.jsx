import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { Children } from "react";

const Headers = ({ children }) => {
  return (
    <>
      <div className={styles["headerContainer"]}>
        <div className={styles["headerElements"]}>Home</div>
        <div className={styles["headerElements"]}>About</div>
        <div className={styles["headerElements"]}>Contact</div>
      </div>
      {children}
    </>
  );
};

export default Headers;
