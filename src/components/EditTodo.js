import React, { useState } from "react";
import { styled } from "styled-components";
const Contain = styled.div`
  display: flex;
  justify-content: center;
  input {
    outline: none;
    background: none;
    border: 1px solid #8758ff;
    border-radius: 5px 0 0 5px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 300px;
    color: #fff;
  }
  button {
    background: #8758ff;
    color: #fff;
    border: none;
    padding: 0.55rem;
    cursor: pointer;
    border-radius:0 5px 5px 0;
  }
`;

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <Contain>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="Update task"
        />
        <button type="submit" className="todo-btn">
          Edit
        </button>
      </form>
    </Contain>
  );
};
