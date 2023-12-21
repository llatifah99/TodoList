import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask, addTask } from "../redux/Slice/todoSlice";
const TodoApp = () => {
  const dispatch = useDispatch();
  const { task, tasks } = useSelector((state) => state.todo);
  const handleInputChange = (e) => {
    dispatch(setTask(e.target.value));
  };
  const handleAddTask = () => {
    dispatch(addTask());
  };
  return (
    <>
      <h3>TodoList:</h3>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask} className="btn">
        Add
      </button>
    </>
  );
};
export default TodoApp;
