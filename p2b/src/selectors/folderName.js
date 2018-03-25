import { createStructuredSelector } from "reselect";

const leftNameSelector = state => state.classifications.left.folderName;
const upNameSelector = state => state.classifications.up.folderName;
const rightNameSelector = state => state.classifications.right.folderName;

export default createStructuredSelector({
  leftName: leftNameSelector,
  upName: upNameSelector,
  rightName: rightNameSelector
});
