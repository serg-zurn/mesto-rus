import './index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { profilePopup, profilePopupNameInput, profilePopupJobInput, profileEditButton, elements, newPlacePopup, newPlacePopupFormElement, newPlaceAddButton, imagePopup, profilePopupValidation, newPlcePopupValidation, validationConfig } from "../utils/constants.js"
import { initialCards } from '../utils/constants.js';

 
const createCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupOpenPicture.open(data.name, data.link);
    }
  },
    '.template__item');
  return card.generateCard();
}

// Создание экземпляра класса добавления карточек по умолчанию
const defaultCardList = new Section({
  items: initialCards,
  renderer: (items) => {
    const startCards = createCard(items);
    defaultCardList.setItem(startCards);
  }
}, '.elements');

// Рендеринг карточек по умолчанию
defaultCardList.renderItems(initialCards);

// Создание экземпляра класса расширенного просмотра картинки
const popupOpenPicture = new PopupWithImage(imagePopup);

// Создание экземпляра класса формы добавления новых карточек
const addCardPopup = new PopupWithForm(newPlacePopup, {handleSubmitForm: (data) => {
  const newCards = createCard(data);
  elements.prepend(newCards);
  addCardPopup.close();
  newPlacePopupFormElement.reset();
  }
});

// Создание экземпляра класса редактирования информации класса пользователя
const userProfile = new UserInfo ({userProfileName: '.profile__info-name', userProfileStatus: '.profile__info-status'});

// Создание экземпляра класса формы редактирования профиля
const profileEditPopup = new PopupWithForm(profilePopup, {handleSubmitForm: (data) => {
  userProfile.setUserInfo(data);
  profileEditPopup.close();
  }
});

// Открытие поп-апа редактирования информации
function openProfilePopup() {
    const profileData = userProfile.getUserInfo();
    profilePopupNameInput.value = profileData.userName;
    profilePopupJobInput.value = profileData.userInfo;
    profileEditPopup.open();
};

// Слушатель на открытие поп-апа редактирования профиля
profileEditButton.addEventListener('click', openProfilePopup);

// Слушатели на открытие поп-апа добавления карточек
newPlaceAddButton.addEventListener('click', () => {
  addCardPopup.open();
  checkNewPlcePopupValidation.toggleButtonState();
});

// Слушатель экземпляра класса формы добавления новых карточек
addCardPopup.setEventListeners();

// Слушатель экземпляра класса формы редактирования профиля
profileEditPopup.setEventListeners();

// Слушательно экземпляра класса расширенного просмотра картинки
popupOpenPicture.setEventListeners();

// Создание экземпляров класса валидации форм редактирования профиля и добавления новых карточек
const checkProfilePopupValidation = new FormValidator(validationConfig, profilePopupValidation);
const checkNewPlcePopupValidation = new FormValidator(validationConfig, newPlcePopupValidation);

// Валидация форм редактирования профиля и добавления новых карточек
checkProfilePopupValidation.enableValidation();
checkNewPlcePopupValidation.enableValidation();