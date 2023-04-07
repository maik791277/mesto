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
   selectorsUserForm, popupUserImage, buttonOpenUserImage,
} from "../utils/constants.js";
import {animateBody, api, createCard, renderLoading} from "../utils/utils.js";
import "./index.css";

animateBody();

const popupWithCard = new PopupWithImage(popupImages, popupImageSrc, popupUserImageTitle)

api.getInitialCards()
.then(data => {
   /**
    *
    * @type {Section}
    *
    * createCards Создание карточек на главной станице с помощью вызова class Section-добавление на станицу,
    * Card-Подставление данные из объекта в темплейт тэг html,
    * PopupWithImage- создаёт для кажной карточки открывающий popup с изображением и текстом.
    */
   const CardCreatDom = new Section({
      item: data,
      renderer: (item) => {
         CardCreatDom.addItemAppend(createCard(item, popupWithCard, cardPlace, item._id, item.owner._id, item.likes.length, item.likes))
      }
   }, cardGrid)
   CardCreatDom.renderer()

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
         renderLoading(true, popupUserCard);
         api.createCard(data)
         .then((card) => {
            CardCreatDom.addItemPrepend(createCard(card, popupWithCard, cardPlace, card._id, card.owner._id, card.likes.length, card.likes))
         })
         .catch((err) => alert(err))
         .finally(() => {
            renderLoading(false, popupUserCard)
            initializationPopupCard.close()
         })
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
 * @type {UserInfo}
 *
 * обеспечивает работу popup
 * добавляет контент в input,
 * создаёт объект для отправки в DOM.
 */
const infoUser = new UserInfo(selectorsUserForm)

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
      renderLoading(true, popupUserTitle);
      const dataValueTitle = {
         inputName: item.profileName,
         inputAbut: item.profileJob
      }
      const serverData = {
         name: item.profileName,
         about: item.profileJob
      }
      api.createUserInformation(serverData)
      .then(() => {
         infoUser.setUserInfo(dataValueTitle)
      })
      .catch((err) => alert(err))
      .finally(() => {
         renderLoading(false, popupUserTitle)
         initializationPopupTitle.close()
      })
   }
})
initializationPopupTitle.setEventListeners();

/**
 * Обработчик открытия popup title
 */
buttonOpenTitle.addEventListener('click', () => {
   initializationPopupTitle.open();
   validatorPopupTitle.resetValidation()
   const dataPageElement = infoUser.getUserInfo()
   nameInputTitle.value = dataPageElement.name;
   jobInputTitle.value = dataPageElement.aboutUser;
})

/**
 * Запуск валидации для popup title
 */
const validatorPopupTitle = new FormValidator(enableValidation, popupUserTitle);
validatorPopupTitle.enableValidation();

/**
 * Запрос на добавление информации пользователя
 */
api.getUserInformation()
.then(data => {
   const dataValueTitle = {
      inputName: data.name,
      inputAbut: data.about,
   }
   infoUser.setUserInfo(dataValueTitle)
   infoUser.setUserImage(data.avatar)
})
.catch((err) => alert(err))

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
      renderLoading(true, popupUserImage);
      const dataValueTitle = {
         avatar: item.link,
      }
      api.createUserImage(dataValueTitle)
      .then(data => {
         infoUser.setUserImage(data.avatar)
      })
      .catch((err) => alert(err))
      .finally(() => {
         renderLoading(false, popupUserImage)
         initializationPopupUserImage.close()
      })
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





