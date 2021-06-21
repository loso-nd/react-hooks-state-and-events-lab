import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  let [toggleMode, setToggleMode] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const toggleTheme = () => {
    console.log("Welcome to the Dark Side")
    setToggleMode(toggleMode => !toggleMode)
  }

  return (
    <div className={"App " + ( toggleMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() =>toggleTheme()}>{toggleMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
