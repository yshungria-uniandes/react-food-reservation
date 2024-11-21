import React from "react";

function Menu({ addToCart }) {
  const menuItems = [
    { id: 1, name: "Pizza Margarita", price: 12 },
    { id: 2, name: "Hamburguesa Especial", price: 15 },
    { id: 3, name: "Sushi Rolls", price: 20 },
  ];

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => addToCart(item)}>Añadir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
