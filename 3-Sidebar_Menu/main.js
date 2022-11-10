const button = document.getElementsByClassName("button");
const menu = document.querySelector("#hamburger");


// CODE TO MAKE A MENU ACTIVE
for (let i = 0; i < button.length; i++)
{
    button[i].addEventListener('click', () => {
        const activeButton = document.getElementsByClassName("active");

        if (activeButton.length > 0)
        {
            for (let j = 0; j < activeButton.length; j++)
            {
                activeButton[j].className = activeButton[j].className.replace(" active", "");
            }
        }

        button[i].className += " active";
    })
}

// CODE TO TOGGLE SIDEBAR (COLLAPSE / EXPAND)
menu.addEventListener('click', () => {
    const toggleBar = document.querySelector(".navbar");
    toggleBar.classList.toggle("collapse");
})
