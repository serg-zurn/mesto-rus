export class Card {
  	constructor({data, handleCardClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
	}
  _getTemplate() {
    const elementItem = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__item')
    .cloneNode(true);
    return elementItem;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.elements__text').textContent = this._name;
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__image').alt = this._name;
    this._setListeners();
    return this._element;
  }
  _handleLikeClick() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }
  _handleDeleteClick() {
    this._element.remove();
  }
  _setListeners() {
    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._element.querySelector('.elements__like').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }
}
