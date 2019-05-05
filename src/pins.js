import {showCardElement} from './cards';

const createPinElement = () => {
  const pinElementTemplate = document.querySelector(`#pin`);
  const pinElement = pinElementTemplate.content.querySelector(`.map__pin`).cloneNode(true);
  return pinElement;
};

const createPinElements = (adsData) => {
  const pinElementsFragment = document.createDocumentFragment();
  for (const [index, adData] of adsData.entries()) {
    const pinClickHandler = () => {
      showCardElement(index);
    };
    const pinElement = createPinElement();
    const pinElementImage = pinElement.querySelector(`img`);
    pinElement.style.left = `${adData.location.x}px`;
    pinElement.style.top = `${adData.location.y}px`;
    pinElementImage.src = adData.author.avatar;
    pinElementImage.alt = adData.offer.title;
    pinElement.setAttribute(`data-number`, index);
    pinElement.addEventListener(`click`, pinClickHandler);
    pinElementsFragment.appendChild(pinElement);
  }
  return pinElementsFragment;
};

const renderPinElements = (container, pinElements) => {
  container.appendChild(pinElements);
};

export {createPinElements};
export {renderPinElements};
