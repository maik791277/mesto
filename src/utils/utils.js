import {bodyPreload, popupDeleteCard, popupUserImage,} from "./constants.js";
import Card from "../components/Card.js";
import Api from "../components/Api.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
export const animateBody = () => window.addEventListener("load", function() {
   bodyPreload.classList.remove("body_preload");
}, false);


/**
 *
 * @type {PopupDeleteCard}
 *
 * initializationPopupCard инициализирует работу popup card с помощью
 * PopupWithForm-ищет все input в объект и то чо в их ведено  и отвечает за обработку submit,
 * Card-отрисовывает карточку котобы были переданы из PopupWithForm,
 * PopupDeleteCard-создаёт popup для удаления карточки.
 */
const initializationPopupDeleteCard = new PopupDeleteCard(popupDeleteCard)
initializationPopupDeleteCard.setEventListeners();

export function createCard (item, withCard, selector, id, meId, counter, idLike, userId) {
   const cardNew = new Card({
      card: item,
      handleCardClick: (name, alt, src) => {
         withCard.open(alt, name, src)
      },
      handelDeleteClick: (cardElement,) => {
        const popupDeleteSubmit = () => {
            api.deleteCard(id)
            .then(() => {
               cardElement.remove()
               initializationPopupDeleteCard.close()
            })
            .catch((err) => alert(err))
         }
         initializationPopupDeleteCard.submitFormsCardDelete(popupDeleteSubmit)
         initializationPopupDeleteCard.open()
      },
      handelLikeClick: (evt) => {
         if (evt.target.classList.contains("card__like_active")) {
            api.deleteCardLike(id).then(data => {
               cardNew.getCardLakeCounter(data.likes.length)
               evt.target.classList.remove("card__like_active")
            })
            .catch((err) => alert(err))
         }else {
            api.putCardLike(id).then(data => {
               cardNew.getCardLakeCounter(data.likes.length)
               evt.target.classList.add("card__like_active")
            })
            .catch((err) => alert(err))
         }
      },
   }, selector, meId, counter, idLike, userId)
   return cardNew.generateCard();
}

/**
 * renderLoading показывает пользователю
 * что идёт процесс запроса
 */
export const api = new Api({
   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
   headers: {
      authorization: '048bd7b1-8b72-4dd1-a4ef-db75fb59f4cc',
      'Content-Type': 'application/json'
   }
})