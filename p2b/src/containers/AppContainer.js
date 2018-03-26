import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import App from "../components/App.js";

import app from "../selectors/app";

import {
  updateFolderLeftName,
  updateFolderUpName,
  updateFolderRightName
} from "../actions/classify";
import { classificationMode, testPhase, trainingPhase } from "../actions/mode";

const selectors = { app };
const actions = {
  updateFolderLeftName,
  updateFolderUpName,
  updateFolderRightName,
  classificationMode,
  testPhase,
  trainingPhase
};

export default connect(createStructuredSelector(selectors), actions)(App);
