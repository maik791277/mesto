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

   /**
    * Открытие попапа с картинкой
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _handleImageClick() {
      this._cardImage.querySelector('.card__image-button')
         .addEventListener('click', () => this._handleCardClick(this._name, this._link, this._alt));
   }

   /**
    * Добавление лайка карточке
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _toggleLike(){
      this._cardImage.querySelector('.card__like')
         .addEventListener('click', (evt) => {
            evt.target.classList.toggle("card__like_active");
         })
   }

   /**
    * Удаление карточки
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _deleteCard() {
      this._cardImage.querySelector('.card__remove')
         .addEventListener('click', () => {
            this._cardImage.remove();
         })
   }

   /**
    * Открытие попапа с картинкой
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
   _setEventListeners() {
      this._deleteCard();
      this._toggleLike()
      this._handleImageClick();
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
    this._setEventListeners()

     this._cardImage.querySelector('.card__image').src = `${this._link}`;
     this._cardImage.querySelector('.card__image').alt = `${this._alt}`;
     this._cardImage.querySelector('.card__title').textContent = `${this._name}`;

    return  this._cardImage;
  }
}

export default Card;