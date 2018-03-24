import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import { photos } from "./photos";
import { classifications } from "./classifications";

const rootReducer = combineReducers({
  photos,
  classifications,
  routing
});

export default rootReducer;
