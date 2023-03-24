import Popup from "./popup.js";

export default class PopupWithForm extends Popup{
   constructor(selector, {submitForms}) {
      super(selector);
      this._submitForms = submitForms;

      this._popupForm = this._selector.querySelector('.popup__form')
      this._inputList = this._popupForm.querySelectorAll('.popup__input')
   }

   close() {
      super.close()
      this._popupForm.reset()
   }

   _getInputValues() {
      this._formsValues = {}
      this._inputList.forEach((item) => {
         this._formsValues[item.name] = item.value
      });
      return this._formsValues;
   }

   setEventListeners() {
      super.setEventListeners();
      this._popupForm.addEventListener('submit',(evt) => {
         evt.preventDefault();
         this._submitForms(this._getInputValues());
         this.close()
      });
   }
}