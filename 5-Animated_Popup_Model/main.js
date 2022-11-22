const hireButton = document.querySelector("#hire-me-button");
const closeButton = document.querySelector(".close");
const cancelButton = document.querySelector("#cancel");
const sendButton = document.querySelector("#send");
const container = document.querySelector(".container");


const addActiveClass = () => {
    container.classList.add("active");
    container.classList.toggle("transition");
}

const removeActiveClass = () => {
    container.classList.remove("active");
    container.classList.toggle("transition");
}


hireButton.addEventListener("click", () => {
    addActiveClass();
})

closeButton.addEventListener("click", () => {
    removeActiveClass();
})

cancelButton.addEventListener("click", () => {
    removeActiveClass();
})

sendButton.addEventListener("click", () => {
    removeActiveClass();
})