const initialCards = [
  {
    name: "Архыз",
    link: "https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Архыз"
  },
  {
    name: "Челябинская область",
    link: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1555&q=80",
    alt: "Челябинская область"
  },
  {
    name: "Иваново",
    link: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Иваново"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Камчатка"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Холмогорский район"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Байкал"
  }
];


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
const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  popup__button: ".popup__button",
  inactiveButtonClass: "popup__button_type_error",
  inputErrorClass: "popup__input_type_input-error",
  errorClass: "popup__input-error",
  errorClassVisible: "popup__input-error_type_visible"
};


export { initialCards, enableValidation };