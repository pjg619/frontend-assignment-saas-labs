import React from "react";
import styles from "./styles.module.css";
import Sidebar from "../../molecules/Sidebar";

const HOCSidebar = ({ children }) => {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebarContent"]}>
        {" "}
        <Sidebar />
      </div>
      <div className={styles["pageContent"]}>{children}</div>
    </div>
  );
};

export default HOCSidebar;
