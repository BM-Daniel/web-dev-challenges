const calendar = document.querySelector('#dob');
const calculate = document.querySelector('#calculate-button');
const yyyy = document.querySelector('#yyyy');
const mm = document.querySelector('#mm');
const dd = document.querySelector('#dd');

let today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today. getFullYear();


/* CODES TO SET THE MAX ATTRIBUTE OF THE DATE INPUT TO TODAY'S DATE */
let day = today.getDay();
let month = today.getMonth() + 1; // COUNTING STARTS AT 0 FOR JANUARY
let year = today.getFullYear();

if (day < 10)
{
    day = '0' + day;
}

if (month < 10)
{
    month = '0' + month;
}

today = year + '-' + month + '-' + day;
calendar.setAttribute('max', today)
/* END OF CODE */


/* FUNCTION TO CALCULATE THE NUMBER OF YEARS, MONTH AND DAYS */
calculate.addEventListener('click', () => {
    let userInput = calendar.value.split('-');
    let age = [];
    let numberOfDays = 30; // ASSUME EACH MONTH HAS 30 DAYS
    
    if (currentMonth > userInput[1])
    {
        age[0] = currentYear - userInput[0];
        age[1] = currentMonth - userInput[1] - 1;
        age[2] = (numberOfDays - userInput[2]) + currentDay;
    }
    else if (currentMonth == userInput[1])
    {
        age[0] = currentYear - userInput[0];

        if (currentDay == userInput[2])
        {
            age[1] = 0;
            age[2] = 0;
        }
        else
        {
            age[1] = 0;
            age[2] = (numberOfDays - userInput[2]) + currentDay;
        }
    }
    else
    {
        age[0] = currentYear - userInput[0] - 1
        age[1] = 12 - (currentMonth - userInput[1]) - 1
        age[2] = (numberOfDays - userInput[2]) + currentDay;
    }
    
    yyyy.innerText = age[0];
    mm.innerText = age[1];
    dd.innerText = age[2];
    
})
/* END OF FUNCTION */