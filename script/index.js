// Находим в DOM
let formElement = document.querySelector('.popup');
let profileElement = document.querySelector('.profile')
let bodyPreload = document.querySelector('.body')
// Находим поля формы
let nameInput = formElement.querySelector('.popup__input_field_name');
let jobInput = formElement.querySelector('.popup__input_field_job')
// Находим текстовых полейю.
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__job');
// Находим кнопок.
let editButtonProfile = profileElement.querySelector('.profile__edit-button');
let closeButtonPopup = formElement.querySelector('.popup__close-button')


// Кнопка открытия формы
editButtonProfile.addEventListener('click', function () {
    formElement.classList.add('popup_opened')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
});

// Кнопка закрытия формы.
closeButtonPopup.addEventListener('click', function () {
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

//Используем слушителя и этам загрузки load для того чтобы,
//transition работаели послек загрузки станицы
window.addEventListener("load", function() {
   bodyPreload.classList.remove('body_preload')
}, false);