import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './constants.js';

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
// const elementTemplate = document.querySelector('.template__item').content;
const newPlacePopup = document.getElementById('place-popup');
const newPlacePopupFormElement = document.getElementById('place-form');
const newPlacePopupNameInput = document.getElementById('place-name');
const newPlacePopupLinkInput = document.getElementById('place-link');
const newPlaceAddButton = document.querySelector('.profile__add-button');
const newPlacePopupCloseButton = document.getElementById('place-popup-close-button');
// const deletePlaceButton = document.querySelector('.elements__trash');
const imagePopup = document.getElementById('image-popup');
const imagePopupCloseButton = document.getElementById('image-popup-close-button');
// const imagePopupImage = document.querySelector('.elements__image');
// const popup = document.querySelector('.popup');
const imagePopupText = imagePopup.querySelector('.popup__image-text');
const imagePopupPhoto = imagePopup.querySelector('.popup__image-photo');
const newPlaceSaveButton = document.getElementById('place-save');
const profilePopupValidation = document.getElementById('edit-popup');
const newPlcePopupValidation = document.getElementById('place-popup');
const validationConfig = {
  formSelector: '.popup__form',
  fieldsetSelector: '.popup__fieldset',
  inactiveButtonClass: 'popup__save-button_interactive',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

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
};

// Открытие поп-апа редактирования информации
function openProfilePopup() {
    profilePopupNameInput.value = profileName.textContent;
    profilePopupJobInput.value = profileStatus.textContent;
    openPopup(profilePopup);
};

// Отправка данных поп-апа редактирования информации
function profileEditFormSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = profilePopupNameInput.value;
    profileStatus.textContent = profilePopupJobInput.value;
    closePopup(profilePopup);
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
profilePopupCloseButton.addEventListener('click', () => closePopup(profilePopup));

// Слушатели на открытие и закрытие поп-апа добавления карточек
newPlacePopupFormElement.addEventListener('submit', newPlaceFormSubmitHandler);
newPlaceAddButton.addEventListener('click', () => {
  openPopup(newPlacePopup);
  checkNewPlcePopupValidation.toggleButtonState();
});
newPlacePopupCloseButton.addEventListener('click', () => closePopup(newPlacePopup));

// Слушатель на закрытие поп-апа расширенного просмотра карточки
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

// Закрытие поп-апа при нажатии на задний фон поп-апа
function closePopupBackgroundClick(popuptype) {
  popuptype.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popuptype)}
  });
}

closePopupBackgroundClick(profilePopup);
closePopupBackgroundClick(newPlacePopup);
closePopupBackgroundClick(imagePopup);

const checkProfilePopupValidation = new FormValidator(validationConfig, profilePopupValidation);
checkProfilePopupValidation.enableValidation();
const checkNewPlcePopupValidation = new FormValidator(validationConfig, newPlcePopupValidation);
checkNewPlcePopupValidation.enableValidation();