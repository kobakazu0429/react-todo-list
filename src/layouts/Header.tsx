import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Consumer } from "../RootContext";

import color from "../commons/color";

import ToDoModalMenu from "../components/ToDoModalMenu";

const Header = () => (
  <Consumer name="TODO">
    {todos => {
      const month = moment().format("MMMM");
      const date = moment().format("Do");
      const day = moment().format("dddd");

      return (
        <Wrapper>
          <Date>
            <b>{day}</b>, {date}
          </Date>
          <Month>{month}</Month>
          <Tasks>
            <b>{todos.length}</b> Tasks
          </Tasks>
          <ToDoModalMenu />
        </Wrapper>
      );
    }}
  </Consumer>
);

const Wrapper = styled.header`
  width: 100%;
  height: 110px;
  background-color: ${color.ultraLightGray};
  padding: 35px 25px 10px 25px;
  border-bottom: 1px solid ${color.lightGray};
  position: fixed;
`;

const Date = styled.span`
  display: block;
  color: ${color.blue};
  font-size: 27px;
  margin: 5px 0;
`;

const Month = styled.span`
  display: block;
  color: ${color.gray};
  font-size: 17px;
  margin: 5px 0;
`;

const Tasks = styled.span`
  display: block;
  color: ${color.gray};
  font-size: 17px;
  position: absolute;
  margin: 5px 0;
  top: 35px;
  right: 25px;
`;

export default Header;
