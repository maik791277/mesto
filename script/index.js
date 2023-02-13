// Находим в DOM
const profileForm = document.querySelector('.profile')
const bodyPreload = document.querySelector('.body')
//asdasdasdasd
const sectionPopup = Array.from(document.querySelectorAll('.popup'))
const sectionOverlay = Array.from(document.querySelectorAll('.overlay'))
//Находим popup
const popupUserTitle = document.querySelector('.popup_add_user-title');
const popupUserCard = document.querySelector('.popup_add_user-card');
const popupUserImage = document.querySelector('.popup-image')
//Находим кнопки открытия popup
const addButtonCard = profileForm.querySelector('.profile__add-button')
const addButtonTitle = profileForm.querySelector('.profile__edit-button');
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');
// Находим поля формы Card
const nameInputCard = popupUserCard.querySelector('.popup__input_field_name');
const jobInputCard = popupUserCard.querySelector('.popup__input_field_job')
// Находим поля формы Image
const popupImageSrc = document.querySelector('.popup-image__image');
const popupUserImageTitle = document.querySelector('.popup-image__title');
// Находим поля формы Title
const nameInputTitle = popupUserTitle.querySelector('.popup__input_field_name');
const jobInputTitle = popupUserTitle.querySelector('.popup__input_field_job')
// Находим текстовых полейю.
const nameProfile = profileForm.querySelector('.profile__name');
const jobProfile = profileForm.querySelector('.profile__job');
//Находжение Template
const cardTemplate = document.querySelector('#place-card').content;
const cardGrid = document.querySelector('.card-grid__cards');





// функции открытия закрытия
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened')
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}

// устанавливаем обработчик закрытия на крестик
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');

    button.addEventListener('click', () => closePopup(popup));
});


//форма Template
function addCard(name, link, alt,) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.card__image');
    const cardElementTitle = cardElement.querySelector('.card__title');
    const removeCards = cardElement.querySelector('.card__remove');
    cardElement.querySelector('.card__image-button').addEventListener('click', function () {
        openPopup(popupUserImage)
        popupImageSrc.src = `${link}`;
        popupImageSrc.alt = `${alt}`;
        popupUserImageTitle.textContent = `${name}`;
    });
    cardElementImage.src = `${link}`;
    cardElementImage.alt = `${alt}`;
    cardElementTitle.textContent = `${name}`;
    removeCards.addEventListener('click', function () {
        cardElement.remove();
    });
    cardElement.querySelector('.card__like')
        .addEventListener('click', function (evt) {
            evt.target.classList.toggle('card__like_active')
        });

    return cardElement
}

// перебор маисва
initialCards.forEach(function asd(el) {
    cardGrid.append(addCard(el.name, el.link, el.alt))
})


//форма Card
// Кнопка открытия формы Card
addButtonCard.addEventListener('click', () => {
    enableValidation({
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        popup__button: '.popup__button',
        inactiveButtonClass: 'popup__button_type_error',
        inputErrorClass: 'popup__input_type_input-error',
        errorClass: 'popup__input-error',
        errorClassVisible: 'popup__input-error_type_visible'
    })
    openPopup(popupUserCard)
});

// Обработчик «отправки» формы.Card
function addNewCard(evt) {
    evt.preventDefault();
    const nameInput = nameInputCard.value;
    const linkInput = jobInputCard.value;
    const altInput = nameInputCard.value;
    cardGrid.prepend(addCard(nameInput, linkInput, altInput));
    closePopup(popupUserCard)
    evt.target.reset()

}

// он будет следить за событием “submit” - «отправка»
popupUserCard.addEventListener('submit', addNewCard);


//форма Title
// Кнопка открытия формы Title
addButtonTitle.addEventListener('click', function () {
    enableValidation({
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        popup__button: '.popup__button',
        inactiveButtonClass: 'popup__button_type_error',
        inputErrorClass: 'popup__input_type_input-error',
        errorClass: 'popup__input-error',
        errorClassVisible: 'popup__input-error_type_visible'
    })
    openPopup(popupUserTitle)
    nameInputTitle.value = nameProfile.textContent;
    jobInputTitle.value = jobProfile.textContent;
});

// Обработчик «отправки» формы.
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInputTitle.value;
    jobProfile.textContent = jobInputTitle.value;

    closePopup(popupUserTitle);
    evt.target.reset()
}

// он будет следить за событием “submit” - «отправка»
popupUserTitle.addEventListener('submit', handleProfileFormSubmit);


//Используем слушителя и этам загрузки load для того чтобы,
//transition работаели послек загрузки станицы
window.addEventListener("load", function () {
    bodyPreload.classList.remove('body_preload')
}, false);





/**
 * находит все popup и назначает closePopup на overlay
 * @param {*} overlay принимает массив со всеми overlay
 * @param {*} popup принимает массив со всеми popup
 * */
const closuresOverlay = (overlay, popup) => {
    overlay.forEach(function (elementOverla) {
        elementOverla.addEventListener('click', function () {
            popup.forEach(function (elementPopap,evt) {
                closePopup(elementPopap)
            })
        })
    })
}

closuresOverlay(sectionOverlay, sectionPopup)


function keyHandler(evt, popup) {
    if (evt.key === 'Escape') {
       closePopup(popup)
    }
}

popupUserCard.addEventListener('keydown', (evt) => {
    keyHandler(evt,popupUserCard)
});
popupUserTitle.addEventListener('keydown', (evt) => {
    keyHandler(evt,popupUserTitle)
});


