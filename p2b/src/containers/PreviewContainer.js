import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "../components/Preview";

// import {
//   removePhoto,
//   upPhoto,
//   downPhoto,
//   leftPhoto,
//   rightPhoto
// } from "../actions/photos";

import preview from "../selectors/preview";

const selectors = { preview };

const actions = {};

export default connect(createStructuredSelector(selectors), actions)(Preview);
