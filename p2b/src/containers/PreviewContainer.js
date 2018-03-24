import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "../components/Preview";
import { removePhoto } from "../actions/photos";
import { classifyLeft, classifyUp, classifyRight } from "../actions/classify";
import preview from "../selectors/preview";

const selectors = { preview };
const actions = { removePhoto, classifyLeft, classifyUp, classifyRight };

export default connect(createStructuredSelector(selectors), actions)(Preview);
