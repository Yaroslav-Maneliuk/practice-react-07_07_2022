import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.body}>
      <Link to="/">
        <img src="./static/images/logo.png" alt="logo" />
      </Link>
      {pathname === "./login" ? (
        <Link to="/signup">signup</Link>
      ) : (
        <Link to="/login">login</Link>
      )}
    </header>
  );
};

export default Header;
