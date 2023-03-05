/**
 * Класс отвечающий за создание карточки
 *
 * @param {Object} card объект с данными для карточки
 * @param {string} templateSelector селектор шаблона карточки
 */
class Card {
   /**
    * Свойства карточки
    *
    * @param {Object} card обыект масивов
    * @param {string} templateSelector template элемент
    * @param {string} handleCardClick функция клика
    */
  constructor(card,templateSelector,handleCardClick) {
    this._name = card.name;
    this._link = card.link;
    this._alt = card.alt;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

   /**
    * Получение шаблона карточки
    *
    * @param {string} _templateSelector селектор шаблона карточки
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
      this._cardImage.remove();
   }

   /**
    * Добавление лайка карточке
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _toggleLike(evt){
      evt.target.classList.toggle("card__like_active");
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

    return this._cardImage;
  }
}

export default Card;