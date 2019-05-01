import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import GlobalStyle from "./commons/globalStyle";

import App from "./App";

const FadingBackground = styled(BaseModalBackground)`
  transition: opacity ease 200ms;
`;

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider backgroundComponent={FadingBackground}>
      <App />
    </ModalProvider>
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById("root")
);
