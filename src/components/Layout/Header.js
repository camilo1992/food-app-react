import { Fragment } from "react/cjs/react.production.min";
import classes from "./Header.module.css";
import mealImg from "../../Assets/meal.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onShowModal={props.onShowModal}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="The meal on canvas" />
      </div>
    </Fragment>
  );
};

export default Header;
