import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup{
   constructor(props, {submitFormsCard}) {
      super(props);
      this._submitFormsCard = submitFormsCard;
      this._popupForm = this._props.querySelector('.popup__form')
      this._onSubmit = (evt) => {
         evt.preventDefault();
         this._submitFormsCard()
         this.close();
      }
   }

   close() {
      super.close()
      this._popupForm.removeEventListener("submit", this._onSubmit)
   }

   setEventListeners() {
      super.setEventListeners();
      this._popupForm.addEventListener('submit', this._onSubmit)
   }
}