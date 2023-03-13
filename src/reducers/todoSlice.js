import { createSlice } from '@reduxjs/toolkit';

const getInitialToDo = () => {
  const localToDoList = window.localStorage.getItem('ToDoList');
  if (localToDoList) {
    return JSON.parse(localToDoList);
  }
  window.localStorage.setItem('ToDoList', JSON.stringify([]));
  return [];
};
const initialValue = {
  ToDoList: getInitialToDo(),
};

export const todoSlice = createSlice({
  name: 'ToDo',
  initialState: initialValue,
  reducers: {
    addToDo: (state, action) => {
      state.ToDoList.push(action.payload);
      const ToDoList = window.localStorage.getItem('ToDoList'); // gets todo list
      if (ToDoList) {
        const ToDoListArr = JSON.parse(ToDoList); // if its there, turns to an array
        ToDoListArr.push({
          // pushing the new todo into the array
          ...action.payload,
        });
        window.localStorage.setItem('ToDoList', JSON.stringify(ToDoListArr)); // then sets back the todo into the local storage.
      }
    },
    deleteToDo: (state, action) => {
      const ToDoList = window.localStorage.getItem('ToDoList');
      if (ToDoList) {
        const ToDoListArr = JSON.parse(ToDoList);
        ToDoListArr.forEach((ToDo, index) => {
          if (ToDo.id === action.payload) {
            ToDoListArr.splice(index, 1); // removes from array
          }
        });
        window.localStorage.setItem('ToDoList', JSON.stringify(ToDoListArr));
        state.ToDoList = ToDoListArr;
      }
    },
  },
});

export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
