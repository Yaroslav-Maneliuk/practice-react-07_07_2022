import React from "react";
import { Formik, Form } from "formik";
import { SCHEMA_LOGIN } from "../../../utils/schemaValidation";
import WrappedInput from "../WrappedInput/index";
import styles from "./LogInForm.module.scss";

const initialValues = { email: "", password: "" };
const LogInForm = (props) => {
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
          <Form>
            <WrappedInput name="email" placeholder="Email address" />
            <WrappedInput
              name="password"
              type="password"
              placeholder="Password"
            />
            <input type="submit" value="login" className={styles.input} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
