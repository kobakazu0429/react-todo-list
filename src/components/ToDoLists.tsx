import React from "react";
import styled from "styled-components";

import ToDoItem from "./ToDoItem";

interface ITodo {
  text: string;
  isCompleted: boolean;
}

interface IProps {
  todos: ITodo[];
}

const ToDoLists = (props: IProps) => (
  <Ul>
    {props.todos.map((todo, i) => (
      <ToDoItem text={todo.text} isCompleted={todo.isCompleted} key={i} />
    ))}
  </Ul>
);

const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default ToDoLists;
