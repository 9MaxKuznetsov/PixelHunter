import {getAdsData} from './ads';
import {createPinElements, renderPinElements} from './pins';
import {createCardElements} from './cards';

const MAX_ADS = 8;

const mapBlock = document.querySelector(`.map`);
const pinsBlock = mapBlock.querySelector(`.map__pins`);
const filtersBlock = mapBlock.querySelector(`.map__filters-container`);
const mainPin = mapBlock.querySelector(`.map__pin--main`);

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
mainPin.addEventListener(`click`, mainPinClickHandler);

// Inserting card elements
mapBlock.insertBefore(cardElements, filtersBlock);
