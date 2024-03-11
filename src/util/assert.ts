type Assert = (condition: unknown, message: string) => asserts condition;

export const assert: Assert = (condition, message = '') => {
  if (!condition) {
    throw new Error(message);
  }
};
