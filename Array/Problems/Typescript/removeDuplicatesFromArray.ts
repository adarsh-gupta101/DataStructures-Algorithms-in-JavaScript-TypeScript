const removeDuplicatesFromArray = <T>(array: T[]): T[] => {
  const checker = new Map();
  const answer: T[] = [];
  for (let i = 0; i < array.length; i++) {
    checker.set(array[i], checker.get(array[i]) + 1 || 1);
  }
  for (const key of checker.values()) {
    answer.push(key);
  }
  return answer;
};
