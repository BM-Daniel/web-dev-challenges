const inputFields = document.querySelectorAll('.container form #top .fields input');
const registerButton = document.querySelector('.container form #register-button');
/*
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
*/

registerButton.addEventListener('click', () => {
    for (let i = 0; i < inputFields.length; i++)
    {
        if (inputFields[i].value == '')
        {

            inputFields[i].style.border = 'solid 1px red';
        }
        else
        {
            inputFields[i].style.border = 'solid 1px black';
        }
    }
})


// This is a way of verifying if the password in the Password field is same as the one in the Confirm Password field
// There is currently an issue with it that needs to be addressed
/*
const validatePassword = () => {
    if (password.value != confirmPassword.value)
    {
        confirmPassword.setCustomValidity("Password does not match");
    }
    else
    {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
*/