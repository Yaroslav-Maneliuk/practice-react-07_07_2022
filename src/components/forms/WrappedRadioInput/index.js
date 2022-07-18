import React from "react";
import { Field } from "formik";
import styles from "./WrappedRadioInput.module.scss";

const WrappedRadioInput = () => {
  return (
    <section className={styles.container}>
      <section className={styles.radio}>
        <Field type="radio" name="picked" value="Buyer" />
        Join As a Buyer
        <section>
          <span className={styles.comments}>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </span>
        </section>
      </section>
      <section className={styles.radio}>
        <Field type="radio" name="picked" value="Seller" />
        Join As a Creative or Marketplace Seller
        <section>
          <span className={styles.comments}>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </span>
        </section>
      </section>
    </section>
  );
};
export default WrappedRadioInput;
