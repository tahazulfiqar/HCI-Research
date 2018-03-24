export const CLASSIFY_LEFT = "CLASSIFY_LEFT";
export const CLASSIFY_UP = "CLASSIFY_UP";
export const CLASSIFY_RIGHT = "CLASSIFY_RIGHT";

export function classifyLeft(photo) {
  return { type: CLASSIFY_LEFT, photo };
}

export function classifyUp(photo) {
  return { type: CLASSIFY_UP, photo };
}

export function classifyRight(photo) {
  return { type: CLASSIFY_RIGHT, photo };
}
