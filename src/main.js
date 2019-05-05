import {getAdsData} from './ads';
import {createPinElements} from './pins';
import {createCardElements} from './cards';

const MAX_ADS = 8;

const mapBlock = document.querySelector(`.map`);
const pinsBlock = mapBlock.querySelector(`.map__pins`);
const filtersBlock = mapBlock.querySelector(`.map__filters-container`);

// Enabling page

// Creating ads mock data
const adsData = getAdsData(MAX_ADS);

// Creating pin elements
const pinElements = createPinElements(adsData);

// Creating card elements
const cardElements = createCardElements(adsData);

// Inserting pin elements
pinsBlock.appendChild(pinElements);

// Inserting card elements
mapBlock.insertBefore(cardElements, filtersBlock);
