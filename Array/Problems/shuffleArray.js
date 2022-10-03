// This function takes an array and randomly shuffle it

const shuffleArray = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    let temp;
    const randomNumber = Math.floor(Math.random() * (index + 1));

    temp = array[index];
    array[index] = array[randomNumber];
    array[randomNumber] = temp;
  }
  return array;
};
