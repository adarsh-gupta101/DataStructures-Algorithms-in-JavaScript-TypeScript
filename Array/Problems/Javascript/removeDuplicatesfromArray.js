const removeDuplicates = (array) => {
  const checker = new Map();
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    checker.set(array[i], checker.get(array[i]) + 1 || 1);
  }
  for (const key of checker.values()) {
    answer.push(key);
  }
  return answer;
};
