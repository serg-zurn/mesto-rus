import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPicture = this._popupSelector.querySelector('.popup__image-photo');
        this._popupFigcaption = this._popupSelector.querySelector('.popup__image-text');
    }

    open (name, link) {
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        this._popupFigcaption.textContent = name;
        super.open();
    }
}