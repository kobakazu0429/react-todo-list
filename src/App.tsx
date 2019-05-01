import React from "react";

import { Provider } from "./RootContext";

import Header from "./layouts/Header";
import Main from "./layouts/Main";

const App = () => (
  <Provider>
    <Header />
    <Main />
  </Provider>
);

export default App;
