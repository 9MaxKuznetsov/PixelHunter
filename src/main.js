import {getAdsData, createAdsElements} from './ads';

const MAX_ADS = 8;

const mapBlock = document.querySelector(`.map`);
const pinsBlock = mapBlock.querySelector(`.map__pins`);

// Enabling page
mapBlock.classList.remove(`map--faded`);

// Creating ads mock data
const adsData = getAdsData(MAX_ADS);

// Creating ads elements
const adsElements = createAdsElements(adsData);

// Inserting pins elements
pinsBlock.appendChild(adsElements);
