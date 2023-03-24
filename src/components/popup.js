export default class Popup {
   constructor(selector) {
      this._selector = selector;
      this._closebitopn = this._selector.querySelector('.popup__close-button')
   }

   /**
    * open добавляет соответствующий класс к
    * указанному элементу и добавляет обработчик клавиатуры (handlerEscape)
    * */
   open() {
      this.setEventListeners();
      this._selector.classList.add("popup_opened");
   }

   /**
    * close удаляет соответствующий класс к
    * указанному элементу и удаляет обработчик клавиатуры (handlerEscape)
    */
   close() {
      this._selector.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose.bind(this))
      this._selector.removeEventListener("mousedown", this._handleOverlayClose.bind(this));
   }

   /**
    * кнопка esc
    */
   _handleEscClose(evt) {
      if (evt.key === "Escape") {
         this.close()
      }
   }

   /**
    * Нажатия на Overlay Popup
    */
   _handleOverlayClose(evt) {
      if (evt.target === evt.currentTarget) {
         this.close()
      }
   }

   /**
    * Добавляет слушатель клика иконке закрытия попапа и
    * при клике на затемнённую область вокруг формы.
    * */
   setEventListeners() {
      this._closebitopn.addEventListener("click", this.close.bind(this));
      document.addEventListener("keydown",this._handleEscClose.bind(this))
      this._selector.addEventListener("mousedown", this._handleOverlayClose.bind(this));
   }
}