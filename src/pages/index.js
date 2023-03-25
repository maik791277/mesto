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
   initialCards,
   jobInputTitle,
   nameInputTitle,
   cardPlace,
   popupImages,
   popupImageSrc,
   popupUserCard,
   popupUserImageTitle,
   popupUserTitle,
   selectorsUserForm
} from "../utils/constants.js";
import { animateBody, createCard } from "../utils/utils.js";
import "./index.css";

animateBody();

const popupWithCard = new PopupWithImage(popupImages,popupImageSrc,popupUserImageTitle)

/**
 *
 * @type {Section}
 *
 * createCards Создание карточек на главной станице с помощью вызова class Section-добавление на станицу,
 * Card-Подставление данные из объекта в темплейт тэг html,
 * PopupWithImage- создаёт для кажной карточки открывающий popup с изображением и текстом.
 */
const CardCreatDom = new Section({
   item: initialCards,
   renderer: (item) => {
      CardCreatDom.addItem(createCard(item,popupWithCard,cardPlace))
   }
},cardGrid)
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
const initializationPopupCard = new PopupWithForm(popupUserCard,{
   submitForms: (item) => {
      const  dataValueCard = {
         name: item.cardName,
         link: item.cardLink
      }
      CardCreatDom.addItem(createCard(dataValueCard,popupWithCard,cardPlace))
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

/**
 * Обработчик открытия popup title
 */
buttonOpenTitle.addEventListener('click', () => {
   initializationPopupTitle.open();
   validatorPopupTitle.resetValidation()
   const dataPageElement =  infoUser.getUserInfo()
   nameInputTitle.value = dataPageElement.name;
   jobInputTitle.value = dataPageElement.aboutUser;
})

/**
 * Запуск валидации для popup title
 */
const validatorPopupTitle = new FormValidator(enableValidation, popupUserTitle);
validatorPopupTitle.enableValidation();



