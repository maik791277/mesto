import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
   constructor(props, {submitForms}) {
      super(props);
      this._submitForms = submitForms;

      this._popupForm = this._props.querySelector('.popup__form')
      this._inputList = this._popupForm.querySelectorAll('.popup__input')
      this._submitButton = this._popupForm.querySelector('.popup__button')

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

   setInputValues(data) {
      this._inputList.forEach((input) => {
         input.value = data[input.name];
      });
   }

   setEventListeners() {
      super.setEventListeners();

      this._popupForm.addEventListener('submit', (evt) => {
         evt.preventDefault();
         // перед запросом сохраняем изначальный текст кнопки
         const initialText = this._submitButton.textContent;
         // меняем его, чтобы показать пользователю ожидание
         this._submitButton.textContent = 'Сохранение...';
         this._submitForms(this._getInputValues())
         .then(() => this.close()) // закрывается попап в `then`
         .finally(() => {
            this._submitButton.textContent = initialText;
         }) // в любом случае меняется текст кнопки обратно на начальный в `finally`
      });
   }
}