import { createStructuredSelector } from "reselect";

const entitiesSelector = state => state.photos.entities;
const selectedSelector = state => state.photos.selected;

export default createStructuredSelector({
  entities: entitiesSelector,
  selected: selectedSelector
});
