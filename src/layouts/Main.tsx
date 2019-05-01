import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/Index";

const Main = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </Container>
);

const Container = styled.div`
  padding-top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;
