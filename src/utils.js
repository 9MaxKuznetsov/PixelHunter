const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomNumber = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export {getRandomArrayElement};
export {getRandomNumber};
