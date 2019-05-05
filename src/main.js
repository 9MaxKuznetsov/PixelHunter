import {getAdsData} from './ads';
import {createPinElements, renderPinElements} from './pins';
import {createCardElements} from './cards';

const MAX_ADS = 8;
const MAIN_PIN = {
  left: 570,
  top: 375,
  width: 65,
  height: 65,
  tip: 22,
  isActive: false
};
const mapBlock = document.querySelector(`.map`);
const pinsBlock = mapBlock.querySelector(`.map__pins`);
const filtersBlock = mapBlock.querySelector(`.map__filters-container`);
const mainPin = mapBlock.querySelector(`.map__pin--main`);
const formBlock = document.querySelector(`.ad-form`);
const addressField = formBlock.querySelector(`#address`);

// Creating ads mock data
const adsData = getAdsData(MAX_ADS);

// Creating pin elements
const pinElements = createPinElements(adsData);

// Creating card elements
const cardElements = createCardElements(adsData);

// Getting mainPin coords
const getMainPinCoords = () => {
  let mainPinCoords;
  if (!MAIN_PIN.isActive) {
    mainPinCoords = `${MAIN_PIN.left + MAIN_PIN.width / 2}, ${MAIN_PIN.top + MAIN_PIN.height / 2}`;
  } else {
    mainPinCoords = `${MAIN_PIN.left + MAIN_PIN.width / 2}, ${MAIN_PIN.top + MAIN_PIN.height + MAIN_PIN.tip}`;
  }
  return mainPinCoords;
};

// Enabling page & inserting pin elements
const mainPinClickHandler = () => {
  mapBlock.classList.remove(`map--faded`);
  renderPinElements(pinsBlock, pinElements);
  MAIN_PIN.isActive = true;
  addressField.value = getMainPinCoords();
};
mainPin.addEventListener(`mouseup`, mainPinClickHandler);

// Inserting card elements
mapBlock.insertBefore(cardElements, filtersBlock);

// Setting mainPin coords
addressField.value = getMainPinCoords();
