import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import styles from "./../App.module.scss"

const SignUp = () => {
  return (
    <>
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
      <p className={styles.text}>
        We always keep your name and email address private.
      </p>
      <SignUpForm/>
    </>
  );
};

export default SignUp;
