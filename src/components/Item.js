import React, { useState } from "react";

function Item({ name, category}) {

  let [IsInCart, setIsInCart] = useState(false)

  const addToCart = () => {
    console.log("You have added an item to cart")
    setIsInCart(IsInCart => !IsInCart)
  }
  
  return (
    <li className={IsInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick={addToCart}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
