import {
   bodyPreload,
   buttonsClose,
   buttonOpenCard,
   popupUserCard,
   nameInputCard,
   jobInputCard,
   buttonOpenTitle,
   popupUserTitle,
   jobProfile,
   nameProfile,
   jobInputTitle,
   nameInputTitle,
   cardGrid, popupUserImage, popupImageSrc, popupUserImageTitle
} from "../index.js";
import Card from "../class/card.js";
import FormValidator from "../class/FormValidator.js";
import { enableValidation, initialCards } from "../arrays/ArraysCard.js";

export {
   handlerEscape,
   closePopupOverlay,
   animateBody,
   closuresElement,
   openPopup,
   closePopup,
   createMethodsCard,
   creatingCards,
   createMethodsTitle
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
 * appointValidation устанавливает
 * валидацию на форму указанному элементу
 * @param {*} element элемент к которому добавляю валидацию.
 */
function appointValidation(element) {
   const popupCard = new FormValidator(enableValidation, element);
   popupCard.enableValidation();
}

/**
 * кнопка esc
 */
function handlerEscape(evt) {
   if (evt.key === "Escape") {
      const popupOpen = document.querySelector(".popup_opened");
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

/**
 * создания новой карточки
 * */
function createCard(item) {
   const card = new Card(item, "#place-card",handleCardClick);
   const cardElement = card.generateCard();
   return cardElement;
}

function handleCardClick(name, link, alt) {
   popupImageSrc.src = `${link}`;
   popupImageSrc.alt = `${alt}`;
   popupUserImageTitle.textContent = `${name}`;
   openPopup(popupUserImage);
}

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
function createMethodsCard () {

   buttonOpenCard.addEventListener("click", () => {
      openPopup(popupUserCard);
      appointValidation(popupUserCard);
   });

   // Обработчик «отправки» формы.Card
   function addNewCard(evt) {
      evt.preventDefault();
      const valueCard = {
         name: nameInputCard.value,
         link: jobInputCard.value,
         alt: nameInputCard.value
      };

      cardGrid.prepend(createCard(valueCard));

      closePopup(popupUserCard);
      appointValidation(popupUserCard);
      evt.target.reset();
   }

   // он будет следить за событием “submit” - «отправка»
   popupUserCard.addEventListener("submit", addNewCard);
}

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
function createMethodsTitle() {
   //форма Title
   // Кнопка открытия формы Title
   buttonOpenTitle.addEventListener("click", function() {
      openPopup(popupUserTitle);
      appointValidation(popupUserTitle);
      nameInputTitle.value = nameProfile.textContent;
      jobInputTitle.value = jobProfile.textContent;
   });

   // Обработчик «отправки» формы.
   function handleProfileFormSubmit(evt) {
      evt.preventDefault();

      nameProfile.textContent = nameInputTitle.value;
      jobProfile.textContent = jobInputTitle.value;

      closePopup(popupUserTitle);
      appointValidation(popupUserTitle);
      evt.target.reset();
   }

   // он будет следить за событием “submit” - «отправка»
   popupUserTitle.addEventListener("submit", handleProfileFormSubmit);
}

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
function creatingCards() {
   initialCards.forEach((item) => cardGrid.append(createCard(item)));
}


