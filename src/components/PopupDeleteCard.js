import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup{
   constructor(props) {
      super(props);
      this._popupForm = this._props.querySelector('.popup__form')
      this._onSubmit = (evt) => {
         evt.preventDefault();
         this._popupDeleteSubmit()
      }
   }

   submitFormsCardDelete(popupDeleteSubmit) {
      this._popupDeleteSubmit = popupDeleteSubmit
   }

   close() {
      super.close()
      this._popupForm.removeEventListener("submit",this._onSubmit)
   }

   open() {
      super.open();
      this._popupForm.addEventListener('submit', this._onSubmit)
   }

   setEventListeners() {
      super.setEventListeners();
   }
}