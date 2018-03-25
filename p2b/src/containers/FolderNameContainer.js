import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FolderName from "../components/FolderName";
import folderName from "../selectors/folderName";

const selectors = { folderName };
const actions = {};

export default connect(createStructuredSelector(selectors), actions)(
  FolderName
);
