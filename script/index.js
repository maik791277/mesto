// Находим в DOM
let formElement = document.querySelector('.popup');
let profileElement = document.querySelector('.profile')
// Находим поля формы
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job')
// Находим текстовых полейю.
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__job');
// Кнопка открытия формы
profileElement.querySelector('.profile__edit-button')
    .addEventListener('click', function () {
        formElement.classList.add('popup_opened')
        nameInput.value = nameProfile.textContent;
        jobInput.value = jobProfile.textContent;
    });
// Кнопка закрытия формы.
formElement.querySelector('.popup__close-button')
    .addEventListener('click', function () {
        formElement.classList.remove('popup_opened')
    });

// Обработчик «отправки» формы.
function handleFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    formElement.classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);