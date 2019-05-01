import React from "react";
import Modal from "styled-react-modal";

import { media } from "../commons/device";

import MaterialCircleButton from "./MaterialCircleButton";
import ToDoModalForm from "./ToDoModalForm";

interface IState {
  isOpen: boolean;
  opacity: number;
}

class ToDoModalMenu extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  public render() {
    return (
      <>
        <MaterialCircleButton
          InnerComponents={<i className="fas fa-plus" />}
          onClick={this.toggleModal}
        />

        <StyledModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
        >
          <ToDoModalForm toggleModal={this.toggleModal} />
        </StyledModal>
      </>
    );
  }

  private toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  private afterOpen() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    });
  }

  private beforeClose() {
    return new Promise(resolve => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 200);
    });
  }
}

const StyledModal = Modal.styled`
  width: 60vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props: any) => props.opacity};
  transition: opacity ease 500ms;

  @media ${media.mobile} {
    height: 60vh;
  }
`;

export default ToDoModalMenu;
