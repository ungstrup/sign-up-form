const firstName = document.querySelector('#first-name');
const nameError = document.querySelector('.name-error')
const email = document.querySelector('#user-email');
const emailError = document.querySelector('.email-error')
const pwd = document.querySelector('#user-password');
const pwdConfirm = document.querySelector('#user-password-confirm');
const pwdError = document.querySelector('.pwd-error')

firstName.addEventListener("input", function (event){
    if (firstName.value === ""){
        nameError.textContent = "* Please enter your first name.";
    } else {
        nameError.textContent = "";
    }
});

email.addEventListener("input", function(event){
    if (email.validity.typeMismatch){
        emailError.textContent = "* Please enter a valid email of the format: example@abc.com";
    } else {
        emailError.textContent = "";
    }
});

function pwdValidation() {
    if (pwd.value === pwdConfirm.value){
        pwdError.textContent = "";
        pwd.classList.remove('error-outline');
        pwdConfirm.classList.remove('error-outline');
    } else {
        pwdError.textContent = "* Passwords do not match";
        pwd.classList.add('error-outline');
        pwdConfirm.classList.add('error-outline');
    }
};

pwd.onkeyup = pwdValidation;
pwdConfirm.onkeyup = pwdValidation;