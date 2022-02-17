import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";
import HeaderCartButton from "./header-cart-button";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClickCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
