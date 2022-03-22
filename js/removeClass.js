import { input } from "./index.js"


export const removeClass = () => {
    input.forEach(button => {
        button.classList.remove("selected")
    });
}