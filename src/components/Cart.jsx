import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Carrito</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
}

export default Cart;
