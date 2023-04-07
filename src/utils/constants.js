// export const initialCards = [
//    {
//       name: "Поток света",
//       link: "https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//    },
//    {
//       name: "Лестница погруженная в мировой поток области",
//       link: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1555&q=80",
//    },
//    {
//       name: "Неоновая улица",
//       link: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//    },
//    {
//       name: "Камчатка",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//    },
//    {
//       name: "Холмогорский район",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//    },
//    {
//       name: "Байкал",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//    }
// ];

/**
 Включите проверку формы.
 Атрибуты
 ----------
 Селектор форм
 CSS-селектор формы.
 селектор входных данных
 CSS-селектор входных данных.
 всплывающая__кнопка
 CSS-селектор кнопки.
 неактивный класс кнопок
 Класс для кнопки, когда она неактивна.
 класс ошибки ввода
 Класс для ввода, когда в нем есть ошибка.
 класс ошибки
 Класс для сообщения об ошибке.
 видимый класс ошибки
 Класс для сообщения об ошибке, когда оно видно.
 */
export const enableValidation = {
   formSelector: ".popup__form",
   inputSelector: ".popup__input",
   popup__button: ".popup__button",
   inactiveButtonClass: "popup__button_type_error",
   inputErrorClass: "popup__input_type_input-error",
   errorClass: "popup__input-error",
   errorClassVisible: "popup__input-error_type_visible"
};

export const selectorsUserForm = {
   name: '.profile__name',
   aboutUser: '.profile__job',
   imageUser: '.profile__avatar'
}

export const cardGrid = '.card-grid__cards';
export const cardPlace = '#place-card';
// Находим поля формы Image
export const popupImageSrc = ".popup-image__image";
export const popupUserImageTitle = ".popup-image__title";
export const popupImages = document.querySelector('.popup-image');
// Находим в DOM
export const profileForm = document.querySelector(".profile");
export const bodyPreload = document.querySelector(".body");
//Находим popup
export const popupUserTitle = document.querySelector(".popup_add_user-title");
export const popupUserCard = document.querySelector(".popup_add_user-card");
export const popupDeleteCard = document.querySelector(".popup-delete")
export const popupUserImage = document.querySelector(".popup-image-user")
//Находим кнопки открытия popup
export const buttonOpenCard = profileForm.querySelector(".profile__add-button");
export const buttonOpenTitle = profileForm.querySelector(".profile__edit-button");
export const buttonOpenUserImage = profileForm.querySelector(".profile__avatar-button");
// Находим поля формы Title
export const nameInputTitle = popupUserTitle.querySelector(".popup__input_field_name");
export const jobInputTitle = popupUserTitle.querySelector(".popup__input_field_job");
