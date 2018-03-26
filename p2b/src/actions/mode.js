export const CLASSIFICATION_MODE = "CLASSIFICATION_MODE";
export const TEST_PHASE = "TEST_PHASE";
export const TRAINING_PHASE = "TRAINING_PHASE";

export function classificationMode() {
  return { type: CLASSIFICATION_MODE };
}

export function testPhase() {
  return { type: TEST_PHASE };
}

export function trainingPhase() {
  return { type: TRAINING_PHASE };
}
