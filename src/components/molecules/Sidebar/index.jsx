import React, { useState } from "react";
import styles from "./styles.module.css";

const Sidebar = () => {
  return (
    <div className={styles["sidebarContainer"]}>
      <div className={styles["content"]}>Menu item 1</div>
      <div className={styles["content"]}>Menu item 2</div>
      <div className={styles["content"]}>Menu item 3</div>
    </div>
  );
};

export default Sidebar;
