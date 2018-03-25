import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import { photos } from "./photos";
import { classifications } from "./classifications";
import { mode } from "./mode";

const rootReducer = combineReducers({
  photos,
  classifications,
  mode,
  routing
});

export default rootReducer;
