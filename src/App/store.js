import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoSlice';

export const store = configureStore({
  reducer: {
    // todo reducer. Reducers, as the name suggests, take in two things: previous state and an action.
    // Then they reduce it (read it return) to one entity:
    // the new updated instance of state. So reducers are basically pure
    // JS functions which take in the previous state and an action and return the newly updated state
    ToDo: todoReducer,
  },
});
