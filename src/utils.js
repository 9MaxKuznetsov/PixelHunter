const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
const getRandomLengthArray = (array) => {
  return array.slice(Math.floor(Math.random() * array.length));
};

export {getRandomArrayElement};
export {getRandomNumber};
export {getRandomLengthArray};
