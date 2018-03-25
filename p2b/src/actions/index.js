import * as photosActions from "./photos";
import * as classifyActions from "./classify";
import * as modeActions from "./mode";

module.exports = {
  ...photosActions,
  ...classifyActions,
  ...modeActions
};
