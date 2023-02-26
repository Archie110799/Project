import React from "react";
import "./App.css";
import PrivateRouter from "./component/layout/PrivateRouter";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <PrivateRouter />
    </Provider>
  );
}

export default App;
