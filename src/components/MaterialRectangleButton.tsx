import React from "react";
import styled from "styled-components";

import color from "../commons/color";

interface IProps {
  InnerComponents: React.ReactNode | HTMLElement | string;
  onClick: () => void;
}

const MaterialRectangleButton = (props: IProps) => (
  <Button onClick={props.onClick}>{props.InnerComponents}</Button>
);

const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: ${color.lightBlue};
  border: solid 2px ${color.lightBlue};
  border-radius: 3px;
  transition: 0.4s;

  &:hover {
    background: ${color.lightBlue};
    color: white;
  }
`;

export default MaterialRectangleButton;
