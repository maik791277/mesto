export default class Api {
   constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers;
   }

   getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
         method: "GET",
         headers: this.headers,
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   getUserInformation() {
      return fetch(`${this.baseUrl}/users/me`, {
         method: "GET",
         headers: this.headers,
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   createUserInformation(data) {
      return fetch(`${this.baseUrl}/users/me`, {
         method: "PATCH",
         headers: this.headers,
         body: JSON.stringify(data)
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   putCardLike(id) {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
         method: "PUT",
         headers: this.headers,
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   deleteCardLike(id) {
      return fetch(`${this.baseUrl}/cards/${id}/likes`, {
         method: "DELETE",
         headers: this.headers,
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   createUserImage(data) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
         method: "PATCH",
         headers: this.headers,
         body: JSON.stringify(data)
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   createCard(data) {
      return fetch(`${this.baseUrl}/cards`, {
         method: "POST",
         headers: this.headers,
         body: JSON.stringify(data)
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   deleteCard(id) {
      return fetch(`${this.baseUrl}/cards/${id}`, {
         method: "DELETE",
         headers: this.headers,
      })
      .then((res) => {
         if (res.ok) {
            return res.json();
         }

         return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

}

