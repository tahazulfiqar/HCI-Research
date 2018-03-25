import * as ActionTypes from "../actions/mode";

const InitialState = {
  classificationMode: false
};

export function mode(state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.CLASSIFICATION_MODE: {
      return {
        ...state,
        classificationMode: true
      };
    }
    default: {
      return state;
    }
  }
}
