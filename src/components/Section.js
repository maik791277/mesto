export default class Section {
   constructor({item, renderer}, selector) {
      this._initialArray = item;
      this._renderer = renderer;

      this._container = document.querySelector(selector)
   }

   addItem(element) {
      this._container.prepend(element);
   }

   renderer() {
      this._initialArray.forEach(item => {
         this._renderer(item);
      });
   }
}