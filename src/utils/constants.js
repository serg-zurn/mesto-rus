export const initialCards = [
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

export const profilePopup = document.getElementById('edit-popup');
export const profilePopupNameInput = document.getElementById('edit-name');
export const profilePopupJobInput = document.getElementById('edit-status');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const elements = document.querySelector('.elements');
export const newPlacePopup = document.getElementById('place-popup');
export const newPlacePopupFormElement = document.getElementById('place-form');
export const newPlacePopupNameInput = document.getElementById('place-name');
export const newPlacePopupLinkInput = document.getElementById('place-link');
export const newPlaceAddButton = document.querySelector('.profile__add-button');
export const imagePopup = document.getElementById('image-popup');
export const profilePopupValidation = document.getElementById('edit-popup');
export const newPlcePopupValidation = document.getElementById('place-popup');
export const validationConfig = {
  formSelector: '.popup__form',
  fieldsetSelector: '.popup__fieldset',
  inactiveButtonClass: 'popup__save-button_interactive',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};