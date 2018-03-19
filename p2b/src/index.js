import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import configureStore from "./store/configureStore.js";

import "bootstrap/dist/css/bootstrap.css";

import App from "./pages/App";
import Classify from "./pages/Classify";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      store={store}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <Route path="/" component={App}>
        <IndexRoute component={Classify} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
