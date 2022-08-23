import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImg from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals-Bay</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table for foodies" />
      </div>
    </Fragment>
  );
};

export default Header;
