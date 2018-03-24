import * as photosActions from "./photos";
import * as classifyActions from "./classify";

module.exports = {
  ...photosActions,
  ...classifyActions
};
