import * as ActionTypes from "../actions/photos";
import shuffle from "../utils/shuffle";

const createPhotoMatrix = () => {
  var imageIdxs = [];
  for (var i = 1; i <= 151; i++) {
    imageIdxs.push(i);
  }
  var photoArray = shuffle(imageIdxs).slice(0, 40);
  var matrix = [];
  for (var j = 0; j < 5; j++) {
    var row = [];
    for (var k = 0; k < 8; k++) {
      row.push(photoArray[k]);
    }
    matrix.push(row);
    photoArray = photoArray.slice(8);
  }
  return matrix;
};

const InitialState = {
  entities: createPhotoMatrix(),
  selectedRow: 0,
  selectedCol: 0
};

export function photos(state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.REMOVE_PHOTO: {
      return {
        ...state,
        entities: state.entities.splice(action.idx, 1)
      };
    }
    case ActionTypes.UP_PHOTO: {
      return {
        ...state,
        selectedRow: (state.selectedRow - 1) % 5
      };
    }
    case ActionTypes.DOWN_PHOTO: {
      return {
        ...state,
        selectedRow: (state.selectedRow + 1) % 5
      };
    }
    case ActionTypes.LEFT_PHOTO: {
      return {
        ...state,
        selectedCol: (state.selectedCol - 1) % 8
      };
    }
    case ActionTypes.RIGHT_PHOTO: {
      return {
        ...state,
        selectedCol: (state.selectedCol + 1) % 8
      };
    }
    default: {
      return state;
    }
  }
}
