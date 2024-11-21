import React, { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import ReservationForm from "./components/ReservationForm";

// estilos  de la aplicacion


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Food Reservation App</h1>
      <Menu addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <ReservationForm cart={cart} />
    </div>
  );
}

export default App;
