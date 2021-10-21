import React, { useEffect } from 'react';
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
  status,
  setStatus,
  filteredTodos,
  setFilteredTodos,
  searchTerm,
}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case 'done':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'todo':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <main>
      <div className="status">
        <select onChange={statusHandler} name="status" className="statusFilter">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="todo">Todo</option>
        </select>
      </div>
      <AddForm
        inputText={inputText}
        inputTitle={inputTitle}
        setInputText={setInputText}
        setInputTitle={setInputTitle}
        todos={todos}
        setTodos={setTodos}
      />
      {filteredTodos
        .filter((val) => {
          if (searchTerm === '') {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            // console.log('TEST!!:', val);
            return val;
          }
        })
        .map((todo) => (
          <Todo
            title={todo.title}
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </main>
  );
};

export default TodoList;
