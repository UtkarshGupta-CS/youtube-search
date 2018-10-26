import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import { SearchStore } from "./stores";
import * as serviceWorker from "./serviceWorker";

const searchStore = new SearchStore();

ReactDOM.render(
  <Provider store={searchStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
