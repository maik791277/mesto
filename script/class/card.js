import {popupUserImage,popupImageSrc,popupUserImageTitle} from "../index.js"
import {openPopup} from "../utils/utils.js";

class Card {
  /**
   * Класс отвечающий за создание карточки
   *
   * @param {Object} card объект с данными для карточки
   * @param {string} templateSelector селектор шаблона карточки
   */
  constructor(card,templateSelector ) {
    /**
    * Свойства карточки
    *
    * @param {Object} _name имя карточки
    * @param {string} _link ссылка на картинку
    * @param {string} _alt описание картинки
    * @param {string} _templateSelector селектор шаблона карточки
    */
    this._name = card.name;
    this._link = card.link;
    this._alt = card.alt;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    /**
    * Получение шаблона карточки
    *
    * @param {string} _templateSelector селектор шаблона карточки
    *
    * @return {Object} шаблон карточки
    */
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
  }

  _OpenPopupCard(element) {
    /**
    * Открытие попапа с картинкой
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
    element.querySelector('.card__image-button')
      .addEventListener("click", () => {
        openPopup(popupUserImage);
        popupImageSrc.src = `${this._link}`;
        popupImageSrc.alt = `${this._alt}`;
        popupUserImageTitle.textContent = `${this._name}`;
      })
  }

  _ClickCardLike(element) {
    /**
    * Добавление лайка карточке
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
    element.querySelector('.card__like')
      .addEventListener('click', (evt) => {
        evt.target.classList.toggle("card__like_active");
      })
  }

  _RemoveCard(element) {
    /**
    * Удаление карточки
    *
    * @param {Object} element карточка
    *
    * @return {Object} шаблон карточки
    */
    element.querySelector('.card__remove')
      .addEventListener('click', () => {
        element.remove();
      })
  }


  generateCard() {
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
    const element = this._getTemplate();
    this._OpenPopupCard(element);
    this._ClickCardLike(element);
    this._RemoveCard(element);

    element.querySelector('.card__image').src = `${this._link}`;
    element.querySelector('.card__image').alt = `${this._alt}`;
    element.querySelector('.card__title').textContent = `${this._name}`;

    return element;
  }
}



export default Card;