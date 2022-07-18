import React from "react";
import { Link } from "react-router-dom";
import styles from "./../App.module.scss"

const Home = () => {
  return (
    <Link to="/">
      <h1 className={styles.title}>
        Home
      </h1>
    </Link>
  );
};

export default Home;
