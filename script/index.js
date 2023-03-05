import {
   closePopupOverlay,
   animateBody,
   closuresElement,
   createMethodsCard,
   creatingCards,
   createMethodsTitle,
} from "./utils/utils.js";
import FormValidator from "./class/FormValidator.js";
import { enableValidation } from "./arrays/ArraysCard.js";


export {
   popupUserImage,
   popupImageSrc,
   popupUserImageTitle,
   bodyPreload,
   buttonsClose,
   buttonOpenCard,
   popupUserCard,
   nameInputCard,
   jobInputCard,
   buttonSubmitCard,
   buttonOpenTitle,
   popupUserTitle,
   jobProfile,
   nameProfile,
   jobInputTitle,
   nameInputTitle,
   buttonSubmitTitle,
   cardGrid,
   popupCard,
   popupTitle
};

// Находим в DOM
const profileForm = document.querySelector(".profile");
const bodyPreload = document.querySelector(".body");
// Масив всех popup
const popupList = Array.from(document.querySelectorAll(".popup"));
//Находим popup
const popupUserTitle = document.querySelector(".popup_add_user-title");
const popupUserCard = document.querySelector(".popup_add_user-card");
//** cardGrid находит место размещения карточек */
const cardGrid = document.querySelector(".card-grid__cards");
/** popupUserImage находит изображение в popup карточки Класса(.popup-image)*/
const popupUserImage = document.querySelector(".popup-image");
//Находим кнопки открытия popup
const buttonOpenCard = profileForm.querySelector(".profile__add-button");
const buttonOpenTitle = profileForm.querySelector(".profile__edit-button");
// находим все крестики проекта по универсальному селектору
const buttonsClose = document.querySelectorAll(".popup__close-button");
//Находим кнопки submit popup
const buttonSubmitCard = popupUserCard.querySelector(".popup__button");
const buttonSubmitTitle = popupUserTitle.querySelector(".popup__button");
// Находим поля формы Card
const nameInputCard = popupUserCard.querySelector(".popup__input_field_name");
const jobInputCard = popupUserCard.querySelector(".popup__input_field_job");
// Находим поля формы Image
const popupImageSrc = document.querySelector(".popup-image__image");
const popupUserImageTitle = document.querySelector(".popup-image__title");
// Находим поля формы Title
const nameInputTitle = popupUserTitle.querySelector(".popup__input_field_name");
const jobInputTitle = popupUserTitle.querySelector(".popup__input_field_job");
// Находим текстовых полейю.
const nameProfile = profileForm.querySelector(".profile__name");
const jobProfile = profileForm.querySelector(".profile__job");

const popupCard = new FormValidator(enableValidation, popupUserCard);
popupCard.enableValidation();

const popupTitle = new FormValidator(enableValidation, popupUserTitle);
popupTitle.enableValidation();

creatingCards();

closePopupOverlay(popupList);

animateBody();

closuresElement();

createMethodsCard();

createMethodsTitle();
