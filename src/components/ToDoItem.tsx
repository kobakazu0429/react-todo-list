import React from "react";
import styled from "styled-components";

import color from "../commons/color";

interface IProps {
  text: string;
  isCompleted: boolean;
}

const ToDoItem = (props: IProps) => (
  <ToDo>
    <span
      style={{ textDecoration: props.isCompleted ? "line-through" : "none" }}
    >
      {props.text}
    </span>
    <DeleteIcon className="fas fa-trash" />
  </ToDo>
);

const ToDo = styled.li`
  padding: 0 20px;
  list-style: none;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${color.lightGray};
  color: ${color.gray};
  font-size: 18px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
`;

const DeleteIcon = styled.i`
  font-size: 15px;
  line-height: 70px;
`;

export default ToDoItem;
