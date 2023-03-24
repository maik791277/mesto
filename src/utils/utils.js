import { bodyPreload } from "./constants.js";

/**
 * Используем слушителя и этам загрузки load для того чтобы,
 * transition работаели послек загрузки станицы
 */
export const animateBody = () => window.addEventListener("load", function() {
   bodyPreload.classList.remove("body_preload");
}, false);




