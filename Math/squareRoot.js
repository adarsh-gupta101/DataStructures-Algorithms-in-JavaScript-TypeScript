/**
 * @param number
 * @param [tolerance]
 * @return {number}
 */
export default function squareRoot(number, tolerance = 0) {
  if (number < 0) {
    throw new Error('The method supports only positive integers');
  }

  if (number === 0) {
    return 0;
  }

  let root = 1;
  const requiredDelta = 1 / (10 ** tolerance);

  while (Math.abs(number - (root ** 2)) > requiredDelta) {
    root -= ((root ** 2) - number) / (2 * root);
  }

  return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
