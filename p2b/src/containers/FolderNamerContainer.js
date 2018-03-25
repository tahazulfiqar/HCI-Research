import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PhotoList from "../components/PhotoList";

import {
  updateFolderLeftName,
  updateFolderUpName,
  updateFolderRightName
} from "../actions/classify";
import { classificationMode } from "../actions/mode";

const selectors = {};

const actions = {
  updateFolderLeftName,
  updateFolderUpName,
  updateFolderRightName,
  classificationMode
};

export default connect(createStructuredSelector(selectors), actions)(PhotoList);
