import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask, addTask } from "../redux/Slice/todoSlice";
const TodoApp = () => {
  return (
    <>
      <h3>TodoList:</h3>
      <input type="text" placeholder="Add a task"></input>
      <button>Add</button>
    </>
  );
};
export default TodoApp;
