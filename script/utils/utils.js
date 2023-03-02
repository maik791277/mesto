import {
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
   buttonSubmitTitle
} from "../index.js";
import Card from "../class/card.js";
import FormValidator from "../class/validate.js";
import { enableValidation, initialCards } from "../arrays/ArraysCard.js";

export {
   handlerEscape,
   closePopupOverlay,
   animateBody,
   closuresElement,
   openPopup,
   closePopup,
   CardPopaps,
   validationPopup,
   creatingCards,
   titlePopups
};


/**
 * openPopup добавляет соответствующий класс к
 * указанному элементу и добавляет обработчик клавиатуры (handlerEscape)
 * @param {*} popupElement элемент к которому добавляю класс.
 * */
function openPopup(popupElement) {
   popupElement.classList.add("popup_opened");
   popupElement.addEventListener("keydown", handlerEscape);
}

/**
 * closePopup удаляет соответствующий класс к
 * указанному элементу и удаляет обработчик клавиатуры (handlerEscape)
 * @param {*} popupElement элемент к которому добавляю класс.
 */
function closePopup(popupElement) {
   popupElement.classList.remove("popup_opened");
   popupElement.removeEventListener("keydown", handlerEscape);
}

/**
 * кнопка esc
 */
function handlerEscape(evt) {
   const popupOpen = document.querySelector(".popup_opened");
   if (evt.key === "Escape") {
      closePopup(popupOpen);
   }
}

/**
 * находит все popup и назначает closePopup на overlay
 * @param {*} popup принимает массив со всеми popup
 * */
function closePopupOverlay(popup) {
   popup.forEach(function(popup) {
      popup.addEventListener("mousedown", function(evt) {
         if (evt.target === this) {
            closePopup(popup);
         }
      });
   });
}

/**
 * closuresElement устанавливаем обработчик закрытия на крестик
 */
function closuresElement() {
   buttonsClose.forEach((button) => {
      const popup = button.closest(".popup");

      button.addEventListener("click", () => closePopup(popup));
   });
}

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
const animateBody = () => window.addEventListener("load", function() {
   bodyPreload.classList.remove("body_preload");
}, false);

function CardPopaps() {

   buttonOpenCard.addEventListener("click", () => {
      openPopup(popupUserCard);
   });

   // Обработчик «отправки» формы.Card
   function addNewCard(evt) {
      evt.preventDefault();
      const valueCard = {
         name: nameInputCard.value, link: jobInputCard.value, alt: nameInputCard.value
      };

      const card = new Card(valueCard, "#place-card");
      const cardElement = card.generateCard();
      document.querySelector(".card-grid__cards").prepend(cardElement);

      closePopup(popupUserCard);
      buttonSubmitCard.disabled = true;
      buttonSubmitCard.classList.add("popup__button_type_error");
      evt.target.reset();
   }

   // он будет следить за событием “submit” - «отправка»
   popupUserCard.addEventListener("submit", addNewCard);
}

function titlePopups() {
   //форма Title
   // Кнопка открытия формы Title
   buttonOpenTitle.addEventListener("click", function() {
      openPopup(popupUserTitle);
      nameInputTitle.value = nameProfile.textContent;
      jobInputTitle.value = jobProfile.textContent;
   });

   // Обработчик «отправки» формы.
   function handleProfileFormSubmit(evt) {
      evt.preventDefault();

      nameProfile.textContent = nameInputTitle.value;
      jobProfile.textContent = jobInputTitle.value;

      closePopup(popupUserTitle);
      buttonSubmitTitle.disabled = true;
      buttonSubmitTitle.classList.add("popup__button_type_error");
      evt.target.reset();
   }

   // он будет следить за событием “submit” - «отправка»
   popupUserTitle.addEventListener("submit", handleProfileFormSubmit);
}

function validationPopup() {
   const popupUser = new FormValidator(enableValidation, ".popup_add_user-title");
   popupUser.enableValidation();

   const popupCard = new FormValidator(enableValidation, ".popup_add_user-card");
   popupCard.enableValidation();
}

function creatingCards() {
   initialCards.forEach((item) => {
      const card = new Card(item, "#place-card");
      const cardElement = card.generateCard();

      document.querySelector(".card-grid__cards").append(cardElement);
   });
}


