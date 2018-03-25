import * as ActionTypes from "../actions/classify";

const InitialState = {
  log: [],
  left: { folderName: "Text", photos: [] },
  up: { folderName: "Faces", photos: [] },
  right: { folderName: "Other", photos: [] }
};

export function classifications(state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.CLASSIFY_LEFT: {
      return {
        ...state,
        log: state.log.concat([
          { id: action.photo, timestamp: action.timestamp }
        ]),
        left: {
          ...state.left,
          photos: state.left.photos.concat([action.photo])
        }
      };
    }
    case ActionTypes.CLASSIFY_UP: {
      return {
        ...state,
        log: state.log.concat([
          { id: action.photo, timestamp: action.timestamp }
        ]),
        up: {
          ...state.up,
          photos: state.up.photos.concat([action.photo])
        }
      };
    }
    case ActionTypes.CLASSIFY_RIGHT: {
      return {
        ...state,
        log: state.log.concat([
          { id: action.photo, timestamp: action.timestamp }
        ]),
        right: {
          ...state.right,
          photos: state.right.photos.concat([action.photo])
        }
      };
    }
    case ActionTypes.UPDATE_FOLDER_LEFT_NAME: {
      return {
        ...state,
        left: {
          ...state.left,
          folderName: action.name
        }
      };
    }
    case ActionTypes.UPDATE_FOLDER_UP_NAME: {
      return {
        ...state,
        up: {
          ...state.up,
          folderName: action.name
        }
      };
    }
    case ActionTypes.UPDATE_FOLDER_RIGHT_NAME: {
      return {
        ...state,
        right: {
          ...state.right,
          folderName: action.name
        }
      };
    }
    default: {
      return state;
    }
  }
}
