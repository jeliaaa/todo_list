import { styled } from "styled-components";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import DateBlock from "./components/DateBlock";

function App() {
  return (
    <>
      <DateBlock /> <TodoWrapper />
    </>
  );
}

export default App;
