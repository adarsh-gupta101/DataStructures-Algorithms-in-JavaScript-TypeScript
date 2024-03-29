// This function takes an array and randomly shuffle it

const shuffleArray = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    const randomNumber = Math.floor(Math.random() * (index + 1));

    [array[index], array[randomNumber]] = [array[randomNumber], array[index]];
  }
  return array;
};
