export default class UserInfo {
   constructor({name,aboutUser}) {
      this._name = document.querySelector(name);
      this._aboutUser = document.querySelector(aboutUser);
   }

   getUserInfo() {
      return {
         name: this._name.textContent,
         aboutUser: this._aboutUser.textContent
      }
   }

   setUserInfo({inputName,inputAbut}) {
      this._name.textContent = inputName;
      this._aboutUser.textContent = inputAbut
   }
}