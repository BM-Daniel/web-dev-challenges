const generateButton = document.querySelector("#generate-button");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slidervalue");
const display = document.querySelector("#display");
const copyButton = document.querySelector("#display-container i");


let passwordLength;
let password = "";


/* UPDATE SLIDER VALUE WHEN SLIDER IS MOVED OR SCREEN LOADS */
if(document.readyState == 'loading')
{
    sliderValue.innerText = slider.value;
    passwordLength = slider.value;
}

slider.addEventListener("click", () => {
    sliderValue.innerText = slider.value;
    passwordLength = slider.value;
})
slider.addEventListener("mousemove", () => {
    sliderValue.innerText = slider.value;
    passwordLength = slider.value;
})

/* GENERATE PASSWORD BUTTON */
generateButton.addEventListener("click", (event) => {
    event.preventDefault();
    const permittedCharacters = "ABCDEFGHIJklmnopqrstuvwxyzMNOPQRSTUVWXYZabcdefghij!@#$%^&*()";

    password = "";

    if (passwordLength == undefined)
    {
        passwordLength = slider.defaultValue;
    }

    for (let i = 0; i < passwordLength; i++)
    {
        let random = Math.floor(Math.random() * permittedCharacters.length);
        password += permittedCharacters[random];        
    }
    display.value = password;
})


/* COPY PASSWORD TO CLIPBOARD */
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(password);
})