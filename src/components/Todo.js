import React from 'react';

const Todo = () => {
  return (
    <div className="todo-card">
      <div className="content">
        <h3>Do laundry</h3>
        <p>
          Light only
          <br />
          llllll
        </p>
      </div>
      <form action="">
        <input type="checkbox" />
      </form>
      {/* <div className="btns">
        <i class="fas fa-pen"></i>
        <i class="fas fa-trash"></i>
      </div> */}
    </div>
  );
};

export default Todo;
