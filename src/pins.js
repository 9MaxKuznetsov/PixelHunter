const createPinElement = () => {
  const pinElementTemplate = document.querySelector(`#pin`);
  const pinElement = pinElementTemplate.content.querySelector(`.map__pin`).cloneNode(true);
  return pinElement;
};

const createPinElements = (adsData) => {
  const pinElementsFragment = document.createDocumentFragment();
  for (const adData of adsData) {
    const pinElement = createPinElement();
    const pinElementImage = pinElement.querySelector(`img`);
    pinElement.style.left = `${adData.location.x}px`;
    pinElement.style.top = `${adData.location.y}px`;
    pinElementImage.src = adData.author.avatar;
    pinElementImage.alt = adData.offer.title;
    pinElementsFragment.appendChild(pinElement);
  }
  return pinElementsFragment;
};

export {createPinElements};
