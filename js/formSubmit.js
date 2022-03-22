import { form, value } from "./index.js"
import { displaySubmit } from "./display.js";

export function formSubmit() {
    form.addEventListener("submit", (e) => {
        /* checks if value has a number inside of it */
        e.preventDefault()
        if(value === null){
            return;
        } else {
            displaySubmit()
        }
    })
}