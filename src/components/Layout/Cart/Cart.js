import classes from "./Cart.module.css";
import Modal from "../../../UI/modal/Modal";
import CartContext from "../../../store/store-context";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const total = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeHandler = (id) => {
    // console.log(id);
    cartCtx.removeItem(id);
  };

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = cartCtx.items.map((item, i) => (
    <CartItem
      onRemove={removeHandler.bind(null, item.id)}
      onAdd={addHandler.bind(null, item)}
      key={cartCtx.items[i].id}
      amount={cartCtx.items[i].amount}
      price={cartCtx.items[i].price}
      name={cartCtx.items[i].name}
    />
  ));

  return (
    <Modal onClose={props.onCloseModal}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span> {total}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseModal} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
