import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import App from "../components/App.js";

const selectors = {};
const actions = {};

export default connect(createStructuredSelector(selectors), actions)(App);
