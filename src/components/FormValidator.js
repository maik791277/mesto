class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._popup__button = settings.popup__button;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._errorClassVisible = settings.errorClassVisible;
    this._formElement = formElement;
  }

  _getForm() {
    const form = this._formElement
       .querySelector(this._formSelector);
    return form;
  }

   _setEventListeners() {
      this._buttonSubmit = this._element.querySelector(this._popup__button);
      this._inputList = Array.from(this._element.querySelectorAll(this._inputSelector));
   }

  _disableSubmit() {
     this._element.addEventListener("submit",(evt) => {
      this.disablesButton()
    })
  }

  _toggleButton() {
    const isFormValid = this._element.checkValidity();

    this._buttonSubmit.disabled = !isFormValid;
    this._buttonSubmit.classList.toggle(this._inactiveButtonClass, !isFormValid);
  }

  _handleFormInput(evt) {
    const input = evt.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`.${inputId}-error`);

    if (!input.validity.valid) {
      this._showInputError(input, errorElement)
    } else {
      this._hideInputError(input, errorElement);
    }
  }

  _addInputListeners() {
     this._inputList.forEach((item) => {
      item.addEventListener("input", (evt) => {
        this._handleFormInput(evt);
      });
    });
  }

  _showInputError(input, errorElement) {
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClassVisible);
  }

  _hideInputError(input, errorElement) {
    input.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClassVisible);
  }

  /** сделано для того чтобы при быстром нажатии на
   * кнопку или на enter не пропускала пустые поля */
   disablesButton() {
     this._element = this._getForm();
     this._setEventListeners();
     this._buttonSubmit.disabled = true;
     this._buttonSubmit.classList.add(this._inactiveButtonClass);
   }

   resetValidation() {
      this._element = this._getForm();
      this._setEventListeners();
      this._inputList.forEach((item) => {
         const inputId = item.id;
         const errorElement = document.querySelector(`.${inputId}-error`);

         errorElement.textContent = "";
         item.classList.remove(this._inputErrorClass);
      })
   }

  enableValidation() {
    this._element = this._getForm();
    this._setEventListeners();
    this._element.addEventListener("input", () => this._toggleButton());
    this._toggleButton();
    this._disableSubmit();
    this._addInputListeners();
  }

}

export default FormValidator;

