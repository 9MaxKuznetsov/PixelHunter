import {getAdsData} from './ads';
import {createPinElements, renderPinElements} from './pins';
import {createCardElements} from './cards';

const MAX_ADS = 8;
const MAIN_PIN = {
  left: 570,
  top: 375,
  width: 65,
  height: 65,
  tip: 0
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

// Enabling page & inserting pin elements
const mainPinClickHandler = () => {
  mapBlock.classList.remove(`map--faded`);
  renderPinElements(pinsBlock, pinElements);
};
mainPin.addEventListener(`mouseup`, mainPinClickHandler);

// Inserting card elements
mapBlock.insertBefore(cardElements, filtersBlock);

// Setting mainPin coords
const getMainPinCoords = () => `${MAIN_PIN.left + MAIN_PIN.width / 2}, ${MAIN_PIN.top + 65 / 2}`;
addressField.value = getMainPinCoords();
