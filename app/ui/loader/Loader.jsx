"use client";

import BarLoader from "react-spinners/BarLoader";
import styles from "./loader.module.css";
import { useSelector } from 'react-redux'

function Loader() {
  const loading = useSelector(state => state.loading.value);

  return (
    <div className={styles.container}>
        {console.log(loading)}
        {loading && 
            <div className={styles.holder}>
              <div className="sweet-loading">
                <BarLoader
                    color="green"
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
              </div>
            </div>
        }
    </div>
  );
}

export default Loader;
