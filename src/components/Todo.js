import React from 'react';

const Todo = ({ title, text, todo, todos, setTodos }) => {
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <div className="todo-card">
      <div className="content">
        <div className={`inputs ${todo.completed ? 'completed' : ''}`}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <form action="">
          <input onClick={completeHandler} type="checkbox" />
        </form>
      </div>
      <div className="btns">
        <i className="fas fa-pen"></i>
        <i onClick={deleteHandler} className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default Todo;
