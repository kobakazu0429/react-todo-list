import React from "react";
import styled from "styled-components";

import todos, {
  IPatchPayload,
  IDeletePayload,
  T_text,
  T_isCompleted,
  T_uuid
} from "../api/todos";

import color from "../commons/color";

interface IProps {
  text: T_text;
  isCompleted: T_isCompleted;
  uuid: T_uuid;
}

const handleComplete = (e: any, payload: IPatchPayload) => {
  e.preventDefault();
  const { uuid, isCompleted } = payload;
  todos.patch({ uuid, isCompleted: !isCompleted });
  window.location.reload();
};

const handleDelete = (e: any, payload: IDeletePayload) => {
  e.preventDefault();
  const { uuid } = payload;
  todos.delete({ uuid });
  window.location.reload();
};

class ToDoItem extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <ToDo
        onClick={e =>
          handleComplete(e, {
            uuid: this.props.uuid,
            isCompleted: this.props.isCompleted
          })
        }
      >
        <span
          style={{
            textDecoration: this.props.isCompleted ? "line-through" : "none"
          }}
        >
          {this.props.text}
        </span>
        <DeleteIcon
          className="fas fa-trash"
          onClick={e => handleDelete(e, { uuid: this.props.uuid })}
        />
      </ToDo>
    );
  }
}

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
  cursor: pointer;
  background-color: white;
  transition: background-color 1s linear;

  &:hover {
    background-color: ${color.ultraLightBlue};
  }
`;

const DeleteIcon = styled.i`
  font-size: 15px;
  line-height: 70px;
`;

export default ToDoItem;
