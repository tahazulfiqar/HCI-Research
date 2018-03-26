import * as modeActions from "../actions/mode";

const InitialState = {
  classificationMode: false,
  testPhase: false
};

export function mode(state = InitialState, action) {
  switch (action.type) {
    case modeActions.CLASSIFICATION_MODE: {
      return {
        ...state,
        classificationMode: true
      };
    }
    case modeActions.TEST_PHASE: {
      return {
        ...state,
        testPhase: true
      };
    }
    case modeActions.TRAINING_PHASE: {
      return {
        ...state,
        testPhase: false
      };
    }
    default: {
      return state;
    }
  }
}
