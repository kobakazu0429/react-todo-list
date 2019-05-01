import React from "react";
import styled from "styled-components";

import { setGlobalState } from "../RootContext";
import todos, { T_text, T_isCompleted, T_uuid } from "../api/todos";

import ToDoItem from "./ToDoItem";

interface ITodo {
  text: T_text;
  isCompleted: T_isCompleted;
  uuid: T_uuid;
}

interface IProps {
  todos: ITodo[];
}

class ToDoLists extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public async componentDidMount() {
    const TODO = await todos.get();
    setGlobalState("TODO", TODO);
  }

  public render() {
    return (
      <Ul>
        {this.props.todos.map((todo, i) => (
          <ToDoItem
            text={todo.text}
            isCompleted={todo.isCompleted}
            uuid={todo.uuid}
            key={i}
          />
        ))}
      </Ul>
    );
  }
}

const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default ToDoLists;
