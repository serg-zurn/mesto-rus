import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupElement) {
        super(popupElement);
        this._popupPicture = this._popupElement.querySelector('.popup__image-photo');
        this._popupFigcaption = this._popupElement.querySelector('.popup__image-text');
    }

    open (name, link) {
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        this._popupFigcaption.textContent = name;
        super.open();
    }
}