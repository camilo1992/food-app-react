import classes from "./Cart.module.css";
import Modal from "../../../UI/modal/Modal";
import CartContext from "../../../store/store-context";
import React, { useContext, useState } from "react";
import CartItem from "../CartItem/CartItem";
import Checkout from "./Checkout";
import useHttpRequest from "../../../custom hooks/useRequest";

const Cart = (props) => {
  const [form, setForm] = useState(false);

  const { isLoading, dataSent, sendRequest } = useHttpRequest();

  const orderHandler = () => {
    setForm(true);
  };

  const cartCtx = useContext(CartContext);
  const total = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const sentDataHandler = async (userData) => {
    sendRequest({
      url: `https://food-react-47e6c-default-rtdb.firebaseio.com/orders.json`,
      method: "POST",
      body: { user: userData, orderedItem: cartCtx.items },
    });
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

  const modalButtons = (
    <div className={classes.actions}>
      <button onClick={props.onCloseModal} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span> {total}</span>
      </div>
      {form && (
        <Checkout
          onValidUserData={sentDataHandler}
          onCancel={props.onCloseModal}
        />
      )}
      {!form && modalButtons}
    </React.Fragment>
  );

  const submitingOrder = <p> Your order is being sending ...</p>;
  const orderSentModal = (
    <React.Fragment>
      <p>Your order has been sent successfully 😊</p>
      <div className={classes.actions}>
        <button onClick={props.onCloseModal} className={classes["button--alt"]}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  const errorContentModal = (
    <React.Fragment>
      <p>There has been an error, please check your internet connection!</p>
      <div className={classes.actions}>
        <button onClick={props.onCloseModal} className={classes["button--alt"]}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onCloseModal}>
      {!isLoading && !dataSent && cartModalContent}
      {isLoading && submitingOrder}
      {dataSent && !isLoading && orderSentModal}
    </Modal>
  );
};

export default Cart;
