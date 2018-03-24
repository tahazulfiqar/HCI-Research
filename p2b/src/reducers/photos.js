import * as ActionTypes from "../actions/photos";
import shuffle from "../utils/shuffle";

const createPhotoArray = () => {
  var imageIdxs = [];
  for (var i = 1; i <= 151; i++) {
    imageIdxs.push(i);
  }
  return shuffle(imageIdxs).slice(0, 40);
};

const numRows = state => Math.ceil(state.entities.length / 8);
const selectedIdx = state => state.selectedRow * 8 + state.selectedCol;
const lastRow = state => Math.floor(state.entities.length / 8);
const firstCol = state => state.selectedCol === 0;
const rowRemainder = state => state.entities.length % 8;

const InitialState = {
  entities: createPhotoArray(),
  selectedRow: 0,
  selectedCol: 0
};

export function photos(state = InitialState, action) {
  switch (action.type) {
    case ActionTypes.REMOVE_PHOTO: {
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
    case ActionTypes.UP_PHOTO: {
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
    case ActionTypes.DOWN_PHOTO: {
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
    case ActionTypes.LEFT_PHOTO: {
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
    case ActionTypes.RIGHT_PHOTO: {
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
    default: {
      return state;
    }
  }
}
