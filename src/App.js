import './App.css';
import React, { useState, useEffect } from 'react';
// Import components
import TodoList from './components/TodoList';
import Search from './components/Search';

function App() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Local Storage
  const saveLocalData = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalData = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.getItem('todos', JSON.stringify(todos));
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  };

  // Run ONCE when the app start
  useEffect(() => {
    getLocalData();
  }, []);

  // Use Effect
  useEffect(() => {
    saveLocalData();
  });

  return (
    <div className="App">
      <header>Ease Do</header>
      <main className="font-main">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TodoList
          inputText={inputText}
          setInputText={setInputText}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          searchTerm={searchTerm}
        />
      </main>
    </div>
  );
}

export default App;
