import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {  
  let [selectedCategory, setSelectedCategory] = useState("All")

   // event.target.value will be the value selected by the user
  function handleChange(e){
    console.log("Filter out: ", e.target.value)
    setSelectedCategory(e.target.value)
  }

  // we want to filter the items to only display the ones based on the selected category
    const itemsToDisplay = items.filter(item => {
      if (selectedCategory === "All"){
        return true
      } else {return item.category === selectedCategory }
    })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
{/* repace items.map with itemsToDisplay bc it is the filtered version of the original state { items } passed in as props */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
