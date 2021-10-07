import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Layout/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart onCloseModal={handleCloseModal} />}
      <Header onShowModal={handleShowModal} />
      <body>
        <Meals />
      </body>
    </CartProvider>
  );
}

export default App;
