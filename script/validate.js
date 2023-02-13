/**
 * обрабатывает поиск всех form и выполняет все функци для этих форм (валидация)
 * @param {*} config принимает обыект
 * */
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach(function (formElement) {
        formElement.addEventListener('submit', disableSubmit)
        formElement.addEventListener('input', () => {
            toggleButton(formElement, config)
        });

        toggleButton(formElement, config)
        addInputListeners(formElement, config)

    })
}

/**
 * обрабатывает кнопки submit
 * @param {*} form принимает form
 * @param {*} config принимает обыект
 * */
function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.popup__button);
    const isFormValid = form.checkValidity();

    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

/**
 * поиск всех input и присваивает им свойства
 * @param {*} form принимает form
 * @param {*} config принимает обыект
 * */
function addInputListeners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));

    inputList.forEach(function (item) {
        item.addEventListener('input', (evt) => {
            handleFormInput(evt, config)
        });
    })
}

/**
 * обрабатывает поля вода в form
 * @param {*} evt работает с evt.target
 * @param {*} config принимает обыект
 * */
function handleFormInput(evt, config) {
    const input = evt.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`.${inputId}-error`)

    if (!input.validity.valid) {
        showInputError(input, errorElement, config)
    } else {
        hideInputError(input, errorElement, config)
    }
}

/**
 * добавляет текст ошибки и классы
 * @param {*} input принимает input в котором вы пишем
 * @param {*} errorElement принимает сообщения ошибки и определенный span
 * @param {*} config принимает обыект
 * */
function showInputError(input, errorElement, config) {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(config.errorClassVisible)
}

/**
 * убирает текст ошибки и классы
 * @param {*} input принимает input в котором вы пишем
 * @param {*} errorElement принимает сообщения ошибки и определенный span
 * @param {*} config принимает обыект
 * */
function hideInputError(input, errorElement, config) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClassVisible)
}

/**
 * выключает стандартные свойства браузера для submit
 * @param {*} evt - работает с preventDefault
 * */
function disableSubmit(evt) {
    evt.preventDefault();
}


