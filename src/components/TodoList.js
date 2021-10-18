import React, { useState } from 'react';
// import components
import AddForm from './AddForm';
import Todo from './Todo';

const TodoList = ({
  inputText,
  inputTitle,
  setInputTitle,
  setInputText,
  todos,
  setTodos,
}) => {
  return (
    <div>
      <h2>TODO</h2>
      <AddForm
        inputText={inputText}
        inputTitle={inputTitle}
        setInputText={setInputText}
        setInputTitle={setInputTitle}
        todos={todos}
        setTodos={setTodos}
      />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          text={todo.text}
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
