import {bodyPreload, popupDeleteCard,} from "./constants.js";
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

export function renderLoading(isLoading, popupElement) {
   const popupButton = popupElement.querySelector('.popup__button')
   if (isLoading) {
      popupButton.textContent = "Сохранить..."
   }else
   {
      popupButton.textContent = "Сохранить"
   }
}

export function createCard (item, withCard, selector, id, meId, counter, idLike) {
   const cardNew = new Card({
      card: item,
      handleCardClick: (name, alt, src) => {
         withCard.open(alt, name, src)
         withCard.setEventListeners()
      },
      handelDeleteClick: (cardElement) => {
            const initializationPopupDeleteCard = new PopupDeleteCard(popupDeleteCard,{
               submitFormsCard: () => {
                  api.deleteCard(id)
                  .then(() => {
                     cardElement.remove()
                  })
               }
            })
         initializationPopupDeleteCard.open();
         initializationPopupDeleteCard.setEventListeners();
      },
      handelLikeClick: (evt) => {
         if (evt.target.classList.toggle("card__like_active")) {
            api.putCardLike(id).then(data => {
               cardNew.getCardLakeCounter(data.likes.length)
            })
         }else {
            api.deleteCardLike(id).then(data => {
               cardNew.getCardLakeCounter(data.likes.length)
            })
         }
      },
   }, selector, meId, counter, idLike)
   return cardNew.generateCard();
}


export const api = new Api({
   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
   headers: {
      authorization: '048bd7b1-8b72-4dd1-a4ef-db75fb59f4cc',
      'Content-Type': 'application/json'
   }
})