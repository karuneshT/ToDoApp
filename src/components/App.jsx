import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setitem] = useState("");
  const [itemArray, setitemArray] = useState([]);

  //Function to handle change on the input box
  function handleChange(event) {
    const { value } = event.target;
    setitem(value);
  }

  //Handling single click functionality
  function handleClick() {
    setitemArray((prevValues) => {
      //Adding one more item to itemArray when the Add button is clicked
      return [...prevValues, item];
    });
    setitem("");
  }


  //Handling the double click functionality
  function handleDoubleClick(id) {
    setitemArray((prevValues) => {
      //Filtering the matching index out of itemArray using "previous value of setState"
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} name="item" type="text" value={item} />
        <button type="submit" onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((addedItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              doubleClick={handleDoubleClick}//Passing state to child by passing function as a props to child component
              item={addedItem}
            />
          ))}
        </ul>
      </div>
      <div>
        <p className="footer">
          {" "}
          <b>Note:</b> Click to strike off the task <br />& Double Click to
          delete it.{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
