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
    const form = document
      .querySelector(this._formElement)
      .querySelector(this._formSelector);

    return form;
  }

  _disableSubmit(element) {
    element.addEventListener("submit",(evt) => {
      evt.preventDefault();
    })
  }

  _toggleButton(element) {
    const buttonSubmit = element.querySelector(this._popup__button);
    const isFormValid = element.checkValidity();

    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(this._inactiveButtonClass, !isFormValid);
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

  _addInputListeners(element) {
    const inputList = Array.from(element.querySelectorAll(this._inputSelector));

    inputList.forEach((item) => {
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

  enableValidation() {
    this._element = this._getForm();
    this._disableSubmit(this._element);
    this._element.addEventListener("input", () => this._toggleButton(this._element));
    this._toggleButton(this._element);
    this._addInputListeners(this._element);
  }

}



export default FormValidator;

