import React, { useState } from "react";

function ToDoItem(props) {
  const [IsClicked, setIsClicked] = useState(false);

  //Function to handle the action when an item is clicked.
  function handleClick() {
    return (IsClicked ? setIsClicked(false) : setIsClicked(true));
  }

  return (
    <div>
      <li
        onClick={handleClick}
        onDoubleClick={() => {props.doubleClick(props.id)}}
        style={{ textDecoration: IsClicked ? "line-through" : "none" }}
      >
      {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
