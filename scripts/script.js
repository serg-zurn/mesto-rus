const profileCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_status');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__info-name');
const profileStatus = profileInfo.querySelector('.profile__info-status');
const profileEditButton = document.querySelector('.profile__edit-button');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template__item').content;
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
const newPlacePopup = document.querySelector('.new-place-popup');
const newPlaceFormElement = document.querySelector('.new-place-popup__form');
const newPlaceNameInput = newPlaceFormElement.querySelector('.new-place-popup__input_type_name');
const newPlaceLinkInput = newPlaceFormElement.querySelector('.new-place-popup__input_type_link');
const newPlaceAddButton = document.querySelector('.profile__add-button');
const newPlaceCloseButton = document.querySelector('.new-place-popup__close-button');
const deletePlaceButton = document.querySelector('.elements__trash');
const elementsItem = document.querySelector('.elements__item');
const imagePopup = document.querySelector('.image-popup');
const imageClosePopupButton = document.querySelector('.image-popup__close-button');
const imageOpenPopup = document.querySelector('.elements__image');
const imageName = document.querySelector('.image-popup__name');
const imageLink = document.querySelector('.image-popup__photo');


// Добавление шести карточек при открытии страницы
initialCards.forEach(function (initialCards) {
    const elementItem = elementTemplate.cloneNode(true);
    elementItem.querySelector('.elements__text').textContent = initialCards.name;
    elementItem.querySelector('.elements__image').src = initialCards.link;
    // Проставление лайков карточкам
    elementItem.querySelector('.elements__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like_active');
    });
    // Удаление карточек
    elementItem.querySelector('.elements__trash').addEventListener('click', function (evt) {
      evt.target.closest('.elements__item').remove();
    });
    // Открытие поп-апа картинки на весь экран
    elementItem.querySelector('.elements__image').addEventListener('click', function () {
      imagePopup.querySelector('.image-popup__text').textContent = initialCards.name;
      imagePopup.querySelector('.image-popup__photo').src = initialCards.link;
      imagePopup.classList.add('popup_opened');
    });
    elements.append(elementItem);
});

// Открытие поп-апа редактирования и изменение информации
function openPopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
    popup.classList.add('popup_opened');
};
function closePopup() {
    popup.classList.remove('popup_opened');
};
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup();
};

// Открытие поп-апа и добавление новых карточек
function openNewPlacePopup() {
    newPlacePopup.classList.add('popup_opened');
};
function closeNewPlacePopup() {
    newPlacePopup.classList.remove('popup_opened');
};
function NewPlaceFormSubmitHandler (evt) {
    evt.preventDefault();
    const elementItem = elementTemplate.cloneNode(true);
    elementItem.querySelector('.elements__text').textContent = newPlaceNameInput.value;
    elementItem.querySelector('.elements__image').src = newPlaceLinkInput.value;
    // Проставление лайков карточкам
    elementItem.querySelector('.elements__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like_active');
    });
    // Удаление карточек
    elementItem.querySelector('.elements__trash').addEventListener('click', function (evt) {
      evt.target.closest('.elements__item').remove();
    });
    // Открытие поп-апа картинки на весь экран
    elementItem.querySelector('.elements__image').addEventListener('click', function () {
      imagePopup.querySelector('.image-popup__text').textContent = newPlaceNameInput.value;
      imagePopup.querySelector('.image-popup__photo').src = newPlaceLinkInput.value;
      imagePopup.classList.add('popup_opened');
    });    
    elements.prepend(elementItem);    
    closeNewPlacePopup();
};

//Закрытие поп-апа расширенного просмотра карточек
function closeImagePopup() {
  imagePopup.classList.remove('popup_opened');
};

// Слушатели открытие и закрытие поп-апа редактирования
formElement.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', openPopup);
profileCloseButton.addEventListener('click', closePopup);

// Слушатели открытие и закрытие поп-апа добавления карточек
newPlaceFormElement.addEventListener('submit', NewPlaceFormSubmitHandler);
newPlaceAddButton.addEventListener('click', openNewPlacePopup);
newPlaceCloseButton.addEventListener('click', closeNewPlacePopup);

// Слушатель на закрытие поп-апа расширенного просмотра карточки
imageClosePopupButton.addEventListener('click', closeImagePopup);