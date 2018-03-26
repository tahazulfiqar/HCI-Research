import * as photosActions from "../actions/photos";
import * as modeActions from "../actions/mode";
import shuffle from "../utils/shuffle";

const createPhotoArray = () => {
  var imageIdxs = [];
  for (var i = 1; i <= 151; i++) {
    imageIdxs.push(i);
  }
  return shuffle(imageIdxs);
};

const numRows = state => Math.ceil(state.entities.length / 8);
const selectedIdx = state => state.selectedRow * 8 + state.selectedCol;
const lastRow = state => Math.floor(state.entities.length / 8);
const firstCol = state => state.selectedCol === 0;
const rowRemainder = state => state.entities.length % 8;

const InitialState = {
  fullPhotoList: createPhotoArray(),
  entities: [],
  selectedRow: 0,
  selectedCol: 0
};

export function photos(state = InitialState, action) {
  switch (action.type) {
    case photosActions.REMOVE_PHOTO: {
      return {
        ...state,
        entities: state.entities
          .slice(0, selectedIdx(state))
          .concat(
            state.entities.slice(selectedIdx(state) + 1, state.entities.length)
          ),
        selectedCol:
          firstCol(state) &&
          state.selectedRow === lastRow(state) &&
          selectedIdx(state) === state.entities.length - 1
            ? firstCol(state) ? 7 : state.selectedCol - 1
            : state.selectedRow === numRows(state) - 1 &&
              state.selectedCol === (state.entities.length - 1) % 8
              ? state.selectedCol - 1
              : state.selectedCol,
        selectedRow:
          firstCol(state) &&
          state.selectedRow === lastRow(state) &&
          selectedIdx(state) === state.entities.length - 1
            ? firstCol(state) ? state.selectedRow - 1 : state.selectedRow
            : state.selectedRow
      };
    }
    case photosActions.UP_PHOTO: {
      return {
        ...state,
        selectedRow:
          state.selectedRow - 1 < 0 &&
          rowRemainder(state) !== 0 &&
          rowRemainder(state) - 1 < state.selectedCol
            ? (state.selectedRow - 1 + numRows(state)) % numRows(state) - 1
            : (state.selectedRow - 1 + numRows(state)) % numRows(state)
      };
    }
    case photosActions.DOWN_PHOTO: {
      return {
        ...state,
        selectedRow:
          state.selectedRow + 1 === lastRow(state) &&
          rowRemainder(state) !== 0 &&
          rowRemainder(state) - 1 < state.selectedCol
            ? 0
            : (state.selectedRow + 1 + numRows(state)) % numRows(state)
      };
    }
    case photosActions.LEFT_PHOTO: {
      return {
        ...state,
        selectedCol:
          selectedIdx(state) <
          state.entities.length - (rowRemainder(state) || 8)
            ? (state.selectedCol - 1 + 8) % 8
            : firstCol(state)
              ? rowRemainder(state) - 1
              : (state.selectedCol - 1 + 8) % 8
      };
    }
    case photosActions.RIGHT_PHOTO: {
      return {
        ...state,
        selectedCol:
          selectedIdx(state) <
          state.entities.length - (rowRemainder(state) || 8)
            ? (state.selectedCol + 1 + 8) % 8
            : state.selectedCol + 1 === (rowRemainder(state) || 8)
              ? 0
              : (state.selectedCol + 1 + 8) % 8
      };
    }
    case modeActions.TEST_PHASE: {
      return {
        ...state,
        entities: state.fullPhotoList.slice(0, 40)
      };
    }
    case modeActions.TRAINING_PHASE: {
      return {
        ...state,
        entities: state.fullPhotoList.slice(0, 10)
      };
    }
    default: {
      return state;
    }
  }
}
