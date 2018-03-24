export const CLASSIFY_LEFT = "CLASSIFY_LEFT";
export const CLASSIFY_UP = "CLASSIFY_UP";
export const CLASSIFY_RIGHT = "CLASSIFY_RIGHT";

export function classifyLeft(photo, timestamp) {
  return { type: CLASSIFY_LEFT, photo, timestamp };
}

export function classifyUp(photo, timestamp) {
  return { type: CLASSIFY_UP, photo, timestamp };
}

export function classifyRight(photo, timestamp) {
  return { type: CLASSIFY_RIGHT, photo, timestamp };
}
