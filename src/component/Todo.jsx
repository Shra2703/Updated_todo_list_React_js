import React from "react";
import { useState } from "react";
import todo from "../images/todo.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  const addItems = () => {
    if (!inputData || inputData === " ") {
      alert("Sorry!! Can't add");
    } else if (inputData && !toggle) {
      setItems(
        items.map((ele) => {
          if (ele.id === isEdit) {
            return {
              ...ele,
              name: inputData,
            };
          }
          return ele;
        })
      );
      setToggle(true);
      setInputData("");
      setIsEdit(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };
  const deleteItems = (index) => {
    const updatedItems = items.filter((ele) => {
      return ele.id !== index;
    });
    setItems(updatedItems);
  };
  const editItems = (index) => {
    let newEditItem = items.find((ele) => {
      return ele.id === index;
    });
    setToggle(false);
    setInputData(newEditItem.name);
    setIsEdit(index);
    console.log(newEditItem);
  };

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
            {toggle ? (
              <i
                className="fa fa-plus add-btn"
                title="Add button"
                onClick={addItems}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Update button"
                onClick={addItems}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((ele) => {
              return (
                <div className="eachItem" key={ele.id}>
                  <h3>{ele.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-edit add-btn"
                      title="Edit button"
                      onClick={() => {
                        editItems(ele.id);
                      }}
                    ></i>
                    <i
                      className="fa fa-trash-alt add-btn"
                      title="Delete button"
                      onClick={() => {
                        deleteItems(ele.id);
                      }}
                    ></i>
                  </div>
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
