import classes from "./HeaderCartButton.module.css";
import CartIcon from "./Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/store-context";
import { useState, useEffect } from "react";

const HeaderCartButton = (props) => {
  const [itemAdded, setItemAdded] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberItemsOnCart = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const bumpyBehaviour = `${classes.button} ${itemAdded ? classes.bump : ``}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setItemAdded(true);

    const timer = setTimeout(() => {
      setItemAdded(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onShowModal} className={bumpyBehaviour}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Items</span>
      <span className={classes.badge}>{numberItemsOnCart}</span>
    </button>
  );
};

export default HeaderCartButton;
