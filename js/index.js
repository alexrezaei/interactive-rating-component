import { formSubmit } from "./formSubmit.js";
import { removeClass } from "./removeClass.js"
export const form = document.querySelector("form");
export const input = document.querySelectorAll("input");
export const ratingContainer = document.querySelector(".rating-comp");
export const submitContainer = document.querySelector(".submitted");
export const rating = document.querySelector("#rating")
export let value = null

function onTrigger () {
    /* loops through the different input buttons and gets value onclick */
    input.forEach(button => {
        button.addEventListener("click", () => {
            value = parseInt(button.getAttribute("value"))
            /*checks if class name is added and removes previous value on second click*/
            if(button.classList.contains("selected")) {
                button.classList.remove("selected");
                value = null
            } else {
                removeClass()
                button.classList.add("selected");
            }
        })
    });
}

onTrigger()
formSubmit()