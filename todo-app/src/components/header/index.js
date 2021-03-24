import React from 'react';
import './styles.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;