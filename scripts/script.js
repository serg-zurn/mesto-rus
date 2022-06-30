const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const profilePopupCloseButton = document.getElementById('edit-popup-close-button');
const profilePopup = document.getElementById('edit-popup');
const profilePopupFormElement = document.getElementById('edit-form');
const profilePopupNameInput = document.getElementById('edit-name');
const profilePopupJobInput = document.getElementById('edit-status');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__info-name');
const profileStatus = profileInfo.querySelector('.profile__info-status');
const profileEditButton = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template__item').content;
const newPlacePopup = document.getElementById('place-popup');
const newPlacePopupFormElement = document.getElementById('place-form');
const newPlacePopupNameInput = document.getElementById('place-name');
const newPlacePopupLinkInput = document.getElementById('place-link');
const newPlaceAddButton = document.querySelector('.profile__add-button');
const newPlacePopupCloseButton = document.getElementById('place-popup-close-button');
const deletePlaceButton = document.querySelector('.elements__trash');
const elementsItemTemplate = document.querySelector('.elements__item');
const imagePopup = document.getElementById('image-popup');
const imagePopupCloseButton = document.getElementById('image-popup-close-button');
const imagePopupImage = document.querySelector('.elements__image');

// Функция открытия для всех поп-апов
function openPopup(place){
    place.classList.add('popup_opened');
}
// Функция закрытия для всех поп-апов
function closePopup(place){
  place.classList.remove('popup_opened');
}

// Общий метод - Создание карточки
function createCard(item) {
  const elementItem = elementTemplate.querySelector('.elements__item').cloneNode(true);
  elementItem.querySelector('.elements__text').textContent = item.name;
  elementItem.querySelector('.elements__image').src = item.link;
  // Проставление лайков
  elementItem.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  // Удаление
  elementItem.querySelector('.elements__trash').addEventListener('click', function (evt) {
    elementItem.remove();
  });
  // Открытие картинки
  elementItem.querySelector('.elements__image').addEventListener('click', function () {
    imagePopup.querySelector('.popup__image-text').textContent = item.name;
    imagePopup.querySelector('.popup__image-photo').src = item.link;
    openPopup(imagePopup);
  });
  return elementItem;
}

// Общий метод - Рендеринг карточки
function addCard(item) {
  const elementItem = createCard(item);
  elements.prepend(elementItem);
}

// Шесть карточек при открытии страницы
initialCards.reverse().forEach(addCard);

// Новые карточки
function newPlaceFormSubmitHandler (evt) {
  evt.preventDefault();
  const newCardFormAdd = {name: newPlacePopupNameInput.value, link: newPlacePopupLinkInput.value};
  addCard(newCardFormAdd);
  closePopup(newPlacePopup);
  newPlacePopupFormElement.reset();
};

// Открытие поп-апа редактирования информации
function openProfilePopup() {
    profilePopupNameInput.value = profileName.textContent;
    profilePopupJobInput.value = profileStatus.textContent;
    openPopup(profilePopup);
};
// Закрытие поп-апа редактирования информации
function closeProfilePopup() {
    closePopup(profilePopup)
};
// Отправка данных поп-апа редактирования информации
function profileEditFormSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = profilePopupNameInput.value;
    profileStatus.textContent = profilePopupJobInput.value;
    closePopup(profilePopup);
};

// Открытие поп-апа добавления новых карточек
function openNewPlacePopup() {
    openPopup(newPlacePopup);
};
// Закрытие поп-апа добавления новых карточек
function closeNewPlacePopup() {
    closePopup(newPlacePopup);
};

// Закрытие поп-апа расширенного просмотра карточек
function closeImagePopup() {
  closePopup(imagePopup)
};

// Слушатели на открытие и закрытие поп-апа редактирования
profilePopupFormElement.addEventListener('submit', profileEditFormSubmitHandler);
profileEditButton.addEventListener('click', openProfilePopup);
profilePopupCloseButton.addEventListener('click', closeProfilePopup);

// Слушатели на открытие и закрытие поп-апа добавления карточек
newPlacePopupFormElement.addEventListener('submit', newPlaceFormSubmitHandler);
newPlaceAddButton.addEventListener('click', openNewPlacePopup);
newPlacePopupCloseButton.addEventListener('click', closeNewPlacePopup);

// Слушатель на закрытие поп-апа расширенного просмотра карточки
imagePopupCloseButton.addEventListener('click', closeImagePopup);