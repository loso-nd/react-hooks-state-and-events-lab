import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  let [toggleMode, setToggleMode] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const handleClick = () => {
    
    if(toggleMode === false){
      console.log("Welcome to the Dark Side")
      setToggleMode(true)
    }

  }

  return (
    <div className={"App " + (false ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() =>handleClick()}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
