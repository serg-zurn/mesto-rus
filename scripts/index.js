import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
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
const imagePopup = document.getElementById('image-popup');
const imagePopupCloseButton = document.getElementById('image-popup-close-button');
const imagePopupImage = document.querySelector('.elements__image');
const popup = document.querySelector('.popup');
const imagePopupText = imagePopup.querySelector('.popup__image-text');
const imagePopupPhoto = imagePopup.querySelector('.popup__image-photo');
const newPlaceSaveButton = document.getElementById('place-save');
  
// Функция открытия для всех поп-апов
export function openPopup(place) {
    place.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}
// Функция закрытия для всех поп-апов
function closePopup(place) {
    place.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}




initialCards.reverse().forEach((item) => {
  const startCards = new Card(item, '.template__item', handleCardClick);
	const messageElement = startCards.generateCard();
  elements.prepend(messageElement);
})

function newPlaceFormSubmitHandler (evt) {
  evt.preventDefault();
  const newCards = new Card ({name: newPlacePopupNameInput.value, link: newPlacePopupLinkInput.value}, '.template__item', handleCardClick);
  const messageElement = newCards.generateCard();
  elements.prepend(messageElement);
  closePopup(newPlacePopup);
  newPlacePopupFormElement.reset();
  if (newPlacePopupNameInput.value == "" && newPlacePopupLinkInput.value == ""){
    newPlaceSaveButton.classList.add('popup__save-button_interactive');
    newPlaceSaveButton.setAttribute("disabled", "disabled");
  }
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

// Закрытие поп-апов по нажатию на Escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Открытие поп-апа расширенного просмотра карточек
function handleCardClick(name, link) {
  imagePopupText.textContent = name;
  imagePopupPhoto.src = link;
  imagePopupPhoto.alt = name;
  openPopup(imagePopup);
}

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

// Слушатели на закрытие поп-апов по клику по заднему фону
profilePopup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closeProfilePopup()}
});
newPlacePopup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closeNewPlacePopup()}
});
imagePopup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closeImagePopup()}
});


const profilePopupValidation = document.getElementById('edit-popup');
const newPlcePopupValidation = document.getElementById('place-popup');
const settings = {
  formSelector: '.popup__form',
  fieldsetSelector: '.popup__fieldset',
  inactiveButtonClass: 'popup__save-button_interactive',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const checkProfilePopupValidation = new FormValidator(settings, profilePopupValidation);
const checkNewPlcePopupValidation = new FormValidator(settings, newPlcePopupValidation);
checkProfilePopupValidation.enableValidation();
checkNewPlcePopupValidation.enableValidation();