import './App.css';
import React from 'react';
// Import components
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>Ease Do</header>
      <main className="font-main">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
