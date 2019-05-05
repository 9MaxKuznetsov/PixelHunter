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
  for (const [index, adData] of adsData.entries()) {
    const featureElements = createFeatureElements(adData);
    const photoElements = createPhotoElements(adData);
    const cardElement = createCardElement();
    const closeButtonClickHandler = () => cardElement.classList.add(`hidden`);
    const closeButton = cardElement.querySelector(`.popup__close`);

    closeButtonClickHandler();
    cardElement.querySelector(`.popup__avatar`).src = adData.author.avatar;
    cardElement.querySelector(`.popup__title`).textContent = adData.offer.title;
    cardElement.querySelector(`.popup__text--address`).textContent = adData.offer.address;
    cardElement.querySelector(`.popup__text--price`).textContent = `${adData.offer.price}₽/ночь`;
    cardElement.querySelector(`.popup__type`).textContent = adData.offer.type;
    cardElement.querySelector(`.popup__text--capacity`).textContent = `${adData.offer.rooms} комнат для ${adData.offer.guests} гостей`;
    cardElement.querySelector(`.popup__text--time`).textContent = `Заезд после ${adData.offer.checkin}, выезд до ${adData.offer.checkout}`;
    cardElement.querySelector(`.popup__description`).textContent = adData.offer.description;
    cardElement.querySelector(`.popup__features`).appendChild(featureElements);
    cardElement.querySelector(`.popup__photos`).appendChild(photoElements);
    cardElement.setAttribute(`data-number`, index);
    closeButton.addEventListener(`click`, closeButtonClickHandler);
    cardElementsFragment.appendChild(cardElement);
  }
  return cardElementsFragment;
};

const showCardElement = (index) => {
  const cards = document.querySelectorAll(`.map__card`);
  // Hiding card if opened
  for (const card of cards) {
    if (!card.classList.contains(`hidden`)) {
      card.classList.add(`hidden`);
    }
  }
  // Showing card
  const cardToShow = document.querySelector(`.map__card[data-number="${index}"]`);
  cardToShow.classList.remove(`hidden`);
};

export {createCardElements};
export {showCardElement};
