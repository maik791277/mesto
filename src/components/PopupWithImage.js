import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
   constructor(props ,popupImage,popupText) {
      super(props);
      this._image = this._props.querySelector(popupImage)
      this._text = this._props.querySelector(popupText)
   }

   open(name, alt, src) {
      this._image.src = `${name}`;
      this._image.alt = `${alt}`;
      this._text.textContent = `${src}`;
      super.open();
   }
}

