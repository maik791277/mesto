import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import {
   buttonOpenCard,
   buttonOpenTitle,
   cardGrid,
   enableValidation,
   jobInputTitle,
   nameInputTitle,
   cardPlace,
   popupImages,
   popupImageSrc,
   popupUserCard,
   popupUserImageTitle,
   popupUserTitle,
   selectorsUserForm, popupUserImage, buttonOpenUserImage, popupDeleteCard,
} from "../utils/constants.js";
import {animateBody, api, createCard,} from "../utils/utils.js";
import "./index.css";

animateBody();



/**
 * @type {UserInfo}
 *
 * обеспечивает работу popup
 * добавляет контент в input,
 * создаёт объект для отправки в DOM.
 */
const infoUser = new UserInfo(selectorsUserForm)

Promise.all([api.getInitialCards(), api.getUserInformation()])
.then(([cards, userData]) => {

   /**
    *
    * @type {Section}
    *
    * createCards Создание карточек на главной станице с помощью вызова class Section-добавление на станицу,
    * Card-Подставление данные из объекта в темплейт тэг html,
    * PopupWithImage- создаёт для кажной карточки открывающий popup с изображением и текстом.
    */
   const cardCreatDom = new Section({
      item: cards,
      renderer: (item) => {
         cardCreatDom.addItemAppend(createCard(item, popupWithCard, cardPlace, item._id, item.owner._id, item.likes.length, item.likes, userData._id))
      }
   }, cardGrid)
   cardCreatDom.renderer()

   /**
    * Запрос на добавление информации пользователя
    */
   const dataValueTitle = {
      inputName: userData.name,
      inputAbut: userData.about,
   }
   infoUser.setUserInfo(dataValueTitle)
   infoUser.setUserImage(userData.avatar)

   /**
    *
    * @type {PopupWithForm}
    *
    * initializationPopupCard инициализирует работу popup card с помощью
    * PopupWithForm-ищет все input в объект и то чо в их ведено  и отвечает за обработку submit,
    * Card-отрисовывает карточку котобы были переданы из PopupWithForm,
    * PopupWithImage-создаёт popup для новой карточек.
    */
   const initializationPopupCard = new PopupWithForm(popupUserCard, {
      submitForms: (data) => {

         return api.createCard(data)
         .then((card) => {
            cardCreatDom.addItemPrepend(createCard(card, popupWithCard, cardPlace, card._id, card.owner._id, card.likes.length, card.likes, userData._id))
         })
         .catch((err) => alert(err))
      }
   },)
   initializationPopupCard.setEventListeners();

   /**
    * Обработчик открытия popup card
    */
   buttonOpenCard.addEventListener('click', () => {
      initializationPopupCard.open();
      validatorPopupCard.resetValidation()
   })

   /**
    * Запуск валидации для popup card
    */
   const validatorPopupCard = new FormValidator(enableValidation, popupUserCard);
   validatorPopupCard.enableValidation();
})
.catch((err) => alert(err))

/**
 * popupWithCard это попапа карточки с текстом и картинкой
 */
const popupWithCard = new PopupWithImage(popupImages, popupImageSrc, popupUserImageTitle)
popupWithCard.setEventListeners()

/**
 *
 * @type {PopupWithForm}
 *
 * initializationPopupTitle инициализирует работу  popup title с помощью класса
 * PopupWithForm-которая ищет все input в объект и то чо в них введено  и отвечает за обработку submit,
 * serInfo-отвечает за обаботку добавления контента на страницу в в popup
 */
const initializationPopupTitle = new PopupWithForm(popupUserTitle, {
   submitForms: (item) => {
      const dataValueTitle = {
         inputName: item.name,
         inputAbut: item.aboutUser
      }
      const serverData = {
         name: item.name,
         about: item.aboutUser
      }
      return api.createUserInformation(serverData)
      .then(() => {
         infoUser.setUserInfo(dataValueTitle)
      })
      .catch((err) => alert(err))
   }
})
initializationPopupTitle.setEventListeners();

/**
 * Обработчик открытия popup title
 */
buttonOpenTitle.addEventListener('click', () => {
   initializationPopupTitle.open();
   validatorPopupTitle.resetValidation()
   initializationPopupTitle.setInputValues(infoUser.getUserInfo())
})

/**
 * Запуск валидации для popup title
 */
const validatorPopupTitle = new FormValidator(enableValidation, popupUserTitle);
validatorPopupTitle.enableValidation();

/**
 *
 * @type {PopupWithForm}
 *
 * initializationPopupUserImage инициализирует работу popup UserImage с помощью класса
 * PopupWithForm-которая ищет все input в объект и то чо в них введено  и отвечает за обработку submit,
 * serInfo-отвечает за обаботку добавления контента на страницу в в popup
 */
const initializationPopupUserImage = new PopupWithForm(popupUserImage, {
   submitForms: (item) => {

      const dataValueTitle = {
         avatar: item.link,
      }
     return api.createUserImage(dataValueTitle)
      .then(data => {
         infoUser.setUserImage(data.avatar)
      })
      .catch((err) => alert(err))
   }
})
initializationPopupUserImage.setEventListeners();

/**
 * Обработчик открытия popup UserImage
 */
buttonOpenUserImage.addEventListener('click', () => {
   initializationPopupUserImage.open();
   validatorPopupUserImage.resetValidation()
})

/**
 * Запуск валидации для popup UserImage
 */
const validatorPopupUserImage = new FormValidator(enableValidation, popupUserImage);
validatorPopupUserImage.enableValidation();





