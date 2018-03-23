import { createStructuredSelector } from "reselect";

const entitiesSelector = state => state.photos.entities;
const selectedRowSelector = state => state.photos.selectedRow;
const selectedColSelector = state => state.photos.selectedCol;

export default createStructuredSelector({
  entities: entitiesSelector,
  selectedRow: selectedRowSelector,
  selectedCol: selectedColSelector
});
