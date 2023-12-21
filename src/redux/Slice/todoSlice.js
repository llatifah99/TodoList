import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
    task: "",
  },
  reducers: {
    setTask: (state, action) => {
      state.task = action.payload;
    },
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state) => {
      if (state.task.trim() !== "") {
        state.task = "";
      }
    },
  },
});

export const { setTask, setTasks, addTask } = todoSlice.actions;

export default todoSlice.reducer;
