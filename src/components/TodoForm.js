import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  background-color: #1a1a40;
  width:100%;
  border-radius : 10px
`;
const Input = styled.input`
  outline: none;
  background: none;
  border: 1px solid #8758ff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 300px;
  color: #fff;
`;
const Button = styled.button`
  background: #8758ff;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer;
`;

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Your Task:"
        />
        <Button type="submit">ADD TASK</Button>
      </form>
    </Container>
  );
};
