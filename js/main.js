import { eventos } from "./events.js";
import { lightbox } from "./lightbox.js";
import { contactFormValidations } from "./validation.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    contactFormValidations();
    lightbox();
    eventos();
})

