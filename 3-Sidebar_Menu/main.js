const button = document.getElementsByClassName("button");

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