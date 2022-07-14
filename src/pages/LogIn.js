import React from 'react';
import LogInForm from '../components/forms/LogInForm/index';
import styles from "./../common/styles/styles.scss"


const LogIn = () => {
  return (
    <>
      <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
      <LogInForm />
    </>
  );
}

export default LogIn;
