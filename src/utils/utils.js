import { bodyPreload,} from "./constants.js";
import Card from "../components/Card.js";

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
export const animateBody = () => window.addEventListener("load", function() {
   bodyPreload.classList.remove("body_preload");
}, false);

export function createCard (item, withCard, selector) {
   const cardNew = new Card({
      card: item,
      handleCardClick: (name, alt, src) => {
         withCard.open(alt, name, src)
         withCard.setEventListeners()
      }
   }, selector)
   return cardNew.generateCard();
}


