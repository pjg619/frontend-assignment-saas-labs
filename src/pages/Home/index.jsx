import React from "react";
import Headers from "../../components/organisms/HOCHeaders";
import HOCSidebar from "../../components/organisms/HOCSidebar";
import Table from "../../components/molecules/Table";
import useFetch from "../../utils/hooks/useFetchHook";
import styles from "./styles.module.css";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
  );
  if (loading || !(data?.length > 0)) {
    return null;
  }
  return (
    <Headers>
      <HOCSidebar>
        <>
          <div className={styles["header"]}>Table Data</div>
          <Table data={data} />
        </>
      </HOCSidebar>
    </Headers>
  );
};

export default Home;
