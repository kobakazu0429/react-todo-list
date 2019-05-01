import React from "react";

import { Consumer } from "../RootContext";

import ToDoLists from "../components/ToDoLists";

const Index = () => (
  <Consumer name="TODO">{todos => <ToDoLists todos={todos} />}</Consumer>
);

export default Index;
