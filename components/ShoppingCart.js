        import React from "react";
        import { useCart } from "../components/context/CartContext";

        const ShoppingCart = () => {
          const { cart, removeFromCart } = useCart();

          return (
            <div>
              <h2>Shopping Cart</h2>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    margin: "10px",
                    width: "200px",
                  }}
                >
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          );
        };

        export default ShoppingCart;
