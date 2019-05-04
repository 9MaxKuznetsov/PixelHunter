import {getRandomArrayElement, getRandomNumber} from './utils';

const AD_TITLES = [`Большая уютная квартира`, `Маленькая неуютная квартира`, `Огромный прекрасный дворец`, `Маленький ужасный дворец`, `Красивый гостевой домик`, `Некрасивый негостеприимный домик`, `Уютное бунгало далеко от моря`, `Неуютное бунгало по колено в воде`];
const AD_PRICE = {
  low: 1000,
  hight: 1000000
};
const AD_TYPES = [`palace`, `flat`, `house`, `bungalo`];
const AD_ROOMS = {
  min: 1,
  max: 5
};
const AD_CHECK_TIME = [`12:00`, `13:00`, `14:00`];
const AD_PHOTOS = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const AD_LOCATION = {
  "y": {
    min: 130,
    max: 630
  },
  "x": {
    min: 0,
    max: 1200
  }
};

const adData = {
  "author": {
    "avatar": `img/avatars/user01.png`
  },
  "offer": {
    "title": getRandomArrayElement(AD_TITLES),
    "address": `${getRandomNumber(0, 1000)}, ${getRandomNumber(0, 1000)}`,
    "price": getRandomNumber(AD_PRICE.low, AD_PRICE.high),
    "type": getRandomArrayElement(AD_TYPES),
    "rooms": getRandomNumber(AD_ROOMS.min, AD_ROOMS.max),
    "guests": getRandomNumber(0, 10),
    "checkin": getRandomArrayElement(AD_CHECK_TIME),
    "checkout": getRandomArrayElement(AD_CHECK_TIME),
    "description": ``,
    "photos": AD_PHOTOS
  },
  "location": {
    "x": getRandomNumber(AD_LOCATION.x.min, AD_LOCATION.x.max),
    "y": getRandomNumber(AD_LOCATION.y.min, AD_LOCATION.y.max)
  }
};

export {adData};
