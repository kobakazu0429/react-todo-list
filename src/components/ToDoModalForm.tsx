import React from "react";
import styled from "styled-components";

import color from "../commons/color";
import { media } from "../commons/device";

import todos from "../api/todos";

import MaterialRectangleButton from "./MaterialRectangleButton";

interface IProps {
  toggleModal: () => void;
}

interface IState {
  todoText: string;
}

class ToDoModalForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      todoText: ""
    };

    this.handleNewToDo = this.handleNewToDo.bind(this);
    this.toggleModal = this.props.toggleModal;
  }

  private toggleModal: () => void;

  public render() {
    return (
      <Wrapper>
        <InputLabel htmlFor="ToDoInput">
          <Input
            type="text"
            id="ToDoInput"
            placeholder="&nbsp;"
            value={this.state.todoText}
            onChange={e => this.setState({ todoText: e.target.value })}
          />
          <Label>ToDo Text Here</Label>
          <Border />
        </InputLabel>

        <Buttons>
          <MaterialRectangleButton
            InnerComponents={"キャンセルする"}
            onClick={this.toggleModal}
          />
          <MaterialRectangleButton
            InnerComponents={"登録する"}
            onClick={this.handleNewToDo}
          />
        </Buttons>
      </Wrapper>
    );
  }

  private handleNewToDo() {
    todos.post({ text: this.state.todoText });
    window.location.reload();
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
`;

const InputLabel = styled.label`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  border-bottom: 2px solid ${color.lightGray};
  color: ${color.gray};
  transition: all 0.15s ease;

  &:not(:placeholder-shown) + span {
    color: ${color.gray};
    transform: translateY(-26px) scale(0.75);
  }
  &:focus {
    background: none;
    outline: none;
  }
  &:focus + span {
    color: ${color.blue};
    transform: translateY(-26px) scale(0.75);
  }
  &:focus + span + .border {
    transform: scaleX(1);
  }
`;

const Label = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: ${color.gray};
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

const Border = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: ${color.gray};
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  & > button {
    margin-top: 20px;
    margin-left: 20px;
  }

  @media ${media.mobile} {
    flex-direction: column;
    & > button {
      margin: 10px 0;
    }
  }
`;

export default ToDoModalForm;
