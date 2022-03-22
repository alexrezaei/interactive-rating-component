import { ratingContainer, submitContainer, rating, value } from "./index.js"


export const displaySubmit = () => {
    ratingContainer.style.display = "none"
    submitContainer.style.display = "flex"
    rating.textContent = `You selected ${value} out of 5`
}