import { createStructuredSelector, createSelector } from "reselect";

const entitiesSelector = state => state.photos.entities;
const selectedRowSelector = state => state.photos.selectedRow;
const selectedColSelector = state => state.photos.selectedCol;

const selectedSelector = createSelector(
  entitiesSelector,
  selectedRowSelector,
  selectedColSelector,
  (entities, row, col) => entities[row][col]
);

export default createStructuredSelector({
  selected: selectedSelector
});
