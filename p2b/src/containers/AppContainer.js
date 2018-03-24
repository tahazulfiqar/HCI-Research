import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import App from "../components/App.js";

import app from "../selectors/app";

const selectors = { app };
const actions = {};

export default connect(createStructuredSelector(selectors), actions)(App);
