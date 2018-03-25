export const CLASSIFY_LEFT = "CLASSIFY_LEFT";
export const CLASSIFY_UP = "CLASSIFY_UP";
export const CLASSIFY_RIGHT = "CLASSIFY_RIGHT";
export const UPDATE_FOLDER_LEFT_NAME = "UPDATE_FOLDER_LEFT_NAME";
export const UPDATE_FOLDER_UP_NAME = "UPDATE_FOLDER_UP_NAME";
export const UPDATE_FOLDER_RIGHT_NAME = "UPDATE_FOLDER_RIGHT_NAME";

export function classifyLeft(photo, timestamp) {
  return { type: CLASSIFY_LEFT, photo, timestamp };
}

export function classifyUp(photo, timestamp) {
  return { type: CLASSIFY_UP, photo, timestamp };
}

export function classifyRight(photo, timestamp) {
  return { type: CLASSIFY_RIGHT, photo, timestamp };
}

export function updateFolderLeftName(name) {
  return { type: UPDATE_FOLDER_LEFT_NAME, name };
}

export function updateFolderUpName(name) {
  return { type: UPDATE_FOLDER_UP_NAME, name };
}

export function updateFolderRightName(name) {
  return { type: UPDATE_FOLDER_RIGHT_NAME, name };
}
