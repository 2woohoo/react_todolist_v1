import React from 'react';

const AddForm = () => {
  return (
    <div className="add-card">
      <form action="">
        <input
          type="text"
          name="title"
          id="titleInput"
          placeholder="Add Your New Task Title"
        />
        <br />
        <textarea
          name="text"
          id="textInput"
          cols="30"
          rows="3"
          placeholder="Description.."
        ></textarea>
        <br />
        <button className="add-btn">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default AddForm;
