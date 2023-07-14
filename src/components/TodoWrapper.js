import React, { useState } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodo";
import { Todo } from "./Todo";

const TodoWrapperDiv = styled.div`
  background: #1a1a40;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
`;
const Heading = styled.h1`
    text-align:center;
    color : white;
    margin-bottom : 20px;
    font-size: 50px
`

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log({ todos });
  };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <TodoWrapperDiv>
      <Heading>Do things!</Heading>
      <TodoForm addTodo={addTodo} />
        {todos.map((todo) => 
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
    </TodoWrapperDiv>
  );
};
