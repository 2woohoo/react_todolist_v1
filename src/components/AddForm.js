import React from 'react';

const AddForm = ({
  inputTitle,
  inputText,
  setInputTitle,
  setInputText,
  todos,
  setTodos,
}) => {
  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: inputTitle,
        text: inputText,
        completed: false,
        id: Math.random() * 10000,
      },
    ]);
    setInputTitle('');
    setInputText('');
  };

  return (
    <div className="add-card">
      <form action="">
        <input
          onChange={inputTitleHandler}
          value={inputTitle}
          type="text"
          name="title"
          id="titleInput"
          placeholder="Add Your New Task Title"
        />
        <br />
        <textarea
          onChange={inputTextHandler}
          value={inputText}
          name="text"
          id="textInput"
          cols="30"
          rows="3"
          placeholder="Description.."
        ></textarea>
        <br />
        <button onClick={submitTodoHandler} className="add-btn">
          <i className="fas fa-plus" />
        </button>
      </form>
    </div>
  );
};

export default AddForm;
