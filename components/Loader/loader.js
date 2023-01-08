import React from "react";
import { HashLoader } from "react-spinners";
import { Html } from "@react-three/drei";
import styles from "./loader.module.css";

function Loader({ isLoading }) {
  function generateStyles(isLoading) {
    return isLoading ? { display: "flex" } : { display: "none" };
  }

  return (
    <Html center className={styles.Loader} style={generateStyles(isLoading)}>
      <HashLoader color="white" />
    </Html>
  );
}

export default Loader;
