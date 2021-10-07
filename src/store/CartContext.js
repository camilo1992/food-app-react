import { useReducer } from "react";
import CartContext from "./store-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const idExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItme = state.items[idExistingItem];

    if (existingItme) {
      let updatedItme = {
        ...existingItme,
        amount: existingItme.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[idExistingItem] = updatedItme;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItme = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItme;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultCartState);

  const addItemtoCartHandler = (item) => {
    cartDispatcher({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    cartDispatcher({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: Math.abs(cartState.totalAmount),
    addItem: addItemtoCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
