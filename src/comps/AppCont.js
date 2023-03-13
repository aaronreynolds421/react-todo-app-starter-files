import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';

function AppCont() {
  const ToDoList = useSelector((state) => state.ToDo.ToDoList);
  const sortedToDoList = [...ToDoList];
  sortedToDoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
      {sortedToDoList && sortedToDoList.length > 0
        ? sortedToDoList.map((ToDo) => <ToDoItem key={ToDo.id} ToDo={ToDo} />)
        : 'no todo found'}
    </div>
  );
}

export default AppCont;
