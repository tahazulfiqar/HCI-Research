import { createStructuredSelector, createSelector } from "reselect";
import { matrixCreator } from "../utils/matrixCreator";

const entitiesSelector = state => matrixCreator(state.photos.entities);
const selectedRowSelector = state => state.photos.selectedRow;
const selectedColSelector = state => state.photos.selectedCol;

const emptyEntitiesSelector = createSelector(
  entitiesSelector,
  entities => entities.length === 0
);

const selectedSelector = createSelector(
  entitiesSelector,
  selectedRowSelector,
  selectedColSelector,
  emptyEntitiesSelector,
  (entities, row, col, isEmpty) => (isEmpty ? null : entities[row][col])
);

export default createStructuredSelector({
  selected: selectedSelector,
  isEmpty: emptyEntitiesSelector
});
