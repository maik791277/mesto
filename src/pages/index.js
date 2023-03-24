import Section from "../components/section.js";
import Card from "../components/card.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/popup.js";
import UserInfo from "../components/userInfo.js";
import {
   initialCards, cardGrid,
   plaseCard, popupImages, buttonOpenCard,
   enableValidation, popupUserCard, buttonOpenTitle,
   popupUserTitle, selectorsUserForm,nameInputTitle,jobInputTitle,popupImageSrc,popupUserImageTitle
} from "../utils/constants.js";
import { animateBody } from "../utils/utils.js";
import './index.css';

animateBody();

/**
 *
 * @type {Section}
 *
 * createCards Создание карточек на главной станице с помощью вызова class Section-добавление на станицу,
 * Card-Подставление данные из объекта в темплейт тэг html,
 * PopupWithImage- создаёт для кажной карточки открывающий popup с изображением и текстом.
 */
const createCards = new Section({
   item: initialCards,
   renderer: (item) => {
      const cardNew = new Card({
         card: item,
         handleCardClick: (name, alt, src) => {
            const popupWithCard = new PopupWithImage(popupImages,popupImageSrc,popupUserImageTitle)
            popupWithCard.open(alt,name,src)
         }
      },plaseCard)
      const cardsCreating = cardNew.generateCard();
      createCards.addItem(cardsCreating)
   }
},cardGrid)

createCards.renderer()

/**
 *
 * @type {PopupWithForm}
 *
 * initializationPopupCard инициализирует работу popup card с помощью
 * PopupWithForm-ищет все input в объект и то чо в их ведено  и отвечает за обработку submit,
 * Card-отрисовывает карточку котобы были переданы из PopupWithForm,
 * PopupWithImage-создаёт popup для новой карточек.
 */
const initializationPopupCard = new PopupWithForm(popupUserCard,{
   submitForms: (item) => {
      const  dataValueCard = {
         name: item.cardName,
         link: item.cardLink
      }
      const cardNew = new Card({
         card: dataValueCard,
         handleCardClick: (name, alt, src) => {
            const popupWithCard = new PopupWithImage(popupImages,popupImageSrc,popupUserImageTitle)
            popupWithCard.open(alt,name,src)
         }
      },plaseCard)
      const asd = cardNew.generateCard();
      createCards.addItem(asd)
   }
})

initializationPopupCard.setEventListeners();
initializationPopupCard.close();

/**
 * Обработчик открытия popup card
 */
(() => {
   const openPopupCard = new Popup(popupUserCard);
   buttonOpenCard.addEventListener('click', () => {
      openPopupCard.open();
      validatorPopupCard.resetValidation()
   })
})();

/**
 * Запуск валидации для popup card
 */
const validatorPopupCard = new FormValidator(enableValidation, popupUserCard);
validatorPopupCard.enableValidation();

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
         const  dataValueTitle = {
            inputName: item.profileName,
            inputAbut: item.profileJob
         }
         infoUser.setUserInfo(dataValueTitle)
      }
})
initializationPopupTitle.setEventListeners();
initializationPopupTitle.close();

/**
 * Обработчик открытия popup title
 */
(() => {
   const openPopupTitle = new Popup(popupUserTitle);
   buttonOpenTitle.addEventListener('click', () => {
      openPopupTitle.open();
      validatorPopupTitle.resetValidation()
      const dataPageElement =  infoUser.getUserInfo()
      nameInputTitle.value = dataPageElement.name;
      jobInputTitle.value = dataPageElement.aboutUser;
   })
})();

/**
 * Запуск валидации для popup title
 */
const validatorPopupTitle = new FormValidator(enableValidation, popupUserTitle);
validatorPopupTitle.enableValidation();



