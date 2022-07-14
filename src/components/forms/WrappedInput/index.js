import React from "react";
import { ErrorMessage, Field } from "formik";
import { cx } from "cx/widgets";
import styles from "./WrappedInput.module.scss";

const WrappedInput = (props) => {
  const { name, ...rest } = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, meta }) => {
          const inputStyles = cx(styles.input, {
            [styles.valid]: !meta.error,
            [styles.invalid]: meta.error,
          });
          return <input {...field} {...rest} className={inputStyles} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default WrappedInput;
