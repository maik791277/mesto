import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
   constructor(selector ,popupImage,popupText) {
      super(selector);
      this._image = popupImage;
      this._text = popupText;
   }

   open(name, alt, src) {
      this._image.src = `${name}`;
      this._image.alt = `${alt}`;
      this._text.textContent = `${src}`;
      super.open();
   }
}

// popupImageSrc.src = `${name}`;
// popupImageSrc.alt = `${alt}`;
// popupUserImageTitle.textContent = `${src}`;