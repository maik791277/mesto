export default class Popup {
   constructor(props) {
      this._props  = props;
      this._closebitopn = this._props.querySelector('.popup__close-button');
      this._handleEscClose = this._handleEscClose.bind(this);
   }

   /**
    * open добавляет соответствующий класс к
    * указанному элементу и добавляет обработчик клавиатуры (handlerEscape)
    * */
   open() {
      this._props.classList.add("popup_opened");
      document.addEventListener('keydown', this._handleEscClose);
   }

   /**
    * close удаляет соответствующий класс к
    * указанному элементу и удаляет обработчик клавиатуры (handlerEscape)
    */
   close() {
      this._props.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
   }

   /**
    * кнопка esc
    */
   _handleEscClose(evt) {
      if (evt.key === "Escape") {
         this.close();
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
      this._props.addEventListener("mousedown", this._handleOverlayClose.bind(this));
   }
}