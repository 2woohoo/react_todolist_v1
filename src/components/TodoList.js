import React from 'react';
// import components
import AddForm from './AddForm';
import Todo from './Todo';

const TodoList = () => {
  return (
    <div>
      <h2>TODO</h2>
      <AddForm />
      <Todo />
    </div>
  );
};

export default TodoList;
