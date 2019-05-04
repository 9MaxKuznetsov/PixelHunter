const createCardElement = () => {
  const cardElementTemplate = document.querySelector(`#card`);
  const cardElement = cardElementTemplate.content.querySelector(`.map__card`).cloneNode(true);
  return cardElement;
};

const createFeatureElements = (adData) => {
  const featureElementsFragment = document.createDocumentFragment();
  for (const feature of adData.offer.features) {
    const featureElement = document.createElement(`li`);
    featureElement.classList.add(`popup__feature`, `popup__feature--${feature}`);
    featureElementsFragment.appendChild(featureElement);
  }
  return featureElementsFragment;
};

const createPhotoElements = (adData) => {
  const photoElementsFragment = document.createDocumentFragment();
  for (const photo of adData.offer.photos) {
    const photoElement = document.createElement(`img`);
    photoElement.classList.add(`popup__photo`);
    photoElement.width = `45`;
    photoElement.height = `40`;
    photoElement.alt = adData.offer.title;
    photoElement.src = photo;
    photoElementsFragment.appendChild(photoElement);
  }
  return photoElementsFragment;
};

const createCardElements = (adsData) => {
  const cardElementsFragment = document.createDocumentFragment();
  for (const adData of adsData) {
    const featureElements = createFeatureElements(adData);
    const photoElements = createPhotoElements(adData);
    const adElement = createCardElement();
    adElement.classList.add(`hidden`);
    adElement.querySelector(`.popup__avatar`).src = adData.author.avatar;
    adElement.querySelector(`.popup__title`).textContent = adData.offer.title;
    adElement.querySelector(`.popup__text--address`).textContent = adData.offer.address;
    adElement.querySelector(`.popup__text--price`).textContent = `${adData.offer.price}₽/ночь`;
    adElement.querySelector(`.popup__type`).textContent = adData.offer.type;
    adElement.querySelector(`.popup__text--capacity`).textContent = `${adData.offer.rooms} комнат для ${adData.offer.guests} гостей`;
    adElement.querySelector(`.popup__text--time`).textContent = `Заезд после ${adData.offer.checkin}, выезд до ${adData.offer.checkout}`;
    adElement.querySelector(`.popup__description`).textContent = adData.offer.description;
    adElement.querySelector(`.popup__features`).appendChild(featureElements);
    adElement.querySelector(`.popup__photos`).appendChild(photoElements);
    cardElementsFragment.appendChild(adElement);
  }
  return cardElementsFragment;
};

export {createCardElements};
