export default class Section {
   constructor({item, renderer}, selector) {
      this._initialArray = item;
      this._renderer = renderer;

      this._container = document.querySelector(selector)
   }

   addItemAppend(element) {
      this._container.append(element);
   }

   addItemPrepend(element) {
      this._container.prepend(element);
   }

   clear(element) {
      this._container.innerHTML = "";
   }

   renderer() {
      this._initialArray.forEach(item => {
         this._renderer(item);
      });
   }
}