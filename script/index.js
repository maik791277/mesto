const initialCards = [
    {
        name: 'Архыз',
        link: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1555&q=80',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];

// Находим в DOM
const profileForm  = document.querySelector('.profile')
const bodyPreload = document.querySelector('.body')
//Находим popup
const popupUserTitle = document.querySelector('.popup_add_user-title');
const popupUserCard = document.querySelector('.popup_add_user-card');
const popupUserImage = document.querySelector('.popup-image')
//Находим кнопки открытия popup
const addButtonCard = profileForm.querySelector('.profile__add-button')
const addButtonTitle = profileForm.querySelector('.profile__edit-button');
//Находим кнопки закрытия popup
const closeButtonTitle = popupUserTitle.querySelector('.popup__close-button');
const closeButtonCard = popupUserCard.querySelector('.popup__close-button');
const closeButtonImage = popupUserImage.querySelector('.popup__close-button')
// Находим поля формы Card
const nameInputCard = popupUserCard.querySelector('.popup__input_field_name');
const jobInputCard = popupUserCard.querySelector('.popup__input_field_job')
// Находим поля формы Image
const popupImageSrc = document.querySelector('.popup-image__image');
const popupUserImageTitle =document.querySelector('.popup-image__title');
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




//форма Template
function addCard(name, link, alt,) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.card__image');
    const cardElementTitle = cardElement.querySelector('.card__title');
    const removeCards = cardElement.querySelector('.card__remove');
    cardElement.querySelector('.card__image-button').addEventListener('click',function () {
        openPopup(popupUserImage)
        popupImageSrc.src = `${link}`;
        popupImageSrc.alt = `${alt}`;
        popupUserImageTitle.textContent = `${name}`;
    }); closeButtonImage.addEventListener('click', function () {
        closePopup(popupUserImage)
    })
    cardElementImage.src = `${link}`;
    cardElementImage.alt = `${alt}`;
    cardElementTitle.textContent = `${name}`;
    removeCards.addEventListener('click', function () {
        cardElement.remove();
    }); cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
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
addButtonCard.addEventListener('click', () => openPopup(popupUserCard));
// Кнопка закрытия формы Card
closeButtonCard.addEventListener('click', () => closePopup(popupUserCard));
// Обработчик «отправки» формы.Card
function addNewCard(evt) {
    evt.preventDefault();
    let nameInput = nameInputCard.value;
    let linkInput = jobInputCard.value;
    let altInput = nameInputCard.value;
    cardGrid.prepend(addCard(nameInput, linkInput, altInput));
    closePopup(popupUserCard)
    evt.target.reset()
}
// он будет следить за событием “submit” - «отправка»
popupUserCard.addEventListener('submit', addNewCard);






//форма Title
// Кнопка открытия формы Title
addButtonTitle.addEventListener('click', function () {
    openPopup(popupUserTitle)
    nameInputTitle.value = nameProfile.textContent;
    jobInputTitle.value = jobProfile.textContent;
});
// Кнопка закрытия формы Title
closeButtonTitle.addEventListener('click', () => closePopup(popupUserTitle));
// Обработчик «отправки» формы.
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInputTitle.value;
    jobProfile.textContent = jobInputTitle.value;

    closePopup(popupUserTitle);
}
// он будет следить за событием “submit” - «отправка»
popupUserTitle.addEventListener('submit', handleProfileFormSubmit);





//Используем слушителя и этам загрузки load для того чтобы,
//transition работаели послек загрузки станицы
window.addEventListener("load", function () {
    bodyPreload.classList.remove('body_preload')
}, false);

