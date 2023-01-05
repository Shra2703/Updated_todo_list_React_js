import React from "react";
import todo from '../images/todo.png'


const Todo = () => {
  return (
    <>
    <div className="main-div">
      <div className="child-div">
        <figure>
            <img src={todo} alt=" todoIcon" />
            <figcaption>Add Your List Item 🎅</figcaption>
        </figure>
        <div className="addItems">
            <input type="text" placeholder="✍ Write your Item" />
        </div>
        
      </div>
    </div>
    </>
  );
}

export default Todo;