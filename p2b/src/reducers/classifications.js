import * as ActionTypes from "../actions/classify";

const InitialState = {
  left: { folderName: "Text", photos: [] },
  up: { folderName: "Faces", photos: [] },
  right: { folderName: "Other", photos: [] }
};

export function classifications(state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.CLASSIFY_LEFT: {
      return {
        ...state,
        left: {
          ...state.left,
          photos: state.left.photos.concat([
            { id: action.photo, timestamp: action.timestamp }
          ])
        }
      };
    }
    case ActionTypes.CLASSIFY_UP: {
      return {
        ...state,
        up: {
          ...state.up,
          photos: state.up.photos.concat([
            { id: action.photo, timestamp: action.timestamp }
          ])
        }
      };
    }
    case ActionTypes.CLASSIFY_RIGHT: {
      return {
        ...state,
        right: {
          ...state.right,
          photos: state.right.photos.concat([
            { id: action.photo, timestamp: action.timestamp }
          ])
        }
      };
    }
    default: {
      return state;
    }
  }
}
