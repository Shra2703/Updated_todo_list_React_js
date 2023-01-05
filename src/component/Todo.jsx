import React from "react";
import { useState } from "react";
import todo from "../images/todo.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!inputData) alert("Sorry!! Can't add");
    else {
      setItems([...items, inputData]);
      setInputData(" ");
    }
  };
  const deleteItems = (id) => {};

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt=" todoIcon" />
            <figcaption>Add Your List Item 🎅</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Write your Item..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add button"
              onClick={addItems}
            ></i>
          </div>
          <div className="showItems">
            {items.map((ele, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{ele}</h3>
                  <i
                    className="fa fa-trash-alt add-btn"
                    title="Delete button"
                    onClick={() => {
                      deleteItems(index);
                    }}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
