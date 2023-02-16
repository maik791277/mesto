// Находим в DOM
const profileForm = document.querySelector(".profile");
const bodyPreload = document.querySelector(".body");
// Масив всех popup
const popupList = Array.from(document.querySelectorAll(".popup"));
//Находим popup
const popupUserTitle = document.querySelector(".popup_add_user-title");
const popupUserCard = document.querySelector(".popup_add_user-card");
const popupUserImage = document.querySelector(".popup-image");
//Находим кнопки открытия popup
const buttonOpenCard = profileForm.querySelector(".profile__add-button");
const buttonOpenTitle = profileForm.querySelector(".profile__edit-button");
// находим все крестики проекта по универсальному селектору
const buttonsClose = document.querySelectorAll(".popup__close-button");
//Находим кнопки submit popup
const buttonSubmitCard = popupUserCard.querySelector('.popup__button')
const buttonSubmitTitle = popupUserTitle.querySelector('.popup__button')
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
//Находжение Template
const cardTemplate = document
  .querySelector("#place-card")
  .content.querySelector(".card");
const cardGrid = document.querySelector(".card-grid__cards");

// функции открытия закрытия
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  popupElement.addEventListener("keydown", handlerEscape);

}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  popupElement.removeEventListener("keydown", handlerEscape);
}

// устанавливаем обработчик закрытия на крестик
buttonsClose.forEach((button) => {
  const popup = button.closest(".popup");

  button.addEventListener("click", () => closePopup(popup));
});

//форма Template
function addCard(objectCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementTitle = cardElement.querySelector(".card__title");
  const cardRemove = cardElement.querySelector(".card__remove");
  cardElement
    .querySelector(".card__image-button")
    .addEventListener("click", function () {
      openPopup(popupUserImage);
      popupImageSrc.src = `${objectCard.link}`;
      popupImageSrc.alt = `${objectCard.alt}`;
      popupUserImageTitle.textContent = `${objectCard.name}`;
    });
  cardElementImage.src = `${objectCard.link}`;
  cardElementImage.alt = `${objectCard.alt}`;
  cardElementTitle.textContent = `${objectCard.name}`;
  cardRemove.addEventListener("click", function () {
    cardElement.remove();
  });

  cardElement
    .querySelector(".card__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_active");
    });

  return cardElement;
}

// перебор маисва
initialCards.forEach((el) => {
  cardGrid.append(addCard(el));
});

//форма Card
// Кнопка открытия формы Card
buttonOpenCard.addEventListener("click", () => {
  openPopup(popupUserCard);
});

// Обработчик «отправки» формы.Card
function addNewCard(evt) {
  evt.preventDefault();
  const valueCard = {
    name: nameInputCard.value,
    link: jobInputCard.value,
    alt: nameInputCard.value,
  };
  cardGrid.prepend(addCard(valueCard));
  closePopup(popupUserCard);

  buttonSubmitCard.disabled = true;
  buttonSubmitCard.classList.add('popup__button_type_error')
  evt.target.reset();
}

// он будет следить за событием “submit” - «отправка»
popupUserCard.addEventListener("submit", addNewCard);

//форма Title
// Кнопка открытия формы Title
buttonOpenTitle.addEventListener("click", function () {
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
  buttonSubmitTitle.classList.add('popup__button_type_error')
  evt.target.reset();
}

// он будет следить за событием “submit” - «отправка»
popupUserTitle.addEventListener("submit", handleProfileFormSubmit);

//Используем слушителя и этам загрузки load для того чтобы,
//transition работаели послек загрузки станицы
window.addEventListener(
  "load",
  function () {
    bodyPreload.classList.remove("body_preload");
  },
  false
);

/**
 * находит все popup и назначает closePopup на overlay
 * @param {*} popup принимает массив со всеми popup
 * */
function closePopupOverlay(popup) {
  popup.forEach(function (popup) {
    popup.addEventListener("mousedown", function (evt) {
      if (evt.target === this) {
        closePopup(popup);
      }
    });
  });
}
closePopupOverlay(popupList);

function handlerEscape(evt) {
  const popupOpen = document.querySelector('.popup_opened')
      if (evt.key === "Escape") {
        closePopup(popupOpen);
      }
}
