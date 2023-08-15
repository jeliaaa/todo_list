import React from "react";
import { styled } from "styled-components";
import "../App.css";

const TodoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <TodoDiv>
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <i
          className="fa fa-pencil-square"
          aria-hidden="true"
          onClick={() => editTodo(task.id)}
        ></i>
        <i
          onClick={() => deleteTodo(task.id)}
          className="fa fa-trash"
          aria-hidden="true"
        ></i>
        <i
          className="fa-regular fa-clipboard"
          onClick={() => {
            navigator.clipboard.writeText(task.task);
            alert(`${task.task} Copied To Clipboard! `);
            console.log(Date())
          }}
        ></i>
      </div>
    </TodoDiv>
  );
};

export default React.memo(Todo);