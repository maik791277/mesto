export default class UserInfo {
   constructor({name,aboutUser, imageUser}) {
      this._name = document.querySelector(name);
      this._aboutUser = document.querySelector(aboutUser);
      this._imageUser = document.querySelector(imageUser)
   }

   getUserInfo() {
      return {
         name: this._name.textContent,
         aboutUser: this._aboutUser.textContent,
         imageUser: this._imageUser.src
      }
   }

   setUserInfo({inputName,inputAbut}) {
      this._name.textContent = inputName;
      this._aboutUser.textContent = inputAbut;
   }

   setUserImage(imageUser){
      this._imageUser.src  = imageUser;
   }
}