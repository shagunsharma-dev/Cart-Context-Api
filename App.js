import React from "react";
import { CartProvider } from "./components/context/CartContext"
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Shopping App</h1>
        <Product id={1} name="Product 1" price={10} />
        <Product id={2} name="Product 2" price={20} />
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
