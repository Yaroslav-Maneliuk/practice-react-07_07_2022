import React from "react";
import { Formik, Form } from "formik";
import { SCHEMA_LOGIN } from "../../../utils/schemaValidation";
import styles from "./SignUpForm.module.scss";
import WrappedInput from "../WrappedInput/index";
import WrappedRadioInput from '../WrappedRadioInput/index';

const initialValues = {
  fname: "",
  lname: "",
  displayName: "",
  email: "",
  password: "",
  passconfirm: "",
};

const SignUpForm = (props) => {
  const onSubmit = (value, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_LOGIN}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <label className={styles.input}>
              <WrappedInput name="fname" placeholder="First name" />
              <WrappedInput name="lname" placeholder="Last name" />
              <WrappedInput name="displayName" placeholder="Display name" />
              <WrappedInput name="email" placeholder="Email address" />
              <WrappedInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <WrappedInput
                name="passconfirm"
                type="password"
                placeholder="Password confirmation"
              />
              <WrappedRadioInput />
              <input
                type="submit"
                value="Create account"
                className={styles.input}
              />
            </label>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
