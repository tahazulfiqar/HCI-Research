export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const UP_PHOTO = "UP_PHOTO";
export const DOWN_PHOTO = "DOWN_PHOTO";
export const LEFT_PHOTO = "LEFT_PHOTO";
export const RIGHT_PHOTO = "RIGHT_PHOTO";

export function removePhoto() {
  return { type: REMOVE_PHOTO };
}

export function upPhoto() {
  return { type: UP_PHOTO };
}

export function downPhoto() {
  return { type: DOWN_PHOTO };
}

export function leftPhoto() {
  return { type: LEFT_PHOTO };
}

export function rightPhoto() {
  return { type: RIGHT_PHOTO };
}
