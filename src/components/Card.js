/**
 * Класс отвечающий за создание карточки
 *
 * @param {Object} card объект с данными для карточки
 * @param {string} templateSelector селектор шаблона карточки
 */
export default class Card {
   /**
    * Свойства карточки
    *
    * @param {Object} card обыект масивов
    * @param {string} templateSelector template элемент
    * @param {string} handleCardClick функция клика
    * @param {string} handelDeleteClick функция клика удаления
    * @param {string} handelLikeClick функция клика лайка
    * @param meId
    * @param counter
    * @param idLike
    */
  constructor({card,handleCardClick,handelDeleteClick, handelLikeClick}, templateSelector, meId, counter, idLike) {
    this._name = card.name;
    this._link = card.link;
    this._alt = card.name;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._handelDeleteClick = handelDeleteClick;
    this._handelLikeClick = handelLikeClick;
    this._meId = meId;
    this._counter = counter;
    this._idLike = idLike
  }

   getCardLakeCounter(like) {
     this.cardLikeCounter.textContent = like;
  }

   getCardLakeActivate() {
     this._idLike.forEach((item) => {
        if (item._id === "db15443b0b61b3c83bc18626"){
           this._cardLike.classList.add("card__like_active")
        }
     })
  }

   _getButtonDelete() {
      if (this._meId === "db15443b0b61b3c83bc18626") {
      }else {
         this._cardremove.remove()
      }
   }

   /**
    * Получение шаблона карточки
    *
    * @return {Object} шаблон карточки
    */
  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
  }

  _findElementsCard() {
     this._buttonImgCard = this._cardImage.querySelector('.card__image-button');
     this._cardremove = this._cardImage.querySelector('.card__remove');
     this._cardLike = this._cardImage.querySelector('.card__like');
     this._cardImg = this._cardImage.querySelector('.card__image');
     this._cardTitle = this._cardImage.querySelector('.card__title');
     this.cardLikeCounter =this._cardImage.querySelector('.card__like-counter')
  }

   /**
    * Открытие попапа с картинкой
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _handleImageClick() {
      this._handleCardClick(this._name, this._link, this._alt);
   }

   /**
    * Удаление карточки
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _deleteCard() {
      this._handelDeleteClick(this._cardImage)
   }

   /**
    * Добавление лайка карточке
    *
    *
    * @return {Object} шаблон карточки
    * @param evt
    */
   _toggleLike(evt){
      this._handelLikeClick(evt)
   }

   /**
    * Открытие попапа с картинкой
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _setEventListeners() {
      this._buttonImgCard.addEventListener('click', () => this._handleImageClick(),);
      this._cardremove.addEventListener('click', () => this._deleteCard());
      this._cardLike.addEventListener('click', (evt) => this._toggleLike(evt));
   }

   /**
    * Создание карточки
    *
    * @param {Object} _templateSelector селектор шаблона карточки
    * @param {string} _name имя карточки
    * @param {string} _link ссылка на картинку
    * @param {string} _alt описание картинки
    *
    * @return {Object} шаблон карточки
    */
  generateCard() {
    this._cardImage = this._getTemplate();
    this._findElementsCard();
    this._setEventListeners();
    this._cardImg.src = `${this._link}`;
    this._cardImg.alt = `${this._alt}`;
    this._cardTitle.textContent = `${this._name}`;

    this.getCardLakeCounter(this._counter);
    this._getButtonDelete();
    this.getCardLakeActivate();

    return this._cardImage;
  }
}